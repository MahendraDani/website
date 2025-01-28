import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import { FadeUp } from "@/components/fade-up";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import dayjs from "dayjs";
import { A } from "@/components/a";

interface ProjectPageParams {
  params: {
    slug: string;
  };
}
function getProjectFromParams(params: { slug: string }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return notFound();
  }
  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageParams): Promise<Metadata> {
  const project = getProjectFromParams(params);

  if (!project) {
    return {};
  }
  return {
    title: `${project.name} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: project.abstract,
    keywords: [...siteConfig.keywords, project.name],
    openGraph: {
      title: `${project.name} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      description: project.abstract,
      type: "article",
      url: `${siteConfig.siteUrl}/projects/${project.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${siteConfig.name}`,
      description: project.abstract,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const project = getProjectFromParams(params);
  const formatDate = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] H:M a");
  };
  return (
    <FadeUp delay={0.6}>
      <div>
        <article className="relative max-w-3xl">
          <div>
            <p className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
              {project.name}
            </p>
            <div className="my-2 py-1 border-t border-b border-dashed flex justify-between items-start">
              <div className="w-2/3 flex justify-start items-center flex-wrap gap-2">
                {project.stack.map((item, idx) => (
                  <span className="bg-emerald-400/70 px-2 rounded-md" key={idx}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">
                {formatDate(project.publishDate)}
              </p>
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0">
            <MDXContentRenderer code={project.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
