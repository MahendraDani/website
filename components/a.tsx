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
        underline : "text-black/60 hover:text-black underline decoration-dashed decoration-[0.8px] underline-offset-4 hover",
        colored : "text-emerald-300/80 hover:text-emerald-300",
        arrow : "text-emerald-300/80 hover:text-emerald-300"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type AProps = {
  children: ReactNode;
  className ?: string
} & LinkProps & VariantProps<typeof AVariants>;

export const A = ({ children,className, variant,href, ...props }: AProps) => {
  return (
    <p className={cn(AVariants({variant,className}))}>
      <Link href={href} {...props} className="relative group text-balance">
        {children}
        {variant === "arrow" && <ArrowUpRight height={15} width={15} className={cn("group-hover:scale-125 ease-in duration-100",{"text-emerald-300/50" : variant==="arrow"})}/>}
      </Link>
    </p>
  );
};
