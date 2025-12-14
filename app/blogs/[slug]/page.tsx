import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/fade-up";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import { formatDateAndTime } from "@/lib/date";

interface BlogPageParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  BlogPageParams["params"][]
> {
  return blogs.map((blog) => ({
    slug: blog.slugAsParams,
  }));
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
          <div className="space-y-4 border py-4 px-4 mb-2 bg-secondary border-dashed">
            <h1 className="uppercase text-xl md:text-3xl font-bold text-center">
              {blog.title}
            </h1>
            <div className="space-y-2">
              <p className="italic text-sm text-center text-muted-foreground">
                {formatDateAndTime(blog.date)}
              </p>
              <p className="italic text-sm text-pretty text-center">
                {blog.excerpt}
              </p>
              <div className="text-center text-wrap space-x-2">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="italic lowercase text-sm text-center text-muted-foreground">
                    {"#" + tag}
                  </span>
                ))}
              </div>
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
