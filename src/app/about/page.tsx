import { allAbouts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { MDXComponent } from '@/components/MDXComponents'
import Page from '@/components/layouts/Page'
import { getMetadata } from '@/utils/getMatedata'

export const metadata = getMetadata({ title: 'About', description: 'About Page', url: 'about' })

export default function About() {
  const about = allAbouts.find((a) => a.slug === 'about')

  if (!about) {
    notFound()
  }

  return (
    <Page title={about.title}>
      <article className="markdown">
        <MDXComponent code={about.body.code} />
      </article>
    </Page>
  )
}
