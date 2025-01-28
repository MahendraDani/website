import Image from "next/image";
import { blogs } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import dayjs from "dayjs";

export default function AboutPage() {
  const aboutBlog = blogs.find((blog) => blog.slugAsParams === "aboutme");
  const formatDate = (rawDate: string) => {
    return dayjs(rawDate).format("MMM D, YYYY [at] h:m a");
  };
  // console.log(aboutBlog);
  return (
    <div>
      <h2 className="font-medium text-xl mb-2">about</h2>
      {/* <div className="flex justify-start items-start gap-2">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-pretty">
            I'm Mahendra, studying Computer Science at VIT Bhopal University,
            India.
          </p>
          <p className="text-pretty">
            I like to design and implement robust systems from first principles
            using modern technology.
          </p>
          <p className="text-pretty">
            My goal is to be on wikipedia by developing something that blows up
            the internet.
          </p>
        </div>
        <div className="">
          <Image
            src={"/static/blogs/me2.jpeg"}
            height={400}
            width={300}
            className="hidden sm:block rounded-full"
            alt="Mahendra's Profile Picture"
          />
        </div>
      </div> */}
      <FadeUp delay={0.6}>
        <div>
          <article className="relative max-w-3xl px-2 lg:px-0">
            {/* <div>
              <p className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl [&:not(:first-child)]:mt-6">
                {aboutBlog.title}
              </p>
              <div className="my-2 py-1 border-t border-b border-dashed flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  {aboutBlog.tags.map((tag, idx) => (
                    <span
                      className="bg-emerald-400/70 px-2 rounded-md"
                      key={idx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  {formatDate(aboutBlog.date)}
                </p>
              </div>
            </div> */}
            <div className="mx-auto sm:w-auto min-w-0">
              <MDXContentRenderer code={aboutBlog!.body} />
            </div>
          </article>
        </div>
      </FadeUp>
    </div>
  );
}
