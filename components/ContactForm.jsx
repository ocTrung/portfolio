export default function ContactForm() {
  return (
    <div className=''>
      <h2 className='text-2xl font-bold mt-4 mb-2'>Contact Me</h2>

      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        action='/success'
      >
        {/* for netlify bots */}
        <input type='hidden' name='form-name' value='contact' />

        <div>
          <label className='block' htmlFor='name'>Your Name: </label>
          <input
            className='rounded-lg p-1 dark:bg-slate-700 w-9/12 sm:w-1/3'
            type='text'
            name='name'
            id='name'
            required
          />
        </div>
        <div>
          <label className='block' htmlFor='email'>Your Email: </label>
          <input
            className='rounded-lg p-1 dark:bg-slate-700 w-9/12 sm:w-1/3'
            type='email'
            name='email'
            id='email'
            required
          />
        </div>
        <div>
          <label className='block ' htmlFor='message'>Message: </label>
          <textarea
            name='message'
            id='message'
            className='sm:w-1/2 sm:h-32 w-full h-24 rounded-lg p-1 dark:bg-slate-700'
            required
          >
          </textarea>
        </div>
        <div>
          <button
            className='flex items-center gap-1 hover:translate border-b-2 border-transparent hover:border-green-700 group transition-all'
            type='submit'
          >
            <p className='inline text-green-600 group-hover:text-green-700 font-medium text-xl'>Send</p>
            <svg className='stroke-green-600 group-hover:stroke-green-700 feather feather-arrow-right' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </form>
    </div>
  )
}