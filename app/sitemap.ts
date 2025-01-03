import { getPosts } from 'app/utils/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let posts = getPosts().map((post) => ({
    url: `${baseUrl}/work/${post.slug}`,
    lastModified: post.metadata.endDate,
  }))

  let routes = ['', '/work', '/music'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
