import { projects } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { NotebookPen } from "lucide-react";
import dayjs from "dayjs";

export default function Blogs() {
  // TODO : Try to sort blogs faster!
  const allProjects = projects
    .sort((a, b) => {
      const newProjectDate = dayjs(a.publishDate);
      const prevProjectDate = dayjs(b.publishDate);
      return newProjectDate.isBefore(prevProjectDate)
        ? 1
        : newProjectDate.isSame(prevProjectDate)
        ? 0
        : -1;
    });
  return (
    <div className="w-[90vw] sm:w-auto">
      <div>
        <h3>Projects</h3>
        <hr className="my-1" />
      </div>
      {allProjects.map((project, idx) => {
        return (
          <FadeUp key={idx}>
            <ListItem>
              <ListItem.Content className="text-balance">
                <ListItem.Date date={project.publishDate} />
                <ListItem.Link href={`/projects/${project.slugAsParams}`}>
                    <ListItem.Title className="text-left hover:text-blue-700 underline underline-offset-4">
                      {project.name}
                    </ListItem.Title>
                </ListItem.Link>
              </ListItem.Content>
            </ListItem>
          </FadeUp>
        );
      })}
    </div>
  );
}
