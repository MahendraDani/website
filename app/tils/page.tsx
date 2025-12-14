import { tils } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { formatDateAndTime } from "@/lib/date";
import dayjs from "dayjs";
import Link from "next/link";

export default async function Tils() {
  const publishedTils = tils.sort((a, b) => {
    const newTilDate = dayjs(a.date);
    const prevTilDate = dayjs(b.date);
    return newTilDate.isBefore(prevTilDate)
      ? 1
      : newTilDate.isSame(prevTilDate)
      ? 0
      : -1;
  });

  return (
    <div>
      <ItemGroup className="flex flex-col gap-4">
        {publishedTils.map((til, idx) => {
          return (
            <FadeUp key={idx}>
              <div className="group">
                <Item
                  asChild
                  className="rounded-none hover:bg-accent/15 border-accent/35"
                  variant="outline"
                >
                  <Link
                    href={`/tils/${til.slugAsParams}`}
                  >
                    <ItemContent>
                      <div className="flex justify-between items-center">
                        <ItemTitle className="text-pretty">
                          {til.title}
                        </ItemTitle>
                        <p className="text-muted-foreground">{formatDateAndTime(til.date)}</p>
                      </div>
                      <ItemDescription>{til.excerpt}</ItemDescription>
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
