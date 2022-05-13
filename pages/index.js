import Navbar from '@/components/Navbar.jsx'
import Card from '@/components/Card'

const srm = {
  title: 'Spaced Repetition Manager',
  description: 'A full stack application providing a way to manage and schedule review sessions for whatever you are learning.',
  technologies: [
    'React',
    'Next',
    'Sass',
    'Prisma',
    'PostgreSQL',
    'NextAuth',
    'ReactQuery'
  ],
  image: 'assets/srm-login.png'
}

const pkmn = {
  title: 'Pokemon Booster Pack Simulator',
  description: 'A simulator for opening Pokemon booster packs.',
  technologies: [
    'React',
    'Next',
    'Sass',
  ],
  image: 'assets/booster-opener.png'
}

const cmgmt = {
  title: 'Church Management System',
  description: 'A management system that allows users to view a directory, messages and join groups. Includes admin roles to provide extra privileges .',
  technologies: [
    'Vue',
    'Bootstrap',
    'MySQL',
    'Sequelize',
    'Node',
    'Express',
  ],
  image: 'assets/church-login-narrow.png'
}

const projectsList = [
  srm,
  pkmn,
  cmgmt
]

export default function Home() {
  return (
    <div className=''>
      <Navbar />

      <header className='grid grid-cols-[minmax(375px,1280px)] justify-center'>
        <div className='h-[50vh] grid grid-rows-3 pl-10 max-w-screen-2xl'>
          <h1 className='row-start-2 self-end text-6xl font-bold'>Trung Nguyenvo</h1>
          <h2 className='row-start-3 text-4xl'>Software Engineer ⌨️</h2>
        </div>
      </header>
      <main className='grid grid-cols-[minmax(375px,1024px)] justify-center bg-zinc-200 dark:bg-gray-900 min-h-fit'>
        <div className='px-10 py-2'>
          <section id='bio' className='mt-2 w-full md:w-[65ch] mb-10'>
            <h2 className='text-2xl font-bold mb-4'>Bio</h2>
            <p>
              I have a BA in Computer Science from OC. My final project in school was to work with a team to develop social-media-like application for a real client. Since graduating I have been trying to stay sharp by solving problems on leetcode and learning new technologies by build projects.

              In my free time I like to find new music, watch critically acclaimed dramas, and I am currently learning how to cook.
            </p>
          </section>

          <section id='skills' className='w-full mb-10'>
            <h2 className='text-2xl font-bold mb-4'>Skills</h2>
            <ul className='flex flex-wrap gap-2'>
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>HTML</li>
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>CSS</li>
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>React</li>
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>Next.js</li>
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>Sass</li>
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>Tailwind</li>
            </ul>
          </section>

          <section id='projects' className='mt-12'>
            <h2 className='text-2xl font-bold mb-4'>Projects</h2>
            <div className=''>
              {
                projectsList.map(project => (
                  <Card project={project} />
                ))
              }
            </div>
          </section>
        </div>
      </main>
      <footer className='grid grid-cols-[minmax(375px,1024px)] justify-center'>
        <div className='flex gap-2 items-center pl-4'>
          {/* <h2 className='text-2xl font-bold mb-4 text-center'>find me at</h2> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(241,196,14,1)" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(241,196,14,1)" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" fill="rgba(241,196,14,1)" /></svg>
        </div>
      </footer>
    </div>
  )
}
