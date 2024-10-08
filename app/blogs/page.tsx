import { blogs } from "#site/content";
import Link from "next/link";
export default function Blogs() {
  return (
    <div>
      {blogs.map((blog, index) => (
        <Link key={index} href={`blogs/${blog.slugAsParams}`}>
          {blog.title}
        </Link>
      ))}
    </div>
  );
}
