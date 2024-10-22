import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { FadeUp } from "@/components/fade-up";

interface BlogPageParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() : Promise<BlogPageParams["params"][]>{
  return  blogs.map((blog)=>({
    slug : blog.slugAsParams
  }))
}

function getBlogFromParam(params: { slug: string }) {
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    return notFound();
  }
  return blog;
}
export default function BlogPage({ params }: BlogPageParams) {
  const blog = getBlogFromParam(params);
  return (
    <article className="relative max-w-3xl px-2 lg:px-0">
      <FadeUp delay={0.6}>
      <div className="mx-auto w-full min-w-0">
        <MDXContentRenderer code={blog.body} />
      </div>
      </FadeUp>
    </article>
  );
}
