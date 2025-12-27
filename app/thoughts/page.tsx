import { thoughts } from "#site/content";
import { FadeUp } from "@/components/fade-up";
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
import { formatDateAndTime } from "@/lib/date";

export default function Page() {
  const publishedThoughts = thoughts
    .filter((thought) => thought.published)
    .sort((a, b) => {
      const newThoughtDate = dayjs(a.date);
      const prevThoughtDate = dayjs(b.date);
      return newThoughtDate.isBefore(prevThoughtDate)
        ? 1
        : newThoughtDate.isSame(prevThoughtDate)
        ? 0
        : -1;
    });

  return (
    <div>
      <ItemGroup className="flex flex-col gap-4">
        {publishedThoughts.map((thought, idx) => {
          return (
            <FadeUp key={idx}>
              <div className="group">
                <Item
                  asChild
                  className="rounded-none bg-secondary hover:bg-accent/15 hover:border-accent duration-300 ease-in-out"
                  variant="outline"
                >
                  <Link
                    href={`/thoughts/${thought.slugAsParams}`}
                  >
                    <ItemContent>
                      <div className="flex justify-between items-center">
                        <ItemTitle className="text-pretty">
                          {thought.title}
                        </ItemTitle>
                        <p className="text-muted-foreground sm:block hidden">{formatDateAndTime(thought.date)}</p>
                      </div>
                      <p className="text-muted-foreground sm:hidden">{formatDateAndTime(thought.date)}</p>
                      <ItemDescription>{thought.description}</ItemDescription>
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
