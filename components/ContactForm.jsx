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
          <input className='rounded-lg p-1 dark:bg-slate-700 w-9/12 sm:w-1/3' type='text' name='name' id='name' />
        </div>
        <div>
          <label className='block' htmlFor='email'>Your Email: </label>
          <input className='rounded-lg p-1 dark:bg-slate-700 w-9/12 sm:w-1/3' type='email' name='email' id='email' />
        </div>
        <div>
          <label className='block ' htmlFor='message'>Message: </label>
          <textarea
            name='message'
            id='message'
            className='sm:w-1/2 sm:h-32 w-full h-24 rounded-lg p-1 dark:bg-slate-700'
          >
          </textarea>
        </div>
        <div>
          <button
            className='flex items-center gap-1 hover:translate border-b-2 border-transparent hover:border-green-600 transition-all'
            type='submit'
          >
            <p className='inline text-green-600 font-medium text-xl'>Send</p>
            <img className='inline w-5' src='arrow-right.svg' alt=''></img>
          </button>
        </div>
      </form>
    </div>
  )
}