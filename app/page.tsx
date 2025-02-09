import { blogs } from "#site/content";
import dayjs from "dayjs";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { A } from "@/components/a";
import { FadeUp } from "@/components/fade-up";
import { formatDate } from "@/lib/date";

export default function Page() {
  const publishedBlogs = blogs
    .filter((blog) => blog.published)
    .sort((a, b) => {
      const newBlogDate = dayjs(a.date);
      const prevBlogDate = dayjs(b.date);
      return newBlogDate.isBefore(prevBlogDate)
        ? 1
        : newBlogDate.isSame(prevBlogDate)
        ? 0
        : -1;
    })
    .filter((blog) => blog.slugAsParams != "aboutme")
    .slice(0, 5);
  return (
    <FadeUp delay={0.3}>
      <div className="flex flex-col justify-start gap-2">
        {publishedBlogs.slice(0, 3).map((blog, idx) => (
          <div key={idx}>
            <article className="relative max-w-3xl">
              <div>
                <A
                  href={`/blogs/${blog.slugAsParams}`}
                  variant={"underline"}
                  className="text-black hover:text-blue-700/70"
                >
                  <span className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
                    {blog.title}
                  </span>
                </A>
                <div className="my-2 py-1 border-t border-b border-dashed flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2">
                    {blog.tags.map((tag, idx) => (
                      <span
                        className="bg-emerald-400/60 px-2 rounded-md"
                        key={idx}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    {formatDate(blog.date)}
                  </p>
                </div>
              </div>
              <div className="mx-auto sm:w-auto min-w-0">
                <MDXContentRenderer code={blog.body} />
              </div>
            </article>
            <hr className="mt-6 mb-2 border-black/70" />
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
