import { projects } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ArrowUpRight, GlobeIcon, NotebookPenIcon, VideoIcon } from "lucide-react";
import dayjs from "dayjs";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";
import { A } from "@/components/a";
import { GithubIcon } from "@/components/icon/github";
import { TwitterIcon } from "@/components/icon/twitter";
import { LinkedInIcon } from "@/components/icon/linkedin";
import { YouTubeIcon } from "@/components/icon/youtube";

export default function Blogs() {
  const allProjects = projects.sort((a, b) => {
    const newProjectDate = dayjs(a.publishDate);
    const prevProjectDate = dayjs(b.publishDate);
    return newProjectDate.isBefore(prevProjectDate)
      ? 1
      : newProjectDate.isSame(prevProjectDate)
      ? 0
      : -1;
  });

  return (
    <div>
      <ItemGroup className="flex flex-col gap-2">
        {allProjects.map((project, idx) => {
          const formattedDate = dayjs(project.publishDate).format(
            "MMMM DD, YYYY"
          );
          return (
            <FadeUp key={idx}>
              <div className="group">
                <div className="flex justify-end gap-2 my-2">
                  {project.links.map((link, idx) => (
                    <Link key={idx} href={link.url} target="_blank">
                      {link.type=="linkedin" && <LinkedInIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                      {link.type=="github" && <GithubIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                      {link.type=="twitter" && <TwitterIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                      {link.type=="live" && <GlobeIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                      {link.type=="blog" && <NotebookPenIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                      {(link.type=="demoVideo" || link.type=="youtube") && <VideoIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                      {link.type=="other" && <GlobeIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />}
                    </Link>
                  ))}
                </div>
                <Item
                  asChild
                  className="rounded-none hover:bg-accent/15 hover:border-accent"
                  variant="outline"
                >
                  <Link
                    href={`/projects/${project.slugAsParams}`}
                    className="flex flex-col gap-2"
                  >
                    <ItemContent>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center justify-start gap-1">
                          <ItemTitle className="text-pretty">
                            {project.name}
                          </ItemTitle>
                        </div>

                        <p className="text-muted-foreground">{formattedDate}</p>
                      </div>

                      <ItemDescription className="text-secondary-foreground">
                        {project.excerpt}
                      </ItemDescription>

                      <div className="space-x-2 text-muted-foreground">
                        {project.stack.map((item, idx) => (
                          <span key={idx}>{item}</span>
                        ))}
                      </div>
                    </ItemContent>
                  </Link>
                </Item>
              </div>
            </FadeUp>
          );
        })}
      </ItemGroup>
    </div>
  );
}
