import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

const AVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:text-paragraph/90",
        underline:
          "text-blue-700/70 hover:text-blue-800 underline decoration-dashed decoration-[1px] underline-offset-4",
        colored: "text-emerald-300/80 hover:text-emerald-300",
        arrow: "text-emerald-300/80 hover:text-emerald-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type AProps = {
  children: ReactNode;
  className?: string;
} & LinkProps &
  VariantProps<typeof AVariants>;

export const A = ({ children, className, variant, href, ...props }: AProps) => {
  let isExternal = false;
  if (!href.toString().startsWith("/")) {
    if (process.env.NODE_ENV === "production") {
      if (!href.toString().includes("mahendradani.vercel.app")) {
        isExternal = true;
      }
    } else {
      if (!href.toString().includes("localhost")) {
        isExternal = true;
      }
    }
  }
  return (
    <p className={cn(AVariants({ variant, className }))}>
      <Link
        target={isExternal ? "_blank" : "_self"}
        href={href}
        {...props}
        className="inline-flex items-center py-1 text-wrap relative group"
      >
        {children}
        <span>
          {isExternal && (
            <ArrowUpRight
              strokeWidth={1}
              height={12}
              width={12}
              className={cn("group-hover:scale-125 ease-in duration-100")}
            />
          )}
        </span>
      </Link>
    </p>
  );
};
