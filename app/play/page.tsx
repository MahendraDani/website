import { ButtonExample } from "@/components/examples/button";
import { cn } from "@/lib/utils";
import { geistSans } from "../fonts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      {/* <div className="flex justify-between items-center flex-wrap">
      <ButtonExample size={"md"} colour={"cyan"}>Button</ButtonExample>
      <ButtonExample size={"md"} colour={"green"}>Button</ButtonExample>
      <ButtonExample size={"md"} colour={"purple"}>Button</ButtonExample>
      <ButtonExample size={"md"} colour={"red"}>Button</ButtonExample>
      <ButtonExample size={"md"} colour={"yellow"}>Button</ButtonExample>
    </div>

    <div className="space-x-4">
      <ButtonExample className={cn("bg-white hover:bg-white/80 font-medium text-black px-4 py-2", geistSans.className)} size={"md"} radius={"md"}>Get Started</ButtonExample>
      <ButtonExample className={cn("bg-black/70 text-white font-medium px-4 py-2 border hover:bg-zinc-900", geistSans.className)} size={"md"} radius={"md"}>Learn Nextjs</ButtonExample>
    </div> */}
    <Tabs defaultValue="preview" className="">
  <TabsList>
    <TabsTrigger value="preview">{"Preview"}</TabsTrigger>
    <TabsTrigger value="account">{"account.tsx"}</TabsTrigger>
    <TabsTrigger value="password">{"password.tsx"}</TabsTrigger>
  </TabsList>
  <TabsContent value="preview" className="">
    <div className="h-96 flex justify-center items-center">
      <ButtonExample size={"md"} colour={"red"}>
    Button
  </ButtonExample>
    </div>
  </TabsContent>
  <TabsContent value="account">
{    `js
import { CopyButton } from "../copy-button";
import { cn } from "@/lib/utils";

export const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="mb-4 mt-6 relative rounded-lg font-mono text-sm">
      <div className="flex justify-end py-1 pr-3 text-gray-300 rounded-t-lg border-2 ">
        <CopyButton>{children}</CopyButton>
      </div>
      <pre
        className={cn("overflow-x-auto bg-black py-4 rounded-b-lg", className)}
        {...props}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
};
`}
  </TabsContent>
  <TabsContent value="password">
{`js
import React from "react";

function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
`}
  </TabsContent>
</Tabs>
    </main>
  );
}
