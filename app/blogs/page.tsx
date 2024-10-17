import { blogs } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import Post from "@/components/post";
import Link from "next/link";
export default function Blogs() {
  return (

    <div>
      {/* {Array.from({ length: 100 }).map((_, i) => ( */}
        <div>
          {blogs.map((blog, index) => {
            // TODO : Create a BlogCard component abstraction API
            return (
              <FadeUp key={index}>
              <Post key={index} title={blog.title} href={`/blogs/${blog.slugAsParams}`} date={blog.date} />
              </FadeUp>
            );
          })}
        </div>
      {/* ))} */}
    </div>
  );
}
