export default function Card({ project }) {
  return (
    <div id={project?.id} className='grid sm:grid-cols-[1fr_auto] gap-4 mb-12'>
      <div className='max-w-[50ch]'>
        <h3 className='text-xl italic'>
          {project.title}
        </h3>
        <p className='mt-1'>
          {project.description}
        </p>
        <ul className='mt-4 flex flex-wrap gap-2'>
          {
            project.technologies.map((tech) => (
              <li key={tech} className='text-green-600 border-[1px] border-green-600 px-4 py-[.5] rounded'>
                {tech}
              </li>
            ))
          }
        </ul>
        <div className='mt-4 flex flex-nowrap items-center gap-4'>
          <a href={project.github} className='first-letter:'>
            <svg className='fill-current text-green-600 hover:text-green-700' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='48'><path fill='none' d='M0 0h24v24H0z' /><path d='M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z' /></svg>
          </a>
          {
            project.url !== '#' &&
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-[.1em] border-b-2 border-transparent hover:border-green-700 transition-all group'
            >
              <p className='inline ml-1 text-green-600 group-hover:text-green-700 font-medium text-xl'>Visit site</p>
              <svg className='stroke-green-600 group-hover:stroke-green-700 feather feather-arrow-right' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          }
        </div>
      </div>
      <img
        src={project.image}
        alt='screenshot of project'
        width='350'
        className='object-cover object-left-top h-auto max-w-[85%] sm:justify-self-end rounded-md shadow-[6px_6px_0px_#d4d4d8] dark:shadow-[6px_6px_0px_#0f172a]'
      />
    </div>
  )
}