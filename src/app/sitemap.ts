import { allPosts } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

import { envConfig } from '@/data/envConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = envConfig.siteUrl

  const posts = allPosts
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const routes = ['', 'posts', 'talks', 'friends', 'about'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...posts, ...routes]
}
