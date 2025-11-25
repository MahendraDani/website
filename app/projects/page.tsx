import { projects } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { ArrowUpRight, NotebookPen } from "lucide-react";
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

export default function Blogs() {
  // TODO : Try to sort blogs faster!
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
      <h3 className="mb-2">Projects</h3>
      <ItemGroup className="flex flex-col gap-2">
        {allProjects.map((project, idx) => {
          const formattedDate = dayjs(project.publishDate).format(
            "MMMM DD, YYYY"
          );
          return (
            <FadeUp key={idx}>
              {/* <ListItem>
              <ListItem.Content className="text-balance">
                <ListItem.Date date={project.publishDate} />
                <ListItem.Link href={`/projects/${project.slugAsParams}`}>
                    <ListItem.Title className="text-left hover:text-blue-700 underline underline-offset-4">
                      {project.name}
                    </ListItem.Title>
                </ListItem.Link>
                <p>{project.excerpt}</p>
              </ListItem.Content>
            </ListItem> */}
              <Link
                href={`/projects/${project.slugAsParams}`}
                className="flex items-center justify-start gap-1"
              >
                <Item
                  className="group rounded-none hover:bg-secondary hover:border-black"
                  variant={"outline"}
                >
                  <ItemContent>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center justify-start gap-1">
                        <ItemTitle className="text-lg">
                          {project.name}
                        </ItemTitle>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground hidden group-hover:block duration-300" />
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

                    <ItemActions>
                      {project.links.map((item, idx) => (
                        <A
                          href={item.url}
                          key={idx}
                          className="text-black/80 hover:text-blue-700/70 underline decoration-white group-hover:decoration-secondary hover:decoration-blue-800/70 underline-offset-4"
                        >
                          {item.title}
                        </A>
                      ))}
                    </ItemActions>
                  </ItemContent>
                </Item>
              </Link>
            </FadeUp>
          );
        })}
      </ItemGroup>
    </div>
  );
}
