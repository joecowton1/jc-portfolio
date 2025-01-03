import { Posts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Joe Cowton
      </h1>
      <p className="mb-4 text-lg">
        {`I’m a creative software engineer with a strong track record in people management, project delivery and mentoring.`}
      </p>
      <p className="mb-4 text-lg">
        {`Over the past seven years I've worked for both multinationals and small agencies, focussing primarily on Typescript, React and Node for web UIs and infrastructure. Most recently I’ve specialised in improving developer experience, building tooling and design systems to bring efficiency and simplicity to engineers in adjacent teams.`}      
      </p>
      <p className="mb-4 text-lg">
        {`Before working in software, I spent ten years touring the world as an electronic music producer, releasing numerous records and running a highly respected record label called Livity Sound.`}
      </p>
    </section>
  )
}



