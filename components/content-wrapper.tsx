import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const ContentWrapper = ({ children, className }: { children: ReactNode, className ?: string}) => {
  return <div className={cn("p-4 sm:p-2 sm:w-[45rem]",className)}>{children}</div>;
};
