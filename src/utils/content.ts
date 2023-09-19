import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export function getAllPost() {
  const posts = allPosts
    .filter((post) => !post.draft)
    .sort((value1, value2) => {
      return compareDesc(new Date(value1.date), new Date(value2.date))
    })

  return posts
}

export function getPost(params: { slug: string }) {
  const post = allPosts.find((page) => page.slug === params.slug)

  return post
}
