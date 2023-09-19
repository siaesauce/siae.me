import { format } from 'date-fns'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import GiscusComment from '@/components/GiscusComment'
import Link from '@/components/Link'
import { MDXComponent } from '@/components/MDXComponents'
import { envConfig } from '@/data/envConfig'
import { getPost } from '@/utils/content'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = getPost(params)

  if (!post) {
    return
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: envConfig.title,
      locale: envConfig.locale,
      url: `${envConfig.siteUrl}/${post.path}`,
      type: 'article',
    },
    twitter: {
      title: envConfig.title,
      description: envConfig.description,
      card: 'summary_large_image',
      images: '/images/website/og-img.png',
    },
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPost(params)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col w-full max-w-3xl mt-14 sm:mt-24">
      <div>
        <div className="text-2xl sm:text-3xl font-semibold mb-2 text-black dark:text-white">
          {post.title}
        </div>
        <div className="flex font-medium justify-between items-center">
          <Link className="text-blue-500 sm:text-lg mr-3" href={`/categories/${post.categories}`}>
            #{post.categories}
          </Link>
          <div className="text-gray-600 dark:text-gray-300 sm:text-lg">
            {format(new Date(post.date), 'LLLL dd, yyyy')}
          </div>
        </div>
      </div>
      <article className="markdown my-4">
        <MDXComponent code={post.body.code} />
      </article>
      <GiscusComment />
    </div>
  )
}
