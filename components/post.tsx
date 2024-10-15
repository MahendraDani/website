import Link from "next/link";
import { Date } from "./date";

interface PostProps {
  href : string
  title : string
  date : string
}

// Spectrum range 1-3 : less customization more restriction
export default function Post({href,title,date} : PostProps) {
  return (
    <div  className="hover:bg-sky-100/10 px-1 py-2 my-1 ease-in-out duration-100">
      <Link href={href}>
        <div className="flex justify-between items-center">
          <h3 className="text-pretty">{title}</h3>
          <Date date={date} />
        </div>
      </Link>
    </div>
  );
}

Post.Date = Date;
