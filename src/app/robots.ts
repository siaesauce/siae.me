import { MetadataRoute } from 'next'

import { envConfig } from '@/data/envConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${envConfig.siteUrl}/sitemap.xml`,
    host: envConfig.siteUrl,
  }
}
