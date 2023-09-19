import type { Metadata } from 'next'

import ScrollTop from '@/components/ScrollTop'
import UmamiScript from '@/components/UmamiAnalytics'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import { envConfig } from '@/data/envConfig'
import '@/styles/globals.scss'
import '@/styles/markdown.scss'

import Providers from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(envConfig.siteUrl),
  generator: 'Next.js',
  title: envConfig.title,
  description: envConfig.description,
  themeColor: '#111827',
  icons: envConfig.siteLogo,
  openGraph: {
    title: envConfig.title,
    description: envConfig.description,
    url: envConfig.siteUrl,
    images: '/images/website/og-img.png',
    siteName: envConfig.title,
    locale: envConfig.locale,
    type: 'website',
  },
  alternates: {
    canonical: envConfig.siteUrl,
    types: {
      'application/rss+xml': [{ url: 'feed.xml', title: 'SIAE.SAUCE' }],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: envConfig.title,
    description: envConfig.description,
    card: 'summary_large_image',
    images: '/images/website/og-img.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={envConfig.language} suppressHydrationWarning>
      <body className="flex flex-col min-h-[100vh] scroll-smooth transition-colors ease-out duration-300 antialiased bg-gray-100 dark:bg-gray-900">
        <Providers>
          <Header />
          <main className="flex flex-1 w-full flex-col items-center px-4 py-8 sm:p-6">
            {children}
          </main>
          <Footer />
          <ScrollTop />
          <UmamiScript umamiAnalyticsId={envConfig.umamiAnalyticsId} />
          <div
            className="fixed top-0 left-0 h-screen w-screen bg-cover bg-center -z-50"
            style={{ backgroundImage: 'url("/images/website/background-img.svg")' }}
          />
        </Providers>
      </body>
    </html>
  )
}
