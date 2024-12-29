import { getPosts } from 'app/utils/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let posts = getPosts().map((post) => ({
    url: `${baseUrl}/experience/${post.slug}`,
    lastModified: post.metadata.endDate,
  }))

  let routes = ['', '/experience', '/music'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
