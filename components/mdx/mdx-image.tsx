import Image, { ImageProps } from "next/image";
import clsx from "clsx";

type MDXImageProps = Omit<ImageProps, "width" | "height"> & {
  aspectRatio?: number; // e.g. 16 / 9, 1, 4 / 3
  className?: string;
};

export function MDXImage({
  aspectRatio = 4 / 3,
  className,
  ...props
}: MDXImageProps) {
  return (
    <div className="mt-4 flex justify-center">
      <div
        className={clsx("relative w-full bg-[hsl(180_20%_98%)]", className)}
        style={{
          aspectRatio,
          backgroundColor: "hsl(180 20% 98%)",
          maskImage:
            "linear-gradient(to right, transparent, white 6%, white 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 6%, white 94%, transparent)",
        }}
      >
        <Image fill className="object-contain" {...props} />
      </div>
    </div>
  );
}
