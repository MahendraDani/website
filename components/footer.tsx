import Link from "next/link"

const footerLinks = [
    {
        name : "GitHub",
        href : "https://github.com/MahendraDani"
    },
    {
        name : "Twitter (X)",
        href : "https://x.com/MahendraDani09"
    },
    {
        name : "Linkedin",
        href : "https://linkedin.com/in/mahendra-dani"
    },
    {
        name : "Codeforces",
        href : ""
    },
    {
        name : "Leetcode",
        href : "https://leetcode.com/u/danimahendra0904/"
    }
]
export const Footer = ()=>{
    return (
        <footer className="flex justify-between items-center border-t-[1px] pt-2">
            <div>
                <h3 className="text-slate-500">Onto the summit</h3>
            </div>
            <div className="flex justify-between items-center gap-2">
                {footerLinks.map((item,index)=>(
                    <Link href={item.href} target="_blank" key={index}>
                        <p className="hover:underline underline-offset-2 text-sm text-slate-500">{item.name}</p>
                    </Link>
                ))}
            </div>
        </footer>
    )
}