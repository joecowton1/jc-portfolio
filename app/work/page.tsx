import { Posts } from 'app/components/posts'

export const metadata = {
  title: 'Joe Cowton',
  description: 'Personal website',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work</h1>
      <Posts />
    </section>
  )
}
