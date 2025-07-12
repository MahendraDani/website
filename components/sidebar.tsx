import {
  getRecentBlogs,
  getRecentLinks,
  getRecentProjects,
  getRecentThoughts,
  getRecentTils,
} from "@/lib/recent-posts";
import { A } from "./a";
import { formatDate } from "@/lib/date";

export const Sidebar = () => {
  const blogs = getRecentBlogs();
  const thoughts = getRecentThoughts();
  const tils = getRecentTils();
  const links = getRecentLinks();
  return (
    <aside className="hidden sm:flex w-1/4 flex-col justify-start gap-4">
      <div>
        <div>
          <h3>Blogs</h3>
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
      </div>

      <div>
        <div>
          <h3>Links</h3>
          <hr className="my-1" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          {links.map((link, idx) => (
            <SidebarLink
              key={idx}
              slug={`/links/${link.slugAsParams}`}
              title={link.source.title}
              date={link.date}
            />
          ))}
        </div>
      </div>

      <div>
        <div>
          <h3>Tils</h3>
          <hr className="my-1" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          {tils.map((til, idx) => (
            <SidebarLink
              key={idx}
              slug={`/tils/${til.slugAsParams}`}
              title={til.title}
              date={til.date}
            />
          ))}
        </div>
      </div>

      <div>
        <div>
          <h3>Thoughts</h3>
          <hr className="my-1" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          {thoughts.map((thought, idx) => (
            <SidebarLink
              key={idx}
              slug={`/thoughts/${thought.slugAsParams}`}
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
      <A variant={"underline"} href={slug}>
        <span className="line-clamp-2 text-pretty">{title}</span>
      </A>
    </div>
  );
}
