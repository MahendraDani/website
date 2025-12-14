import { links } from "@/.velite";
import { FadeUp } from "@/components/fade-up";
import { LinkBlogRenderer } from "@/components/linkblog";
import { siteConfig } from "@/configs/site.config";
import { formatDateAndTime } from "@/lib/date";
import { ArrowUpRight, ArrowUpRightFromSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface LinkPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: LinkPageProps): Promise<Metadata> {
  const linkblog = getLinkBlogFromParams({ params });

  if (!linkblog) {
    return {};
  }
  return {
    title: `${siteConfig.name} | ${siteConfig.creator.name}`,
    // description: link.description,
    keywords: [...siteConfig.keywords],
    openGraph: {
      title: `${siteConfig.name} | ${siteConfig.creator.name}`,
      type: "article",
      url: `${siteConfig.siteUrl}/links/${linkblog.slugAsParams}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name}`,
    },
  };
}

export async function generateStaticParams(): Promise<
  LinkPageProps["params"][]
> {
  return links.map((link) => ({
    slug: link.slugAsParams,
  }));
}

function getLinkBlogFromParams({ params }: LinkPageProps) {
  const linkblog = links.find((link) => link.slugAsParams === params.slug);

  if (!linkblog) {
    return notFound();
  }
  return linkblog;
}
export default function Page({ params }: LinkPageProps) {
  const linkblog = getLinkBlogFromParams({ params });
  return (
    <FadeUp delay={0.3}>
      <div className="space-y-4 border py-4 px-4 mb-2 bg-secondary border-dashed">
        <h1 className="uppercase text-xl md:text-3xl font-bold text-center">
          {linkblog.source.title}
        </h1>
        <div className="space-y-2">
          <p className="italic text-sm text-center text-muted-foreground">
            {formatDateAndTime(linkblog.date)}
          </p>
          <div className="text-center text-accent hover:text-accent/80 hover:underline underline-offset-4 decoration-dashed duration-300 ease-in-out flex justify-center items-center">
            <Link href={linkblog.source.url} className="text-sm ">
              {"Source"}
            </Link>
            <ArrowUpRight className="w-3 h-3" />
          </div>
          <div className="text-center text-wrap space-x-2">
            {linkblog.tags &&
              linkblog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="italic lowercase text-sm text-center text-muted-foreground"
                >
                  {"#" + tag}
                </span>
              ))}
          </div>
        </div>
      </div>

      <LinkBlogRenderer linkblog={linkblog} />
    </FadeUp>
  );
}
