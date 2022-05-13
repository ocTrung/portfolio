export default function Card({ project }) {
  return (
    <div className='flex flex-wrap justify-between max-w-5xl'>
      <div className='max-w-[50ch]'>
        <h3 className='text-xl'>
          {project.title}
        </h3>
        <p className='mt-2'>
          {project.description}
        </p>
        <ul className='flex flex-wrap gap-2'>
          {
            project.technologies.map((tech) => (
              <li className='border-[1px] border-green-600 px-4 py-[.5]'>
                {tech}
              </li>
            ))
          }
        </ul>
        <div>
          <a href='#' className='bg-green-600 text-zinc-50 px-4 py-1 mr-2'>Github</a>
          <a href='#' className='bg-green-600 text-zinc-50 px-4 py-1 mr-2'>Live Site</a>
        </div>
      </div>
      <img
        src={project.image}
        alt='screenshot of project'
        width='350'
        className='object-cover h-80 w-80'
      />
    </div>
  )
}