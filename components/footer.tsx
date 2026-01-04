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
        name : "X(twitter)",
        href : "https://x.com/MahendraDani09"
    }
]
export const Footer = ()=>{
    return (
        <footer className="mt-4 mb-2 flex justify-between items-center border-t border-b py-2">
            <div>
                <h3 className="text-sm">Onto the summit</h3>
            </div>
            <div className="flex justify-between items-center gap-2">
                {footerLinks.map((item,index)=>(
                    <Link href={item.href} target="_blank" key={index}>
                        <div className="inline-flex justify-center items-center">
                        <p className="hover:underline hover:text-accent underline-offset-4 text-sm duration-300 ease-in-out decoration-dashed">{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </footer>
    )
}