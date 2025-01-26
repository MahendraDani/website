import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

export const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="relative font-mono text-sm overflow-x-auto px-1 py-2 bg-[#22272E]">
      {/* <div className="flex justify-end py-1 pr-3 bg-black/70 text-gray-300 rounded-t-lg border-t border-l border-r">
        <CopyButton>{children}</CopyButton>
      </div> */}
      <pre
        className={cn(className)}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};