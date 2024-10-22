import { cn } from "@/lib/utils";
import React from "react";

export default function SkeletonParagraph({ lines = 6 }: { lines ?: number }) {
  return (
    <div className="mx-auto w-full min-w-0 my-4 space-y-2 ">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonText key={i} variant="p"/>
      ))}
    </div>
  );
}

interface SkeletonTextParams {
  variant: "h1" | "h2" | "h3" | "p";
}

type SkeletonTextProps = SkeletonTextParams & React.HTMLAttributes<HTMLElement>;
export const SkeletonText = ({
  variant,
  className,
  children,
  ...props
}: SkeletonTextProps) => {
  return (
    <div
      className={cn("w-full rounded-md bg-secondary animate-pulse", className, {
        "h-12 my-6": variant === "h1",
        "h-10 my-4": variant === "h2",
        "h-8 my-4": variant === "h3",
        "h-4 y-2": variant === "p",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
