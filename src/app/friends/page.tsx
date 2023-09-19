import { allFriends } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import GiscusComment from '@/components/GiscusComment'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { MDXComponent } from '@/components/MDXComponents'
import Page from '@/components/layouts/Page'
import { getMetadata } from '@/utils/getMatedata'

type LinkType = {
  title: string
  description: string
  website: string
  image: string
}

export const metadata = getMetadata({
  title: 'Friends',
  description: 'Friedns Page',
  url: 'friends',
})

export default function Friends() {
  const friends = allFriends.find((a) => a.slug === 'friends')

  if (!friends) {
    notFound()
  }

  return (
    <Page title={friends.title}>
      <article className="markdown">
        <MDXComponent code={friends.body.code} />
      </article>
      <div className="sm:grid grid-cols-3 grid-flow-col gap-x-7 my-8">
        {friends.links.map((link: LinkType) => (
          <Link
            className="flex flex-row items-center justify-center rounded-lg mt-4 py-2 px-4 sm:mt-0 bg-white shadow-lg shadow-transparent/5 dark:bg-gray-600"
            href={link.website}
            key={link.title}
          >
            <div>
              <Image
                className="rounded"
                src={link.image}
                alt={link.title}
                width={64}
                height={64}
              ></Image>
            </div>
            <div className="ml-5 flex-grow">
              <h2 className="font-medium">{link.title}</h2>
              <p className="text-sm text-gray-400">{link.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-14">
        <GiscusComment />
      </div>
    </Page>
  )
}
