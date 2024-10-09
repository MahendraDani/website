import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { LineElement } from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { title } from "process";
import { metadata } from "./app/layout";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const blogs = defineCollection({
  name: "Blog",
  pattern: "blogs/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      published: s.boolean(),
      tags: s.array(s.string()),
      body: s.mdx(),
      toc: s.toc(),
      authors : s.array(s.object({
        name : s.string(),
        social : s.string().url().optional()
      })),
      excerpt : s.excerpt(),
      metadata : s.metadata(),
      markdown : s.markdown(),
    })
    .transform(computedFields),
});

export const thoughts = defineCollection({
  name : "Thoughts",
  pattern : "thoughts/**/*.mdx",
  schema : s.object({
    slug : s.path(),
    title : s.string(),
    description : s.string().max(999),
    date : s.isodate(),
    published : s.boolean(),
    body : s.mdx(),
    toc : s.toc(),
    authors : s.array(s.object({
      name : s.string(),
      social : s.string().url().optional()
    })),
    excerpt : s.excerpt(),
    metadata : s.metadata(),
    markdown : s.markdown(),
  }).transform(computedFields)
})

export const projects = defineCollection({
  name : "Projects",
  pattern : "projects/**/*.mdx",
  schema : s.object({
    slug : s.path(),
    name : s.string().max(99),
    abstract : s.string(),
    private : s.boolean(),
    body : s.mdx(),
    demo : s.string().url().optional(),
    website : s.string().url().optional(),
    primaryLink : s.string().url(), 
    github : s.array(s.object({name : s.string(), repo : s.string().url()})).optional(),
    stack : s.array(s.string()).optional(),
    collaborators : s.array(s.object({
      name : s.string(),
      social : s.string().url().optional()
    })).optional(),
    excerpt : s.excerpt(),
    metadata : s.metadata(),
    markdown : s.markdown(),
  })
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blogs, thoughts,projects },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: LineElement) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedWord(node: LineElement) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});
