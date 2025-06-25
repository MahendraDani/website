import { blogs } from "#site/content";
import dayjs from "dayjs";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { FadeUp } from "@/components/fade-up";

export default function Page() {
  const aboutBlog = blogs.find((blog) => blog.slugAsParams === "aboutme");
  const formatDate = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] h:m a");
  };

  return (
    <div>
      <div>
        <h3>About</h3>
        <hr className="my-1" />
      </div>
      <FadeUp delay={0.3}>
        <div>
          <article className="relative max-w-3xl">
            <div className="mx-auto sm:w-auto min-w-0">
              <MDXContentRenderer code={aboutBlog!.body} />
            </div>
          </article>
        </div>
      </FadeUp>
    </div>
  );
}
