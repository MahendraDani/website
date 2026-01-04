import { tils } from "#site/content";
import { A } from "@/components/a";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDateAndTime } from "@/lib/date";

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
        <article className="relative">
          <div className="space-y-4 border py-4 px-4 mb-2 bg-secondary border-dashed">
            <h1 className="uppercase text-xl md:text-3xl font-bold text-center">
              {til.title}
            </h1>
            <div className="space-y-2">
              <p className="italic text-sm text-center text-muted-foreground">
                {formatDateAndTime(til.date)}
              </p>
              <p className="italic text-sm text-pretty text-center">
                {til.description}
              </p>
            </div>
          </div>
          <div className="mx-auto sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={til.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
