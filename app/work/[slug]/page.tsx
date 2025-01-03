import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getPosts } from 'app/utils/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    endDate: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Posts({ params }) {
  let post = getPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.startDate,
            dateModified: post.metadata.startDate,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/work/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
        {formatDate(post.metadata.startDate)} {`->`} {formatDate(post.metadata.endDate)}
      </p>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <h2 className="text-lg tracking-tighter mb-2">
        {post.metadata.summary}
      </h2>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
