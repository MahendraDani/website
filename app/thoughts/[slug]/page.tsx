import {thoughts} from "#site/content"
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";

interface ThoughtPageProps {
    params : {
        slug : string;
    }
}

export async function generateStaticParams() : Promise<ThoughtPageProps["params"][]>{
  return  thoughts.map((thought)=>({
    slug : thought.slugAsParams
  }))
}

function getThoughtFromParams({params} : ThoughtPageProps){
  const thought = thoughts.find((thought) => thought.slugAsParams === params.slug);

  if (!thought) {
    return notFound()
  }
  return thought;
}

export async function generateMetadata({
  params,
}: ThoughtPageProps): Promise<Metadata> {
  const thought = getThoughtFromParams({params});

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


export default function Page({params} : ThoughtPageProps){
    const thought = getThoughtFromParams({params});
    return (
      <article className="relative max-w-3xl px-2 lg:px-0">
        <FadeUp delay={0.6}>
        <div className="mx-auto w-full min-w-0">
          <MDXContentRenderer code={thought.body} />
        </div>
        </FadeUp>
      </article>
    );
}