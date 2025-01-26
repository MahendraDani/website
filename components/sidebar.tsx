import { getRecentBlogs, getRecentThoughts } from "@/lib/recent-posts";
import { A } from "./a";
import { formatDate } from "@/lib/date";

export const Sidebar = () => {
  const blogs = getRecentBlogs();
  const thoughts = getRecentThoughts();
  return (
    <aside className="hidden sm:flex w-1/4 flex-col justify-start gap-4">
      <div>
        <h3 className="mb-1">Blogs</h3>
        <div className="flex flex-col justify-start items-start gap-1">
          {blogs.map((blog, idx) => (
            <SidebarLink
            key={idx}
            slug={blog.slugAsParams}
            title={blog.title}
            date={blog.date}
          />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-1">Thoughts</h3>
        <div className="flex flex-col justify-start items-start gap-1">
          {thoughts.map((thought, idx) => (
            <SidebarLink
              key={idx}
              slug={thought.slugAsParams}
              title={thought.title}
              date={thought.date}
            />
          ))}
        </div>
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
      <A variant={"underline"} href={`/blogs/${slug}`}>
        {title}
      </A>
      {/* <span>{" "} - {formattedDate}</span> */}
    </div>
  );
}
