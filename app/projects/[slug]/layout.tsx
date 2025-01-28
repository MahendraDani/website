export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full max-w-3xl mx-auto">{children}</section>;
}
