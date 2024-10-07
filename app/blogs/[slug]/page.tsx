import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/mdx/toc";

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
    <article className="relative max-w-3xl px-2 lg:px-0 py-6 lg:py-16">
      <p className="px-2 py-1 rounded text-xs bg-secondary inline-block">
        {new Date(blog.date).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <h1 className="head-text-sm my-3">{blog.title}</h1>
      <div className="hidden text-sm min-[1400px]:inline-flex">
        <div className="fixed top-28 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={blog.toc} />
        </div>
      </div>
      <div className="mx-auto w-full min-w-0">
        <MDXContentRenderer code={blog.body} />
        <hr className="my-4 md:my-6" />
      </div>
    </article>
  );
}
