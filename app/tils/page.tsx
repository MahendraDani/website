import { tils } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import dayjs from "dayjs";

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
    <div className="w-[90vw] sm:w-auto">
      <div>
        <h3>Tils - Things I Learned</h3>
        <hr className="my-1" />
      </div>
      {publishedTils.map((til, idx) => {
        return (
          <FadeUp key={idx}>
            <ListItem>
              <ListItem.Content className="">
                <ListItem.Date
                  date={til.date}
                  className="text-pretty sm:block"
                />
                <ListItem.Link href={`tils/${til.slugAsParams}`}>
                  <ListItem.Title className="text-left hover:text-blue-700 underline underline-offset-4 text-pretty">
                    {til.title}
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
