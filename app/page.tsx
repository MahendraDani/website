import { projects } from "#site/content";
import { A } from "@/components/a";
import { ArrowUpRight, NotebookPen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { blogs } from "#site/content";
import { ListItem } from "@/components/list-item";
import { FadeUp } from "@/components/fade-up";
import SkeletonParagraph, { SkeletonText } from "@/components/skeletons";

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
          My goal is to be on wikipedia by developing something that blows up the internet.
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
    
      <section className="my-6">
      <div>
          <h2 className="text-xl mb-2 text-heading/70">Projects</h2>
        </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="py-1 px-1 border rounded-sm hover:bg-[#00fff61d] hover:border-[#00fff61d]">
            <Link href={project.primaryLink} key={index}>
            <p className="text-lg">{project.name}</p>
            <p className="pt-1 text-sm text-slate-500">{project.abstract}</p>
          </Link>
          </div>
        ))}
      </div>
      </section>

      <section className="my-6">
        <div>
          <h2 className="text-xl mb-2 text-heading/70">Blogs</h2>
        </div>
        <div>
          {latestBlogs.map((blog, i) => (
              <ListItem key={i} className="border rounded-sm hover:border-[#00fff61d] my-4">
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
