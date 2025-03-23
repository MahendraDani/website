import { links, LinkBlog } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { LinkBlogRenderer } from "@/components/linkblog";
import dayjs from "dayjs";

export default function Page() {
  const publishedLinks = links
      .sort((a, b) => {
        const newLinkDate = dayjs(a.date);
        const prevLinkDate = dayjs(b.date);
        return newLinkDate.isBefore(prevLinkDate)
          ? 1
          : newLinkDate.isSame(prevLinkDate)
          ? 0
          : -1;
      });

  return (
    <div>
      <div>
        <h3>Link Blog</h3>
        <hr className="my-1" />
      </div>

      <FadeUp delay={0.3}>
        <div className="flex flex-col justify-between items-start gap-4">
          {publishedLinks.map((linkblog, idx) => (
            <LinkBlogRenderer key={idx} linkblog={linkblog} />
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
