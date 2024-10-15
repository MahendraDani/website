import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import dayjs from "dayjs"

// syntax spectrum 13-14 : fully customizable, non-standard use flexbile
export default function PostHead({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "hover:bg-sky-100/10 p-1 m-1 ease-in-out duration-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}



function PostHeadContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex justify-between items-center",className)} {...props}>
      {children}
    </div>
  );
}

function PostHeadTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) {
  return (
    <h3 className={cn("text-pretty", className)} {...props}>
      {children}
    </h3>
  );
}

interface PostHeadLinkChildren {
 children :ReactNode
}

type PostHeadLinkProps = PostHeadLinkChildren & LinkProps;
function PostHeadLink({children ,href,...props} : PostHeadLinkProps){
  return <Link href={href} {...props}>{children}</Link>
}

interface IPostHeadDate {
  date : string
}

type PostHeadDateProps = IPostHeadDate & React.HTMLAttributes<HTMLParagraphElement>;
function PostHeadDate ({date,className,...props}:PostHeadDateProps){
  const formattedDate = dayjs(date).format('DD-MMM-YYYY')
  return <p className={cn("text-sky-100/20 text-sm text-balance min-w-[6rem]",className)} {...props}>{formattedDate}</p>
}
PostHead.Content = PostHeadContent;
PostHead.Title = PostHeadTitle;
PostHead.Date = PostHeadDate;
PostHead.Link = PostHeadLink;
