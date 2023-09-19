import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PostList from '@/components/layouts/PostList'
import { getAllPost } from '@/utils/content'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata | undefined> {
  const posts = getAllPost().filter((post) => post.categories === params.id)

  if (!posts || posts.length < 1) {
    return
  }

  return {
    title: `${params.id} - Posts`,
    description: `${params.id} Category Posts`,
  }
}

export default function Categories({ params }: { params: { id: string } }) {
  const posts = getAllPost().filter((post) => post.categories === params.id)

  if (!posts || posts.length < 1) {
    notFound()
  }

  return <PostList posts={posts} title={params.id}></PostList>
}
