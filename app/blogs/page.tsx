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
      {publishedBlogs.map((blog, index) => {
        return (
          <FadeUp key={index}>
            {/* <Post key={index} title={blog.title} href={`/blogs/${blog.slugAsParams}`} date={blog.date} /> */}
            <ListItem className="my-2 rounded-sm">
              <ListItem.Link href={`blogs/${blog.slugAsParams}`}>
                <ListItem.Content className="text-balance">
                  <div>
                    <div className="flex items-center justify-start gap-2">
                      <NotebookPen
                        className="text-heading-secondary/60"
                        height={15}
                        width={15}
                      />
                      <ListItem.Title className="text-left text-heading-secondary/80">
                        {blog.title}
                      </ListItem.Title>
                    </div>
                    <p className="text-sm">{blog.description}</p>
                  </div>
                  <ListItem.Date date={blog.date} />
                </ListItem.Content>
              </ListItem.Link>
            </ListItem>
          </FadeUp>
        );
      })}
    </div>
  );
}
