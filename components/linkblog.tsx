import { LinkBlog } from "@/.velite";
import Link from "next/link";
import { MDXContentRenderer } from "./mdx/mdx-content-renderer";
import { formatDateAndTime } from "@/lib/date";

export const LinkBlogRenderer = ({ linkblog }: { linkblog: LinkBlog }) => {
  return (
    <div className="inline-flex justify-start items-center">
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
      <div className="text-justify">
        <MDXContentRenderer code={linkblog.body} />
      </div>
      {/* <div className="flex justify-start items-center gap-2 text-sm">
        <Link
          href={`/links/${linkblog.slugAsParams}`}
          className="text-sky-600 hover:text-sky-600/80 underline decoration-dashed  underline-offset-4"
        >
          #
        </Link>
        <Link
          href={`/links/${linkblog.slugAsParams}`}
          className="text-sky-600 hover:text-sky-600/80 underline decoration-dashed decoration-[1px] underline-offset-4"
        >
          {formatDateAndTime(linkblog.date)}
        </Link>
      </div> */}
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
