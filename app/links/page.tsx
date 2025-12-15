import { links, LinkBlog } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { LinkBlogRenderer } from "@/components/linkblog";
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
import { GlobeIcon } from "lucide-react";

export default function Page() {
  const publishedLinks = links.sort((a, b) => {
    const newLinkDate = dayjs(a.date);
    const prevLinkDate = dayjs(b.date);
    return newLinkDate.isBefore(prevLinkDate)
      ? 1
      : newLinkDate.isSame(prevLinkDate)
      ? 0
      : -1;
  });

  return (
    <div>
      <ItemGroup className="flex flex-col gap-2">
        {publishedLinks.map((link, idx) => {
          return (
            <FadeUp key={idx}>
              <div className="group">
                {/* <div className="flex justify-end gap-1 my-1">
                  <Link key={idx} href={link.source.url} target="_blank">
                    {
                      <GlobeIcon className="h-6 w-6 p-1 border hover:bg-accent/15 hover:border-accent duration-300" />
                    }
                  </Link>
                </div> */}
                <Item
                  asChild
                  className="rounded-none bg-secondary hover:bg-accent/15 hover:border-accent duration-300 ease-in-out"
                  variant="outline"
                >
                  <Link href={`/links/${link.slugAsParams}`}>
                    <ItemContent>
                      <div className="flex justify-between items-center">
                        <ItemTitle className="text-pretty">
                          {link.source.title}
                        </ItemTitle>
                        <p className="text-muted-foreground">
                          {formatDateAndTime(link.date)}
                        </p>
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
