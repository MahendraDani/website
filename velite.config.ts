import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { LineElement } from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
      title: s.string().max(200),
      description: s.string().max(999),
      date: s.string().datetime(),
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
  name : "Thought",
  pattern : "thoughts/**/*.mdx",
  schema : s.object({
    slug : s.path(),
    title : s.string(),
    description : s.string().max(999),
    date : s.string().datetime(), // YYYY-MM-DDTHH:MM:SSZ
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
    tags: s.array(s.string()),
  }).transform(computedFields)
})

export const projects = defineCollection({
  name : "Project",
  pattern : "projects/**/*.mdx",
  schema : s.object({
    slug : s.path(),
    name : s.string().max(99),
    abstract : s.string(),
    publishDate : s.string().datetime(), // YYYY-MM-DDTHH:MM:SSZ
    body : s.mdx(),
    links : s.array(s.object({
      title : s.string(),
      url : s.string().url()
    })),
    stack : s.array(s.string()),
    collaborators : s.array(s.object({
      name : s.string(),
      social : s.string().url(),
      role : s.string()
    })).optional(),
    excerpt : s.excerpt(),
    metadata : s.metadata(),
    markdown : s.markdown(),
  }).transform(computedFields)
})

export const tils = defineCollection({
  name : "Til",
  pattern : "tils/**/*.mdx",
  schema : s.object({
    slug : s.path(),
    title : s.string(),
    source : s.string().optional(),
    date : s.string().datetime(),
    body : s.mdx(),
    excerpt : s.excerpt(),
    metadata : s.metadata(),
    markdown : s.markdown(),
  }).transform(computedFields)
})

export const links = defineCollection({
  name : "LinkBlog",
  pattern : "links/**/*.mdx",
  schema : s.object({
    slug : s.path(),
    source : s.object({
      title : s.string(),
      url : s.string().url()
    }),
    via : s.object({
      url : s.string().url()
    }).optional(),
    date : s.string().datetime(),
    body : s.mdx(),
    tags: s.array(s.string()).optional(),
    excerpt : s.excerpt(),
    metadata : s.metadata(),
    markdown : s.markdown(),
  }).transform(computedFields)
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
  collections: { blogs, thoughts,projects,tils,links },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
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
      ]
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});


// Add this config to auto link heading tags
// [
//   rehypeAutolinkHeadings,
//   {
//     properties: {
//       className: ["subheading-anchor"],
//       ariaLabel: "Link to section",
//     },
//   },
// ],
