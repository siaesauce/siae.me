import PostList from '@/components/layouts/PostList'
import { getAllPost } from '@/utils/content'

import { getMetadata } from '../../utils/getMatedata'

export const metadata = getMetadata({
  title: 'Posts',
  description: 'All Posts by SIAE.SAUCE',
  url: 'posts',
})

export default function Posts() {
  const posts = getAllPost()

  return <PostList posts={posts} title="All Post"></PostList>
}
