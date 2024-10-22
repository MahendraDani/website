import SkeletonParagraph, { SkeletonText } from "@/components/skeletons";

export default async function Loading() {
  return (
    <article className="relative max-w-3xl py-6 animate-pulse">
      <SkeletonText variant="h1"/> 
      <SkeletonParagraph/>
      <SkeletonParagraph/>
      <SkeletonParagraph/>
  </article>
  )
}