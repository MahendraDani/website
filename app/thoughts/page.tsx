import { thoughts } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";

export default function Page() {
  const publishedThoughts = thoughts.filter((thought) => thought.published);

  return (
    <div className="w-[90vw] sm:w-auto">
      <div>
        <h3>Thoughts</h3>
        <hr className="my-1" />
      </div>
      {publishedThoughts.map((thought, idx) => {
        return (
          <FadeUp key={idx}>
            <ListItem>
              <ListItem.Content className="text-balance">
                <ListItem.Date date={thought.date}  className=""/>
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
