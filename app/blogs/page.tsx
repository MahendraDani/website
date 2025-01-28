import { blogs } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { NotebookPen } from "lucide-react";
import dayjs from "dayjs";

export default function Blogs() {
  // TODO : Try to sort blogs faster!
  const publishedBlogs = blogs
    .filter((blog) => blog.published)
    .sort((a, b) => {
      const newBlogDate = dayjs(a.date);
      const prevBlogDate = dayjs(b.date);
      return newBlogDate.isBefore(prevBlogDate)
        ? 1
        : newBlogDate.isSame(prevBlogDate)
        ? 0
        : -1;
    });
  return (
    <div>
      <div>
        <h3>blogs</h3>
        <hr className="my-1" />
      </div>
      {publishedBlogs.map((blog, idx) => {
        return (
          <FadeUp key={idx}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Date date={blog.date} className="text-pretty hidden sm:block" />
                <ListItem.Link href={`blogs/${blog.slugAsParams}`}>
                  <ListItem.Title className="text-left hover:text-blue-700 underline underline-offset-4 text-pretty">
                    {blog.title}
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
