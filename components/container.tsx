import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const Container = ({children, classname} : {children : ReactNode, classname ?: string}) =>{
  return (
    <div className={cn("w-full md:max-w-[55vw] px-6 md:px-4 mx-auto",classname)}>
      {children}
    </div>
  )
}