import { projects } from "#site/content";
import { A } from "@/components/a";
import { ArrowUpRight, NotebookPen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { blogs } from "#site/content";
import { ListItem } from "@/components/list-item";
import { FadeUp } from "@/components/fade-up";

export default function Page() {
  const latestBlogs = blogs.filter((blog) => blog.published);
  return (
    <div>
      <div>
        <p>
          Hi! I am a developer and programmer. I am learning to solve problems
          using computers and developing web apps for fun. I get excited by
          seeing how science is applied in real life.
        </p>
        <br />
        <p>
          My life goal is to be on wikipedia by developing something{" "}
          {"(i don't know rn)"} that blows up the internet.
        </p>
        <br />
        <p>
          If that isn't convincing enough read my{" "}
          <Link href={"/blogs/hello-world"}>
            <span className="font-medium text-heading-secondary/70 hover:text-heading/80 underline decoration-dashed decoration-[0.8px] underline-offset-4 inline-flex items-center">
              <span>hello-world</span>
              <span>
                {" "}
                <ArrowUpRight strokeWidth={1} height={12} width={12} />
              </span>
            </span>{" "}
            blog?
          </Link>
        </p>
      </div>
      <section className="my-6 grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <div key={index} className="py-1 px-1 border rounded-sm">
            <A
              variant={"underline"}
              href={project.primaryLink}
              className={"text-lg text-heading-secondary/80 hover:text-heading"}
            >
              {project.name}
            </A>
            <p className="pt-1 text-sm">{project.abstract}</p>
          </div>
        ))}
      </section>

      <section className="my-6">
        <div>
          <h2 className="text-xl mb-2 text-heading/70">Blogs</h2>
        </div>
        <div>
          {latestBlogs.map((blog, i) => (
              <ListItem key={i} className="border rounded-sm hover:border-[#00fff61d]">
                <ListItem.Link href={`blogs/${blog.slugAsParams}`}>
                  <ListItem.Content className="px-2">
                    <div>
                      <div className="flex items-center justify-start gap-2">
                        <NotebookPen
                          className="text-heading-secondary/60"
                          height={15}
                          width={15}
                        />
                          <ListItem.Title className="text-left">{blog.title}</ListItem.Title>
                      </div>
                      <p className="text-sm text-slate-500">The begining of my new journey on the internet</p>
                    </div>
                    <ListItem.Date date={blog.date} />
                  </ListItem.Content>
                </ListItem.Link>
              </ListItem>
          ))}
        </div>
      </section>
    </div>
  );
}
