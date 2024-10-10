import {projects} from "#site/content"
import Link from "next/link"
export default function Page() {
  return (
    <div>
      <div>
        <p>Hi! I am a developer and programmer. I am learning to solve problems using computers and developing web apps in my free time. I get excited by seeing how science is applied in real life.</p>
        <br />
        <p>My life goal is to be on wikipedia by developing something {"(i don't know rn)"} that blows up the internet. Unemployed and working on getting my fundamentals right.</p>
      </div>
      <section className="mt-4 flex justify-between items-start flex-wrap">
      {projects.map((project,index)=>(
        <div key={index} className="w-1/2 py-2">
          <Link href={project.primaryLink} target="_blank">
          <h3 className="font-medium underline underline-offset-2">{project.name}</h3>
          </Link>
          <p className="pt-1">{project.abstract}</p>
        </div>
      ))}
      </section>
    </div>
  );
}
