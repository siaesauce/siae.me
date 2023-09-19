import { Metadata } from 'next'

import { envConfig } from '@/data/envConfig'

interface MetadataProps {
  title: string
  description: string
  url: string
}

export function getMetadata({ title, description, url, ...rest }: MetadataProps): Metadata {
  return {
    title,
    description: description,
    openGraph: {
      title: `${title} - ${envConfig.title}`,
      description: description,
      url: `${envConfig.siteUrl}/${url}`,
      images: '/images/website/og-img.png',
      siteName: envConfig.title,
      locale: envConfig.locale,
      type: 'website',
    },
    twitter: {
      title: `${title} - ${envConfig.title}`,
      description: description,
      card: 'summary_large_image',
      images: '/images/website/og-img.png',
    },
    ...rest,
  }
}
