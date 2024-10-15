import { cn } from "@/lib/utils"
import dayjs from "dayjs"
import React from "react"
export const Date = ({date, className,...props} : {date : string,className ?: React.HTMLAttributes<HTMLParagraphElement>})=>{
  const formattedDate = dayjs(date).format('DD-MMM-YYYY')
  return <p className={cn("text-sky-100/20 text-sm text-balance min-w-[6rem]",className)} {...props}>{formattedDate}</p>
}