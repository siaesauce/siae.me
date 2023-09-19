import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'


import theme from './src/styles/moonlight-ii.json'
import imgToJsx from './src/utils/imgToJsx'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
}

const Link = defineNestedType(() => ({
  name: 'Link',
  fields: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    website: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
  },
}))

export const Friends = defineDocumentType(() => ({
  name: 'Friends',
  filePathPattern: `pages/friends/*.md?(x)`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    lastmod: {
      type: 'date',
      required: false,
    },
    links: {
      type: 'json',
      of: Link,
    },
  },
  computedFields,
}))

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `pages/about/*.md?(x)`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    lastmod: {
      type: 'date',
      required: false,
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md?(x)`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    lastmod: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
    },
    categories: {
      type: 'string',
      default: 'Unknown',
    },
    draft: {
      type: 'boolean',
      default: false,
    },
    tags: {
      type: 'list',
      default: [],
      of: { type: 'string' },
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, About, Friends],
  mdx: {
    remarkPlugins: [remarkGfm, imgToJsx],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: { className: 'anchor' },
        },
      ],
      [rehypePrettyCode, { theme, keepBackground: true }],
      rehypePresetMinify,
    ],
  },
})
