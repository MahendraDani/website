import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import dayjs from "dayjs"

// syntax spectrum 13-14 : fully customizable, non-standard use flexbile
export const ListItem = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>)=> {
  return (
    <div
      className={cn(
        "group hover:bg-[#00fff61d] p-1 my-1 ease-in-out duration-75",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const ListItemContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>)=> {
  return (
    <div className={cn("flex justify-between items-center",className)} {...props}>
      {children}
    </div>
  );
}

const ListItemTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>)=> {
  return (
    <h3 className={cn("text-pretty font-medium", className)} {...props}>
      {children}
    </h3>
  );
}

interface IListItemLinkChildren {
 children :ReactNode
}

type ListItemLinkProps = IListItemLinkChildren & LinkProps;
const ListItemLink = ({children ,href,...props} : ListItemLinkProps)=>{
  return <Link href={href} {...props}>{children}</Link>
}

interface IListDate {
  date : string
}

type TListItemDateProps = IListDate & React.HTMLAttributes<HTMLParagraphElement>;

const ListItemDate  = ({date,className,...props}:TListItemDateProps)=>{
  const formattedDate = dayjs(date).format('DD-MMM-YYYY')
  return <p className={cn("text-slate-500 text-sm text-balance min-w-[6rem]",className)} {...props}>{formattedDate}</p>
}
ListItem.Content = ListItemContent;
ListItem.Title = ListItemTitle;
ListItem.Date = ListItemDate;
ListItem.Link = ListItemLink;

