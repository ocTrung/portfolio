import Navbar from '@/components/Navbar.jsx'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import projects from '@/assets/projects.json'
import skills from '@/assets/skills.json'

export default function Home() {
  return (
    <div id='mainContainer'>
      <header className='grid grid-cols-[minmax(375px,85ch)] justify-center px-2'>
        <Navbar />
        <div className='pb-10 pt-20'>
          <h1 className='text-6xl font-bold'>
            Trung Nguyenvo
          </h1>
          <h2 className='text-4xl mt-1'>
            Software Developer 👨‍💻
          </h2>
        </div>
      </header>
      <main className='grid grid-cols-[minmax(375px,85ch)] justify-center bg-zinc-200 dark:bg-slate-900 min-h-fit px-2'>
        <div className=''>
          <section id='bio' className='mt-4'>
            <h2 className='text-xl mb-2 font-bold'>Bio</h2>
            <p>
              👋 Hey there! My name is Trung. I have a BS in Computer Science from OC. During my last year I worked with a team to develop social-media-like application for a real client.
            </p>
            <br></br>
            <p>
              I am currently focused on web development and learning new technologies by building <a className='text-green-600 underline' href='#projects'>projects</a>.
              In my free time I like to find new music, watch critically acclaimed dramas, and cook 🍝.
            </p>
          </section>

          <section id='skills' className='mt-12'>
            <h2 className='text-xl mb-2 font-bold'>Skills</h2>
            <ul className='flex flex-wrap gap-2'>
              {skills.data.map(skill => (
                <li key={skill} className='text-green-600 border-[1px] border-green-600 px-4 py-[.5] rounded'>{skill}</li>
              ))}
            </ul>
          </section>

          <section id='projects' className='mt-12'>
            <h2 className='text-xl mb-2 font-bold'>Projects</h2>
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
      <footer id='contactMe' className='grid border-t-[1px] border-zinc-300 bg-zinc-200 dark:border-slate-700 dark:bg-slate-900 grid-cols-[minmax(375px,1024px)] justify-center content-center px-2 min-h-[60vh]'>
        <ContactForm />
      </footer>
    </div>
  )
}
