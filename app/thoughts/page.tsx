import { thoughts } from "#site/content";
import { Date } from "@/components/date";
import { FadeUp } from "@/components/fade-up";
import Post from "@/components/post";
import PostHead from "@/components/post-head";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i}>
          {thoughts.map((thought, index) => {
            return (
              // <Post key={index} title={thought.title} href={`/thoughts/${thought.slugAsParams}`} date={thought.date} />
              <FadeUp key={index}>
                <PostHead>
                <PostHead.Link href={`thoughts/${thought.slugAsParams}`}>
                <PostHead.Content>
                  <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-sky-100/20 min-w-10">{Math.floor(Math.random() * 1000 + 1)}</p>
                  <PostHead.Title>{thought.title}</PostHead.Title>  
                  </div>
                  <PostHead.Date date={thought.date}/>
                </PostHead.Content>
                </PostHead.Link>
              </PostHead>
              </FadeUp>
            );
          })}
        </div>
      ))}
    </div>
  );
}
