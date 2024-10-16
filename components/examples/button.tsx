import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const EButtonVariants = cva("p-2 ease-in duration-150 text-zinc-800/80",{
  variants: {
    size: {
      sm: "text-sm p-1 px-5",
      md: "p-2 px-7",
      lg: "p-3 px-9",
    },
    colour: {
      green: "bg-green-400 hover:bg-green-400/90",
      yellow: "bg-yellow-400 hover:bg-yellow-400/90",
      red: "bg-red-400 hover:bg-red-400/90",
      cyan: "bg-cyan-400 hover:bg-cyan-400/90",
      purple: "bg-purple-400 hover:bg-purple-400/90",
    },
    radius: {
      default: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-lg",
      lg: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    colour: "cyan",
    radius: "sm",
  },
});

// const btnVariants = cva("",{
//   variants : {
//     variant : {
//       primary : "bg-primary",
//       secondary : "bg-secondary"
//     },
//     size : {
//       default : "text-lg",
//       large : "text-xl"
//     }
//   },
//   defaultVariants : {
//     variant : "primary",
//     size : "large"
//   }
// })

interface EButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof EButtonVariants> {}

// export function EButton({ className, children }: EButtonProps= {}) {
//   return <button className="">{children}</button>;
// }
export const ButtonExample = React.forwardRef<HTMLButtonElement, EButtonProps>(
  ({ className,children, size, colour,radius,...props }, ref) => {
    return (
      <button
        className={cn(EButtonVariants({ size,colour,radius,className }))}
        ref={ref}
        {...props}
        >
          {children}
        </button>
    )
  }
)
