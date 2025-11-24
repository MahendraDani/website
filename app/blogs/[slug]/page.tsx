import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/fade-up";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import { formatDate } from "@/lib/date";

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
  return (
    <FadeUp>
      <div>
        <article>
          <div>
            <p className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
              {blog.title}
            </p>
            <div className="my-2 py-1 border-t border-b border-dashed flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                {blog.tags.map((tag, idx) => (
                  <span className="bg-emerald-400/70 px-2 rounded-md" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">{formatDate(blog.date)}</p>
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={blog.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
