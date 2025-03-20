import { links, LinkBlog } from "#site/content";
import { A } from "@/components/a";
import { FadeUp } from "@/components/fade-up";
import { LinkBlogRenderer } from "@/components/linkblog";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import dayjs from "dayjs";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>
        <h3>Link Blog</h3>
        <hr className="my-1" />
      </div>

      <FadeUp delay={0.3}>
        <div className="flex flex-col justify-between items-start gap-4">
          {links.map((linkblog, idx) => (
            <LinkBlogRenderer key={idx} linkblog={linkblog} />
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
