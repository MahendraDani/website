import { LinkBlog } from "@/.velite";
import { A } from "./a";
import Link from "next/link";
import { MDXContentRenderer } from "./mdx/mdx-content-renderer";
import dayjs from "dayjs";

export const LinkBlogRenderer = ({ linkblog }: { linkblog: LinkBlog }) => {
  return (
    <div className="border-b pb-2 w-full">
      <div className="inline-flex justify-start items-center">
        {/* <A href={linkblog.source.url} variant={"underline"} className="text-2xl">
          {linkblog.source.title}
        </A> */}
        <A
          href={linkblog.source.url}
          variant={"underline"}
        >
          {linkblog.source.title}
        </A>
        <div>
          {linkblog.via && (
            <div>
              <span>{"("}</span>
              <Link
                target="_blank"
                className="text-blue-700/70 hover:text-blue-800 underline decoration-dashed decoration-[1px] underline-offset-4"
                href={linkblog.via.url}
              >
                via
              </Link>
              <span>{")"}</span>
            </div>
          )}
        </div>
      </div>
      <div className="text-justify">
        <MDXContentRenderer code={linkblog.body} />
      </div>
      <div className="flex justify-start items-center gap-2 pt-1 text-[0.5rem]">
        <A href={`/links/${linkblog.slugAsParams}`} variant={"underline"}>
          #
        </A>
        <A
          href={`/links/${linkblog.slugAsParams}`}
          variant={"underline"}
          className="text-sm"
        >
          {dayjs(linkblog.date).format("DD MMMM YYYY, hh:mm a")}
        </A>
      </div>
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
};
