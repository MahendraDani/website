import {thoughts} from "#site/content"
import Link from "next/link"
export default function Page(){
return <div>
      {thoughts.map((thought, index) => (
        <Link key={index} href={`thoughts/${thought.slugAsParams}`}>
          {thought.title}
        </Link>
      ))}
    </div>
}