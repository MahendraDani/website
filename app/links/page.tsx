import { links, LinkBlog } from "#site/content";
import { A } from "@/components/a";
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

      <div className="flex flex-col justify-between items-start gap-4">
        {links.map((link, idx) => (
          <LinkBlogContent key={idx} link={link} />
        ))}
      </div>
    </div>
  );
}

function LinkBlogContent({ link }: { link: LinkBlog }) {
  return (
    <div className="border-b pb-2 w-full">
      <div className="inline-flex justify-start items-center">
        {/* <A href={link.source.url} variant={"underline"} className="text-2xl">
          {link.source.title}
        </A> */}
        <A
          href={link.source.url}
          className="text-blue-700/70 underline decoration-blue-600/70 hover:text-blue-900 underline-offset-4"
        >
          {link.source.title}
        </A>
        <div>
          {link.via && (
            <div>
              <span>{"("}</span>
              <Link
                target="_blank"
                className="text-blue-700/70 hover:text-blue-800 underline decoration-dashed decoration-[1px] underline-offset-4"
                href={link.via.url}
              >
                via
              </Link>
              <span>{")"}</span>
            </div>
          )}
        </div>
      </div>
      <MDXContentRenderer code={link.body} />
      <p className="text-sm pt-1">
        {dayjs(link.date).format("DD MMMM YYYY, hh:mm a")}
      </p>
      {/* TODO : should I show tags? becuase I don't support /tags/id page? */}
      {/* <div>
        {link.tags &&
          link.tags.map((tag, idx) => (
            <span className="bg-emerald-400/70 px-2 rounded-md" key={idx}>
              {tag}
            </span>
          ))}
      </div> */}
    </div>
  );
}
