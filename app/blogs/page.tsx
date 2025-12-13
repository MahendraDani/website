import { blogs } from "#site/content";
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

export default function Blogs() {
  const publishedBlogs = blogs
    .filter((blog) => blog.published)
    .filter((blog) => blog.slugAsParams != "aboutme")
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
      <ItemGroup className="flex flex-col gap-4">
        {publishedBlogs.map((blog, idx) => {
          const formattedDate = dayjs(blog.date).format("MMMM DD, YYYY");
          return (
            <FadeUp key={idx}>
              <div className="group">
                <Item
                  asChild
                  className="rounded-none hover:bg-accent/15 border-accent/35"
                  variant="outline"
                >
                  <Link
                    href={`/blogs/${blog.slugAsParams}`}
                  >
                    <ItemContent>
                      <div className="flex justify-between items-center">
                        <ItemTitle className="text-pretty">
                          {blog.title}
                        </ItemTitle>
                        <p className="text-muted-foreground">{formattedDate}</p>
                      </div>
                      <ItemDescription>{blog.excerpt}</ItemDescription>
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
