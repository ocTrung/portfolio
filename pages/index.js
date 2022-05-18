import Navbar from '@/components/Navbar.jsx'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import projects from '@/assets/projects.json'
import skills from '@/assets/skills.json'

export default function Home() {
  return (
    <div id='mainContainer'>
      <Navbar />
      <header className='grid grid-cols-[minmax(375px,1280px)] justify-center'>
        <div className='h-[50vh] grid grid-rows-3 pl-10 max-w-screen-2xl'>
          <h1 className='row-start-2 self-end text-6xl font-extrabold'>
            Trung Nguyenvo
          </h1>
          <div className='flex row-start-3 items-start gap-1 pt-2'>
            <h2 className=' text-4xl'>
              Software Engineer 💻
            </h2>
          </div>
        </div>
      </header>
      <main className='grid grid-cols-[minmax(375px,1024px)] justify-center bg-zinc-200 dark:bg-gray-900 min-h-fit'>
        <div className='px-10 py-2'>
          <section id='bio' className='mt-2 w-full md:w-[70ch] mb-10'>
            <h2 className='text-2xl font-bold mb-4'>Bio</h2>
            <p>
              👋 Hey there! My name is Trung. I have a BA in Computer Science from OC. During my last year I worked with a team to develop social-media-like application for a real client.
            </p>
            <br></br>
            <p>
              Since graduating I have been learning about web development and new technologies by building <a className='text-green-600 underline' href='#projects'>projects</a>.
            </p>
            <br></br>
            <p>
              In my free time I like to find new music, watch critically acclaimed dramas, and I am currently learning how to cook.
            </p>
          </section>

          <section id='skills' className='w-full mb-10'>
            <h2 className='text-2xl font-bold mb-4'>Skills</h2>
            <ul className='flex flex-wrap gap-2'>
              {skills.data.map(skill => (
                <li key={skill} className='text-green-600 border-[1px] border-green-600  px-4 py-[.5] rounded-xl'>{skill}</li>
              ))}
            </ul>
          </section>

          <section id='projects' className='mt-12'>
            <h2 className='text-2xl font-bold mb-4'>Projects</h2>
            <div className=''>
              {
                projects.data.map(project => (
                  <Card key={project.title} project={project} />
                ))
              }
            </div>
          </section>
        </div>
      </main>
      <footer id='contactMe' className='grid border-t-[1px] border-zinc-300 bg-zinc-200 dark:border-gray-700 dark:bg-gray-900 grid-cols-[minmax(375px,1024px)] justify-center content-center py-2 min-h-[60vh]'>
        <ContactForm />
      </footer>
    </div>
  )
}
