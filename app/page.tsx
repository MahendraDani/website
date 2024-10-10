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
      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
      {projects.map((project,index)=>(
        <div key={index} className="py-2">
          <h3 className="font-medium underline underline-offset-2">
          <Link href={project.primaryLink} target="_blank">
            {project.name}
          </Link>
          </h3>
          <p className="pt-1">{project.abstract}</p>
        </div>
      ))}
      </section>
    </div>
  );
}
