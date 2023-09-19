import type { Post } from 'contentlayer/generated'
import { format } from 'date-fns'

import Link from '@/components/Link'

import Empty from '../Empty'
import Page from './Page'

export default function PostList({ posts, title }: { posts: Post[]; title: string }) {
  return (
    <Page title={title}>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id} className="mt-6">
              <div className="flex justify-between sm:items-center flex-col sm:flex-row">
                <div>
                  <span className="text-lg mr-1 select-none">#</span>
                  <Link
                    className="font-bold text-gray-700 transform-color duration-300 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 sm:text-lg"
                    href={`/${post.path}`}
                  >
                    {post.title}
                  </Link>
                </div>
                <div className="text-gray-600 mr-5 font-medium dark:text-gray-400 sm:text-lg">
                  {format(new Date(post.date), 'LLLL dd, yyyy')}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center mt-32 sm:mt-20">
          <Empty image="/images/website/being-creative.svg" prompt="Empty, 文章正在赶来的路上..." />
        </div>
      )}
    </Page>
  )
}
