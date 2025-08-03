import { tils } from "#site/content";
import { A } from "@/components/a";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {formatDate} from "@/lib/date"

interface TilsPageParams {
  params: {
    slug: string;
  };
}

function getTilsFromParams(params: { slug: string }) {
  const slug = params.slug.toString().split(",").join("/");
  const til = tils.find((til) => til.slugAsParams === slug);

  if (!til) {
    return notFound();
  }
  return til;
}

export async function generateMetadata({
  params,
}: TilsPageParams): Promise<Metadata> {
  const til = getTilsFromParams(params);

  if (!til) {
    return {};
  }
  return {
    title: `${til.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    keywords: [til.slugAsParams.split("/")[0], ...siteConfig.keywords],
    openGraph: {
      title: `${til.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      type: "article",
      url: `${siteConfig.siteUrl}/tils/${til.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${til.title} | ${siteConfig.name}`,
    },
  };
}

export default async function TilsPage({ params }: TilsPageParams) {
  const til = getTilsFromParams(params);
  const tag = til.slugAsParams.split("/")[0];
  return (
    <FadeUp>
      <div>
        <article className="relative max-w-3xl">
          <p className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
            {til.title}
          </p>
          <div className="mt-2 py-1 border-t border-b border-dashed flex justify-between items-center">
            <div className="w-full py-1 flex justify-between items-center flex-wrap gap-2">
              <span className="bg-emerald-400/70 px-2 rounded-md">{tag}</span>
              <p className="text-muted-foreground">{formatDate(til.date)}</p>
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0 mt-4 text-justify">
            <MDXContentRenderer code={til.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
