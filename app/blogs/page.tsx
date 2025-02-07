import { blogs } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { NotebookPen } from "lucide-react";
import dayjs from "dayjs";

export default function Blogs() {
  // TODO : Try to sort blogs faster!
  const publishedBlogs = blogs
    .filter((blog) => blog.published)
    .filter((blog)=> blog.slugAsParams != "aboutme")
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
    <div className="w-[90vw] sm:w-auto">
      <div>
        <h3>Blogs</h3>
        <hr className="my-1" />
      </div>
      {publishedBlogs.map((blog, idx) => {
        return (
          <FadeUp key={idx}>
            <ListItem>
              <ListItem.Content className="">
                <ListItem.Date date={blog.date} className="text-pretty sm:block" />
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
