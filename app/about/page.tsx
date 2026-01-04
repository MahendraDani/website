import { blogs } from "#site/content";
import dayjs from "dayjs";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { FadeUp } from "@/components/fade-up";
import { notFound } from "next/navigation";

export default function Page() {
  const aboutBlog = blogs.find((blog) => blog.slugAsParams === "aboutme");
  const formatDateAndTime = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] h:m a");
  };

  if (!aboutBlog) {
    return notFound();
  }

  return (
    <FadeUp>
      <div>
        <article>
          <div className="space-y-4 border py-4 px-4 mb-2 bg-secondary border-dashed">
                <h1 className="uppercase text-xl md:text-3xl font-bold text-center">
                  {aboutBlog.title}
                </h1>
                <div className="space-y-2">
                  {/* <p className="italic text-sm text-center text-muted-foreground">
                    {formatDateAndTime(aboutBlog.date)}
                  </p> */}
                  <p className="italic text-sm text-pretty text-center">
                    {aboutBlog.description}
                  </p>
                </div>
              </div>
          <div className="mx-auto sm:w-auto min-w-0 text-justify">
            <MDXContentRenderer code={aboutBlog.body} />
          </div>
        </article>
      </div>
    </FadeUp>
  );
}
