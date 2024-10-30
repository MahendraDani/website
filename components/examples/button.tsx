"use client";
import { toast } from "sonner";
import React, { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ReactJokes = [
  "Why did the React developer break up? Too many dependencies!",
  "React: Where “hello world” takes 10 imports",
  "Writing React code is 10% logic, 90% fighting the linter",
  "A React app without bugs is like useEffect without dependencies—rare and mysterious.",
  "React classes retired to “pursue other hooks”",
  "React devs don't take breaks; they just call useCallback.",
  "In React, nothing's really lost... it's just unmounted.",
  "useState is like coffee: you always need one more to keep going.",
  "Props to React for keeping us functional.",
  "In React, even our jokes are “state”-dependent!",
];

const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * ReactJokes.length);
  return ReactJokes[randomIndex];
};

const EButtonVariants = cva("p-2 ease-in duration-150 text-zinc-800/80", {
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

interface EButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof EButtonVariants> {}

export const ButtonExample = React.forwardRef<HTMLButtonElement, EButtonProps>(
  ({ className, children, size, colour, radius, ...props }, ref) => {
    return (
      <button
        onClick={() => {
          toast.info(getRandomJoke());
        }}
        className={cn(EButtonVariants({ size, colour, radius, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const variants = ["red", "yellow", "green", "purple", "cyan"] as const;
type Variant = (typeof variants)[number];

const VARIANT_MAPS: Record<Variant, string> = {
  red: "bg-red-400 hover:bg-red-400/90",
  yellow: "bg-yellow-400 hover:bg-yellow-400/90",
  green: "bg-green-400 hover:bg-green-400/90",
  purple: "bg-purple-400 hover:bg-purple-400/90",
  cyan: "bg-cyan-400 hover:bg-cyan-400/90",
};

type ButtonProps = {
  variant: Variant;
  children?: ReactNode;
};

export const ButtonWithPropsExample = ({ variant, children }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        toast.info(getRandomJoke());
      }}
      className={cn(
        "p-2 px-4 min-w-20 ease-in duration-150 text-black rounded-sm",
        VARIANT_MAPS[variant]
      )}
    >
      {children}
    </button>
  );
};

export const GreenButtonExample = () => {
  return (
    <button
      onClick={() => {
        toast.info(getRandomJoke());
      }}
      className="bg-green-400 hover:bg-green-400/90 p-2 px-4 min-w-20 ease-in duration-150 text-black rounded-sm"
    >
      Button
    </button>
  );
};

export const RedButtonExample = () => {
  return (
    <button
      onClick={() => {
        toast.info(getRandomJoke());
      }}
      className="bg-red-400 hover:bg-red-400/90 p-2 px-4 min-w-20 ease-in duration-150 text-black rounded-sm"
    >
      Button
    </button>
  );
};
