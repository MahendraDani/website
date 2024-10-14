import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

export const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="mb-4 mt-6 relative rounded-lg font-mono text-sm">
      {/* <div className="flex justify-end py-1 pr-3 bg-black/70 text-gray-300 rounded-t-lg border-t border-l border-r">
        <CopyButton>{children}</CopyButton>
      </div> */}
      <pre
        className={cn("rounded-sm", className)}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};