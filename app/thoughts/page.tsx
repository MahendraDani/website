import { thoughts } from "#site/content";
import { Date } from "@/components/date";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { ArrowUpRight, BrainCircuit } from "lucide-react";
import Link from "next/link";
export default function Page() {
  const publishedThoughts = thoughts.filter((thought) => thought.published);
  return (
    <div>
      <p>Hey! I understand that you want to read my thoughts. I really do! </p>
      <p>Please stick around, I will post soon.</p>
      <p>Why don't you read my <Link href={"/blogs"}><span className="font-medium text-heading-secondary/70 hover:text-heading/80 underline decoration-dashed decoration-[0.8px] underline-offset-4 inline-flex items-center">
      <span>blogs</span>
      <span> <ArrowUpRight strokeWidth={1}  height={12} width={12} /></span>
      </span></Link> till then!</p>
      <p>Thanks!</p>
      {/* {publishedThoughts.map((thought, index) => {
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
      })} */}
    </div>
  );
}
