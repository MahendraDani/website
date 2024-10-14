import {thoughts} from "#site/content"
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { notFound } from "next/navigation";
interface PageProps {
    params : {
        slug : string;
    }
}

function getThoughtFromParams({params} : PageProps){
  const thought = thoughts.find((thought) => thought.slugAsParams === params.slug);

  if (!thought) {
    return notFound()
  }
  return thought;
}
export default function Page({params} : PageProps){
    const thought = getThoughtFromParams({params});
    // console.log(thought);
    return         <MDXContentRenderer code={thought.body} />

}