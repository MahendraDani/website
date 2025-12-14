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
          <p className="scroll-m-20 px-4 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
            {til.title}
          </p>
          <div className="mt-2 py-1 px-4 border-t border-b border-dashed flex justify-between items-center">
            <div className="w-full py-1 flex justify-between items-center flex-wrap gap-2">
              <span className="bg-emerald-400/70 px-2 rounded-md">{tag}</span>
              <div className="flex justify-start items-center gap-4">
                <p className="text-muted-foreground">{formatDateAndTime(til.date)}</p>
                {til.source && (
                  <A
                    className="text-blue-700/70 hover:text-blue-800 underline decoration-dashed decoration-[1px] underline-offset-4"
                    href={til.source}
                  >
                    source
                  </A>
                )}
              </div>
            </div>
          </div>
          <div className="mx-auto w-[100vw] p-4 sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={til.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
