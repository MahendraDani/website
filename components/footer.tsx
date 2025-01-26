import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const footerLinks = [
    {
        name : "GitHub",
        href : "https://github.com/MahendraDani"
    },
    {
        name : "Linkedin",
        href : "https://linkedin.com/in/mahendra-dani"
    },
    {
        name : "X",
        href : "https://x.com/MahendraDani09"
    }
]
export const Footer = ()=>{
    return (
        <footer className="w-[90vw] sm:w-[54rem] my-8 flex justify-between items-center border-t-[1px] pt-2">
            <div>
                <h3 className="">Onto the summit</h3>
            </div>
            <div className="flex justify-between items-center gap-2">
                {footerLinks.map((item,index)=>(
                    <Link href={item.href} target="_blank" key={index}>
                        <div className="inline-flex justify-center items-center">
                        <p className="hover:underline underline-offset-2 text-sm">{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </footer>
    )
}