import { thoughts } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import {formatDateAndTime} from "@/lib/date"

interface ThoughtPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  ThoughtPageProps["params"][]
> {
  return thoughts.map((thought) => ({
    slug: thought.slugAsParams,
  }));
}

function getThoughtFromParams({ params }: ThoughtPageProps) {
  const thought = thoughts.find(
    (thought) => thought.slugAsParams === params.slug
  );

  if (!thought) {
    return notFound();
  }
  return thought;
}

export async function generateMetadata({
  params,
}: ThoughtPageProps): Promise<Metadata> {
  const thought = getThoughtFromParams({ params });

  if (!thought) {
    return {};
  }
  return {
    title: `${siteConfig.name} | ${siteConfig.creator.name}`,
    description: thought.description,
    keywords: [...siteConfig.keywords, thought.title],
    openGraph: {
      title: `${siteConfig.name} | ${siteConfig.creator.name}`,
      description: thought.description,
      type: "article",
      url: `${siteConfig.siteUrl}/thoughts/${thought.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name}`,
      description: thought.description,
    },
  };
}

export default function Page({ params }: ThoughtPageProps) {
  const thought = getThoughtFromParams({ params });
  return (
    <FadeUp>
      <div>
        <article className="relative">
          <div className="space-y-4 border py-4 px-4 mb-2 bg-secondary border-dashed">
            <h1 className="uppercase text-xl md:text-3xl font-bold text-center">
              {thought.title}
            </h1>
            <div className="space-y-2">
              <p className="italic text-sm text-center text-muted-foreground">
                {formatDateAndTime(thought.date)}
              </p>
              <p className="italic text-sm text-pretty text-center">
                {thought.excerpt}
              </p>
              <div className="text-center text-wrap space-x-2">
                {thought.tags.map((tag, idx) => (
                  <span key={idx} className="italic lowercase text-sm text-center text-muted-foreground">
                    {"#" + tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={thought.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
