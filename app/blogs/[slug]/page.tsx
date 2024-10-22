import { blogs } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { FadeUp } from "@/components/fade-up";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";

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
    <article className="relative max-w-3xl px-2 lg:px-0">
      <FadeUp delay={0.6}>
      <div className="mx-auto w-full min-w-0">
        <MDXContentRenderer code={blog.body} />
      </div>
      </FadeUp>
    </article>
  );
}
