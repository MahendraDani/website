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
    </main>
  );
}
