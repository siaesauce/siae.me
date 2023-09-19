type EnvConfig = {
  title: string
  author: string
  headerTitle: string
  description: string
  language: string
  theme: string
  siteUrl: string
  siteLogo: string
  email: string
  github: string
  twitter: string
  telegram: string
  locale: string
  umamiAnalyticsId: string
  umamiAnalyticsSrc: string
  giscus: {
    repo: `${string}/${string}`
    repositoryId: string
    category: string
    categoryId: string
  }
}

export const envConfig: EnvConfig = {
  title: 'SIAE.SAUCE',
  author: 'SIAE.SAUCE',
  headerTitle: 'SIAE.SAUCE',
  description: 'Running...',
  language: 'zh',
  theme: 'system',
  siteUrl: 'https://siae.me',
  siteLogo: '/favicon.svg',
  email: 'i@siae.me',
  github: 'https://github.com/siaesauce',
  twitter: 'https://twitter.com/siaesauce',
  telegram: 'https://t.me/siaesauce',
  locale: 'zh-CN',
  umamiAnalyticsId: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ID,
  umamiAnalyticsSrc: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_SRC,
  giscus: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`,
    repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID as string,
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY as string,
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID as string,
  },
}
