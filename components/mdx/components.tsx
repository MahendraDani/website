import { cn } from "@/lib/utils";
import { CodeBlock } from "./codeblock";
import Image, { type ImageProps } from "next/image";
import { Callout } from "./callout";
import React from "react";
import { CalSans, geistMono, geistSans, happyMonkey} from "@/app/fonts"
import { Caladea } from "next/font/google";
import {ButtonExample, GreenButtonExample, RedButtonExample, ButtonWithPropsExample} from "@/components/examples/button"
import { Tabs, TabsContent, TabsList,TabsTrigger } from "../ui/tabs";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { toast } from "sonner";


export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-6 scroll-m-20 text-3xl font-bold tracking-tight text-heading/80",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-5 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0 text-heading/70",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-4 scroll-m-20 text-xl font-semibold tracking-tight mdx-heading text-heading/60",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-3 scroll-m-20 text-xl font-semibold tracking-tight text-heading/50",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-3 scroll-m-20 text-lg font-semibold tracking-tight text-heading/50",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-3 scroll-m-20 text-base font-semibold tracking-tight text-heading/50",
        className
      )}
      {...props}
    />
  ),
  a: ({ className,children,...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium text-heading-secondary/70 hover:text-heading/80 underline decoration-dashed decoration-[0.8px] underline-offset-4 inline-flex items-center", className)}
      target="_blank"
      {...props}
    >

      {children}
      <span> <ArrowUpRight strokeWidth={1}  height={12} width={12} /></span>
    </a>
    
  ),
  p: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-3 ",className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-2 ml-6 list-disc ", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-2 ml-6 list-decimal ", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-l-heading/60 pl-6 italic text-slate-500",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: CodeBlock,
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "min-h-[12rem] border overflow-x-auto relative rounded-sm px-[0.3rem] py-1 font-mono text-sm bg-black/70 text-heading-secondary/90 selection:bg-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  Image: (props: ImageProps) => <Image {...props} alt="blog image" />,
  Callout,
  ButtonExample,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  CodeBlock,
  GreenButtonExample,
  RedButtonExample,
  ButtonWithPropsExample,
  toast
};