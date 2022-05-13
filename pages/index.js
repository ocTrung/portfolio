import Navbar from '@/components/Navbar.jsx'
import Card from '@/components/Card'

const srm = {
  title: 'Spaced Repetition Manager',
  description: 'Provides a way to manage and schedule review sessions for whatever you are learning.',
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
  description: 'A management system that allows users to view a directory, groups & messages.',
  technologies: [
    'Vue',
    'Bootstrap',
    'MySQL',
    'Sequelize',
    'Node',
    'Express',
  ],
  image: 'assets/church-directory-narrow.png'
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

      <header className='grid grid-cols-[minmax(500px,1280px)] justify-center'>
        <div className='h-[50vh] grid grid-rows-3 pl-10 max-w-screen-2xl'>
          <h1 className='row-start-2 self-end text-4xl font-bold'>Trung Nguyenvo</h1>
          <h2 className='row-start-3 text-2xl'>Software Engineer ⌨️</h2>
        </div>
      </header>

      <main className='grid grid-cols-[minmax(500px,1024px)] justify-center bg-zinc-200 dark:bg-gray-800 min-h-fit'>
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
    </div>
  )
}
