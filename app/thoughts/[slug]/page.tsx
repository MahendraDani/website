import { thoughts } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import dayjs from "dayjs";

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
  const formatDate = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] h:m a");
  };
  return (
    // <article className="relative max-w-3xl px-2 lg:px-0">
    //   <FadeUp delay={0.6}>
    //   <div className="mx-auto w-full min-w-0">
    //     <MDXContentRenderer code={thought.body} />
    //   </div>
    //   </FadeUp>
    // </article>
    <FadeUp delay={0.6}>
      <div>
        {/* <h3 className="font-bold">{formatDate(blog.date)}</h3> */}
        <article className="relative max-w-3xl px-2 lg:px-0">
          <div>
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl [&:not(:first-child)]:mt-6">
              {thought.title}
            </h1>
            <p className="text-muted-foreground my-2">{formatDate(thought.date)}</p>
          </div>
          <div className="mx-auto sm:w-auto min-w-0">
            <MDXContentRenderer code={thought.body} />
          </div>
        </article>
        <hr className="mb-2" />
      </div>
    </FadeUp>
  );
}
