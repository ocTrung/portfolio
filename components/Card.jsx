export default function Card({ project }) {
  return (
    <div className='grid sm:grid-cols-[1fr_auto] gap-8 max-w-7xl mb-8'>
      <div className='max-w-[50ch]'>
        <h3 className='text-xl font-semibold'>
          {project.title}
        </h3>
        <p className='mt-1 text-zinc-500 dark:text-gray-300'>
          {project.description}
        </p>
        <ul className='mt-4 flex flex-wrap gap-2'>
          {
            project.technologies.map((tech) => (
              <li className='border-[1px] border-green-600 text-zinc-500 dark:text-gray-300 px-4 py-[.5]'>
                {tech}
              </li>
            ))
          }
        </ul>
        <div className='mt-4'>
          <a href='#' className='bg-green-600 text-zinc-50 px-4 py-1 mr-2'>Github</a>
          <a href='#' className='bg-green-600 text-zinc-50 px-4 py-1 mr-2'>Live Site</a>
        </div>
      </div>
      <img
        src={project.image}
        alt='screenshot of project'
        width='350'
        className='object-cover h-80 w-80 translate-x-[-1rem]'
      />
    </div>
  )
}