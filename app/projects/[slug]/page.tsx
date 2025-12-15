import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { formatDateAndTime } from "@/lib/date";
import { FadeUp } from "@/components/fade-up";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import dayjs from "dayjs";
import { A } from "@/components/a";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icon/linkedin";
import { GithubIcon } from "@/components/icon/github";
import { TwitterIcon } from "@/components/icon/twitter";
import { GlobeIcon, NotebookPenIcon, VideoIcon } from "lucide-react";

interface ProjectPageParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageParams["params"][]
> {
  return projects.map((project) => ({
    slug: project.slugAsParams,
  }));
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
        <article className="relative">
          {/* <div>
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
                {formatDateAndTime(project.publishDate)}
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
          </div> */}
          <div className="space-y-4 border py-4 px-4 mb-2 bg-secondary border-dashed">
            <h1 className="uppercase text-xl md:text-3xl font-bold text-center">
              {project.name}
            </h1>
            <div className="space-y-2">
              <p className="italic text-sm text-center text-muted-foreground">
                {formatDateAndTime(project.publishDate)}
              </p>
              <p className="italic text-sm text-pretty text-center">
                {project.abstract}
              </p>
              <div className="text-center text-wrap space-x-2">
                {project.stack.map((stack, idx) => (
                  <span
                    key={idx}
                    className="italic captialize text-sm text-center text-muted-foreground"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {project.links.map((link, idx) => (
                  <Link key={idx} href={link.url} target="_blank">
                    {link.type == "linkedin" && (
                      <LinkedInIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                    {link.type == "github" && (
                      <GithubIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                    {link.type == "twitter" && (
                      <TwitterIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                    {link.type == "live" && (
                      <GlobeIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                    {link.type == "blog" && (
                      <NotebookPenIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                    {(link.type == "demoVideo" || link.type == "youtube") && (
                      <VideoIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                    {link.type == "other" && (
                      <GlobeIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    )}
                  </Link>
                ))}
              </div>
              
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={project.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
