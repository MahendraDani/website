import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const Container = ({children, classname} : {children : ReactNode, classname ?: string}) =>{
  return (
    <div className={cn("max-w-4xl mx-auto",classname)}>
      {children}
    </div>
  )
}