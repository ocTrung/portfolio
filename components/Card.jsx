export default function Card({ project }) {

  return (
    <div id={project?.id} className='grid sm:grid-cols-[1fr_auto] gap-8 max-w-7xl mb-8'>
      <div className='max-w-[50ch]'>
        <h3 className='text-xl font-semibold'>
          {project.title}
        </h3>
        <p className='mt-1'>
          {project.description}
        </p>
        <ul className='mt-4 flex flex-wrap gap-2'>
          {
            project.technologies.map((tech) => (
              <li className='border-[1px] text-green-600 border-[1px] border-green-600 px-4 py-[.5] rounded-xl'>
                {tech}
              </li>
            ))
          }
        </ul>
        <div className='mt-4 flex flex-nowrap items-center gap-4'>
          <a href='#' className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="48"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="#18a34a" /></svg>
          </a>
          {
            project.url !== '#' &&
            <a href={project.url} className='bg-green-600 dark:bg-green-600 shadow-xl shadow-green-600/30 dark:shadow-green-600/40 text-zinc-50 px-4 py-1 mr-2 rounded-2xl'>Visit Site</a>
          }
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