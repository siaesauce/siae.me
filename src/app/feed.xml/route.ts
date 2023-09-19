import { allPosts } from 'contentlayer/generated'
import RSS from 'rss'

import { envConfig } from '@/data/envConfig'

export async function GET() {
  const feed = new RSS({
    title: envConfig.title,
    description: envConfig.description,
    site_url: envConfig.siteUrl,
    feed_url: `${envConfig.siteUrl}/feed.xml`,
    language: envConfig.language,
    image_url: `${envConfig.siteUrl}/images/website/og-img.png`,
    generator: 'Node-RSS feed generator',
  })

  allPosts
    .filter((post) => post.draft === false)
    .forEach((post) => {
      feed.item({
        title: post.title,
        description: post.description,
        author: envConfig.author,
        url: `${envConfig.siteUrl}/${post.path}`,
        guid: post.slug,
        date: post.date,
        categories: post.tags,
      })
    })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
