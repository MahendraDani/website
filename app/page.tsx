import { blogs } from "#site/content";
import dayjs from "dayjs";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
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
    .slice(0, 5);
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
        <FadeUp key={idx} delay={0.6}>
          <div>
            {/* <h3 className="font-bold">{formatDate(blog.date)}</h3> */}
            <article className="relative max-w-3xl px-2 lg:px-0">
              <div className="mx-auto sm:w-auto min-w-0">
                <MDXContentRenderer code={blog.body} />
              </div>
            </article>
            <hr className="mb-2"/>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
