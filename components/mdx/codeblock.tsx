import { CopyButton } from "../copy-button";
import { cn } from "@/lib/utils";

export const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="mb-4 mt-6 relative rounded-lg font-mono text-sm">
      <div className="flex justify-end py-1 pr-3 bg-zinc-600 text-gray-300 rounded-t-lg border-2 ">
        <CopyButton>{children}</CopyButton>
      </div>
      <pre
        className={cn("overflow-x-auto bg-black py-4 rounded-b-lg border-none", className)}
        {...props}
      >
        <code>{children?.toString()}</code>
      </pre>
    </div>
  );
};
