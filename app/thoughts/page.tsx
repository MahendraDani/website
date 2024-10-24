import { thoughts } from "#site/content";
import { Date } from "@/components/date";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { ArrowUpRight, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const publishedThoughts = thoughts.filter((thought)=> thought.published);

  return (
    <div>
      {publishedThoughts.map((thought, index) => {
        return (
          <FadeUp key={index}>          
            <ListItem className="my-2 rounded-sm">
              <ListItem.Link href={`thoughts/${thought.slugAsParams}`}>
                <ListItem.Content className="text-balance">
                  <div>
                    <div className="flex items-center justify-start gap-2">
                      <BrainCircuit
                        className="text-heading-secondary/60"
                        height={15}
                        width={15}
                      />
                      <ListItem.Title className="text-left">
                        {thought.title}
                      </ListItem.Title>
                    </div>
                    <p className="text-sm text-slate-500">{thought.description}</p>
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
