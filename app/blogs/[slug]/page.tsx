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

function getBlogFromParam(params: { slug: string }) {
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    null;
  }
  return blog;
}
export default function BlogPage({ params }: BlogPageParams) {
  const slug = params.slug;
  const blog = getBlogFromParam(params);
  if (!blog) {
    notFound();
  }
  // console.log(slug);
  // console.log(blog);
  return (
    <article className="relative max-w-3xl px-2 lg:px-0">
      {/* <p className="px-2 py-1 rounded text-xs bg-secondary inline-block">
        {new Date(blog.date).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p> */}
      {/* <FadeUp delay={0.3}>
      <h1 className="text-4xl text-pretty font-bold my-3">{blog.title}</h1>
      </FadeUp> */}
      {/* <div className="hidden text-sm min-[1400px]:inline-flex">
        <div className="fixed top-36 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={blog.toc} />
        </div>
      </div> */}
      <FadeUp delay={0.6}>
      <div className="mx-auto w-full min-w-0">
        <MDXContentRenderer code={blog.body} />
        {/* <hr className="my-4 md:my-6" /> */}
      </div>
      </FadeUp>
    </article>
  );
}
