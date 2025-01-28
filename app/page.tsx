import { blogs } from "#site/content";
import dayjs from "dayjs";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { A } from "@/components/a";
import { FadeUp } from "@/components/fade-up";

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
    .slice(0, 5);

  const formatDate = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] h:m a");
  };
  return (
    // <div>
    //   <div>
    //     <p>
    //       I am a developer and programmer. I am learning to solve problems
    //       using computers and developing web apps for fun. I get excited by
    //       seeing how science is applied in real life.
    //     </p>
    //     <br />
    //     <p>
    //       My goal is to be on wikipedia by developing something that blows up the internet.
    //     </p>
    //     <br />
    //     <p>
    //       If that isn't convincing enough read my{" "}
    //       <Link href={"/blogs/hello-world"}>
    //         <span className="font-medium underline decoration-dashed decoration-[0.8px] underline-offset-4 inline-flex items-center">
    //           <span>hello-world</span>
    //           <span>
    //             {" "}
    //             <ArrowUpRight strokeWidth={1} height={12} width={12} />
    //           </span>
    //         </span>{" "}
    //         blog.
    //       </Link>
    //     </p>
    //   </div>

    <div className="flex flex-col justify-start gap-2">
      {publishedBlogs.slice(0, 3).map((blog, idx) => (
          <FadeUp delay={0.3} key={idx}>
            <article className="relative max-w-3xl px-2 lg:px-0">
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
          </FadeUp>
      ))}
    </div>
  );
}
