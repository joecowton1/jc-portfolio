import Link from 'next/link'
import { formatDate, getPosts } from 'app/utils/utils'

export function Posts() {
  let allPosts = getPosts()

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.endDate) > new Date(b.metadata.endDate) || !a.metadata.endDate
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 text-lg"
            href={`/experience/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                 {formatDate(post.metadata.startDate)} {`->`} {formatDate(post.metadata.endDate)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>        
              <p className="text-neutral-500 dark:text-neutral-100 tracking-tight">
                  {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
