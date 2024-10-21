import { blogs } from "#site/content";
import { FadeUp } from "@/components/fade-up";
import { ListItem } from "@/components/list-item";
import { NotebookPen } from "lucide-react";

export default function Blogs() {
  const publishedBlogs = blogs.filter((blog)=> blog.published);
  return (
    <div>
         {publishedBlogs.map((blog, index) => {
           return (
             <FadeUp key={index}>
             {/* <Post key={index} title={blog.title} href={`/blogs/${blog.slugAsParams}`} date={blog.date} /> */}
             <ListItem>
               <ListItem.Link href={`blogs/${blog.slugAsParams}`}>
               <ListItem.Content className="px-2">
                    <div>
                      <div className="flex items-center justify-start gap-2">
                        <NotebookPen
                          className="text-heading-secondary/60"
                          height={15}
                          width={15}
                        />
                          <ListItem.Title className="text-left">{blog.title}</ListItem.Title>
                      </div>
                      <p className="text-sm text-slate-500">{blog.description}</p>
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
