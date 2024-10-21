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
               <ListItem.Content>
                 <div className="flex items-center justify-between gap-4">
                 <NotebookPen className="text-heading-secondary/60" height={15} width={15} />
                 <ListItem.Title>{blog.title}</ListItem.Title>  
                 </div>
                 <ListItem.Date date={blog.date}/>
               </ListItem.Content>
               </ListItem.Link>
             </ListItem>
             </FadeUp>
           );
         })}
    </div>
  );
}
