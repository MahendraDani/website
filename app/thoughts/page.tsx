import { thoughts } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";

export default function Page() {
  const publishedThoughts = thoughts.filter((thought) => thought.published);

  return (
    <div>
      <div>
        <h3>thoughts</h3>
        <hr className="my-1" />
      </div>
      {publishedThoughts.map((thought, idx) => {
        return (
          <FadeUp key={idx}>
            <ListItem className="">
              <ListItem.Content className="text-balance">
                <ListItem.Date date={thought.date} />
                <ListItem.Link href={`thoughts/${thought.slugAsParams}`}>
                  <ListItem.Title className="text-left hover:text-blue-700 underline underline-offset-4">
                    {thought.title}
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
