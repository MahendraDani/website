import {projects} from "#site/content"
import { A } from "@/components/a";
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
          <A variant={"underline"} href={project.primaryLink} className={"text-lg"}>{project.name}</A>
          <p className="pt-1">{project.abstract}</p>
        </div>
      ))}
      </section>
    </div>
  );
}
