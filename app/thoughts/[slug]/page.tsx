import { thoughts } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import {formatDate} from "@/lib/date"

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
          <div>
            <p className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
              {thought.title}
            </p>
            <div className="my-2 py-1 border-t border-b border-dashed flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                {thought.tags.map((tag, idx) => (
                  <span className="bg-purple-400/70 px-2 rounded-md" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">
                {formatDate(thought.date)}
              </p>
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
