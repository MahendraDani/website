import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import {formatDate} from "@/lib/date"
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

export async function generateStaticParams() : Promise<ProjectPageParams["params"][]>{
  return  projects.map((project)=>({
    slug : project.slugAsParams
  }))
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
  return (
    <FadeUp>
      <div>
        <article className="relative max-w-3xl">
          <div>
            <p className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
              {project.name}
            </p>
            <div className="mt-2 py-1 border-t border-b border-dashed flex justify-between items-center">
              <div className="w-2/3 py-1 flex justify-start items-center flex-wrap gap-2">
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
            <div className="mb-2 border-b py-1 border-dashed flex flex-wrap justify-start items-center gap-4">
              {project.links.map((item, idx) => (
                <A key={idx} href={item.url} variant={"underline"}>
                  {item.title}
                </A>
              ))}
            </div>
            {project.collaborators && 
              <div className="mb-2 border-b py-1 border-dashed flex flex-wrap justify-start items-center gap-4">
              {project.collaborators?.map((item, idx) => (
                <A key={idx} href={item.social} variant={"underline"}>
                  {item.name}
                </A>
              ))}
            </div>
            }
          </div>
          <div className="mx-auto sm:w-auto min-w-0">
            <MDXContentRenderer code={project.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
