import { thoughts } from "#site/content";
import { Date } from "@/components/date";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
export default function Page() {
  const publishedThoughts = thoughts.filter((thought) => thought.published);
  return (
    <div>
      {publishedThoughts.map((thought, index) => {
        return (
          // <Post key={index} title={thought.title} href={`/thoughts/${thought.slugAsParams}`} date={thought.date} />
          <FadeUp key={index}>
            <ListItem>
              <ListItem.Link href={`thoughts/${thought.slugAsParams}`}>
                <ListItem.Content>
                  <div className="flex items-center justify-between gap-4">
                    <BrainCircuit
                      className="text-heading-secondary/60"
                      height={15}
                      width={15}
                    />
                    <ListItem.Title>{thought.title}</ListItem.Title>
                  </div>
                  <ListItem.Date date={thought.date} />
                </ListItem.Content>
              </ListItem.Link>
            </ListItem>
          </FadeUp>
        );
      })}
    </div>
  );
}
