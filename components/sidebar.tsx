import { getRecentBlogs, getRecentThoughts } from "@/lib/recent-posts";
import { A } from "./a";
import { formatDate } from "@/lib/date";

export const Sidebar = () => {
  const blogs = getRecentBlogs();
  const thoughts = getRecentThoughts();
  return (
    <aside className="hidden sm:flex w-1/4 flex-col justify-start">
      <div>
        <h3>recent posts</h3>
        <hr className="my-1" />
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        {blogs.map((blog, idx) => (
          <SidebarLink
            key={idx}
            slug={`/blogs/${blog.slugAsParams}`}
            title={blog.title}
            date={blog.date}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-col justify-start items-start gap-1">
        {thoughts.map((thought, idx) => (
          <SidebarLink
            key={idx}
            slug={`/thoughts/${thought.slugAsParams}`}
            title={thought.title}
            date={thought.date}
          />
        ))}
      </div>
    </aside>
  );
};

function SidebarLink({
  slug,
  title,
  date,
}: {
  slug: string;
  title: string;
  date: string;
}) {
  const formattedDate = formatDate(date);
  return (
    <div>
      <A variant={"underline"} href={slug}>
        {title}
      </A>
    </div>
  );
}
