# Todo: 22/10/2024
- [x] render blogs and thoughts using SSG and [`generateStaticParams`](https://github.com/rudrodip/rdsx.dev/blob/main/src/app/blogs/%5Bslug%5D/page.tsx). Will SSG effect mdx components in code preview?
- [x] configure [sitemaps](https://nextjs.org/docs/app/api-reference/file-conventions) and metadata for SEO optimizations 
- [x] update velite build scripts and `next.config.ts` to render web app only after content is generated using mdx and velite

# Todo
- [x] Write about my projects in `/content/projects/**`
- [x] Build a design system for website
    - [x] grainy background
    - [x] font - happy monkey xd
    - [x] color theme : black and white :/
- [x] not found page
- [x] on scroll fade up animation component using framer motions
- [x] code highlighter: improve code block styles -- ongoing
- [x] abstract API for blog card
- [ ] write blog on reusable react components
- [ ] why two different link components `A` and `nav-link`?! Where's my resuable react components principle? Create a reusable link component for all link(a tag) use cases

# Launch checklist
- [ ] update readme
- [x] refactor `PostHead` component to `ListItem` component and to display list of blogs and thoughts in `/blogs` and `/thoughts` pages
- [x] show only `published==true` blogs and thoughts on `/blogs` and `/thoughts` pages. 
- [x] skeleton loading for `/blogs/**` ,`/thoughts/**` pages
- [ ] skeleton loading for `/blogs` ,`/thoughts` pages
- [x] update about me on landing page
- [x] write a hello world blog -> should I write why I created this website in this blog? or in the "About me" thought?
- [x] ui fixes : font colors, bg colors, font sizes and hovers states
- [x] don't launch the thought feature yet

## Later
- [ ] write a thought on "About me"
- [ ] measure view on each writing (thought/blog) ref: [nexxel](nexxel.dev)
- [ ] make cards for projects -> fetch data from GitHub
- [ ] Vercel analytics for website is paid (Let's make our own analytics!)
