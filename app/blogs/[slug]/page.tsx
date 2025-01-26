import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { FadeUp } from "@/components/fade-up";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import dayjs from "dayjs";

interface BlogPageParams {
  params: {
    slug: string;
  };
}

// export async function generateStaticParams() : Promise<BlogPageParams["params"][]>{
//   return  blogs.map((blog)=>({
//     slug : blog.slugAsParams
//   }))
// }

function getBlogFromParam(params: { slug: string }) {
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    return notFound();
  }
  return blog;
}

export async function generateMetadata({
  params,
}: BlogPageParams): Promise<Metadata> {
  const blog = getBlogFromParam(params);

  if (!blog) {
    return {};
  }
  return {
    title: `${blog.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: blog.description,
    keywords: [...blog.tags, ...siteConfig.keywords, blog.title],
    openGraph: {
      title: `${blog.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      description: blog.description,
      type: "article",
      url: `${siteConfig.siteUrl}/blogs/${blog.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | ${siteConfig.name}`,
      description: blog.description,
    },
  };
}

export default async function BlogPage({ params }: BlogPageParams) {
  const blog = getBlogFromParam(params);
  const formatDate = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] h:m a");
  };
  return (
    // <article className="relative max-w-3xl px-2 lg:px-0">
    //   <FadeUp delay={0.6}>
    //   <div className="mx-auto w-[90vw] sm:w-auto min-w-0">
    //     <MDXContentRenderer code={blog.body} />
    //   </div>
    //   </FadeUp>
    // </article>
    <FadeUp delay={0.6}>
      <div>
        {/* <h3 className="font-bold">{formatDate(blog.date)}</h3> */}
        <article className="relative max-w-3xl px-2 lg:px-0">
          <div>
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl [&:not(:first-child)]:mt-6">
              {blog.title}
            </h1>
            <div className="my-2 py-1 border-t border-b border-dashed flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                {blog.tags.map((tag, idx) => (
                  <span className="bg-secondary px-2 rounded-md" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">{formatDate(blog.date)}</p>
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0">
            <MDXContentRenderer code={blog.body} />
          </div>
        </article>
        <hr className="mb-2" />
      </div>
    </FadeUp>
  );
}
