import Navbar from '@/components/Navbar.jsx'
import Card from '@/components/Card'
import projects from '@/assets/projects.json'
import skills from '@/assets/skills.json'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <header className='grid grid-cols-[minmax(375px,1280px)] justify-center'>
        <div className='h-[50vh] grid grid-rows-3 pl-10 max-w-screen-2xl'>
          <h1 className='row-start-2 self-end text-6xl font-extrabold'>Trung Nguyenvo</h1>
          <div className='flex row-start-3 items-start gap-1 pt-2'>
            <h2 className=' text-4xl'>Software Engineer 💻</h2>
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
              Since graduating I have been working on staying sharp by solving problems on leetcode and learning new technologies by building <a className='text-green-600 underline' href='#projects'>projects</a>.
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
                  <Card project={project} />
                ))
              }
            </div>
          </section>
        </div>
      </main>
      <footer id='contactMe' className='grid border-t-[1px] border-zinc-300 bg-zinc-200 dark:border-gray-700 dark:bg-gray-900 grid-cols-[minmax(375px,1024px)] justify-center content-center py-2 min-h-[60vh]'>
        <div className='px-10'>
          <h2 className='text-2xl font-bold mt-4 mb-2'>Contact Me</h2>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            className=''
          >
            <div className=''>
              <label className='block' htmlFor='name'>Your Name: </label>
              <input className='rounded-lg p-1 dark:bg-gray-700 w-9/12 sm:w-1/3' type='text' name='name' id='name' />
            </div>
            <div className=''>
              <label className='block' htmlFor='email'>Your Email: </label>
              <input className='rounded-lg p-1 dark:bg-gray-700 w-9/12 sm:w-1/3' type='email' name='email' id='email' />
            </div>
            <div className=''>
              <label className='block ' htmlFor='message'>Message: </label>
              <textarea
                name='message'
                id='message'
                className='sm:w-1/2 sm:h-32 w-full h-24 rounded-lg p-1 dark:bg-gray-700'
              >
              </textarea>
            </div>
            <div>
              <button className='bg-green-600 dark:bg-green-600 shadow-xl shadow-green-600/30 dark:shadow-green-600/40 text-zinc-50 px-4 py-1 my-1 rounded-2xl'
                type='submit'>
                Send
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  )
}
