import { links } from "@/.velite";
import { FadeUp } from "@/components/fade-up";
import { LinkBlogRenderer } from "@/components/linkblog";
import { siteConfig } from "@/configs/site.config";
import { Metadata } from "next";
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
    <>
      <div>
        <h3>Link Blog</h3>
        <hr className="my-1" />
      </div>
      <FadeUp delay={0.3}>
        <LinkBlogRenderer linkblog={linkblog} />
      </FadeUp>
    </>
  );
}
