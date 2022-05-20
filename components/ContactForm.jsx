export default function ContactForm() {
  return (
    <div className='px-6 sm:px-10'>
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
          <input className='rounded-lg p-1 dark:bg-gray-700 w-9/12 sm:w-1/3' type='text' name='name' id='name' />
        </div>
        <div>
          <label className='block' htmlFor='email'>Your Email: </label>
          <input className='rounded-lg p-1 dark:bg-gray-700 w-9/12 sm:w-1/3' type='email' name='email' id='email' />
        </div>
        <div>
          <label className='block ' htmlFor='message'>Message: </label>
          <textarea
            name='message'
            id='message'
            className='sm:w-1/2 sm:h-32 w-full h-24 rounded-lg p-1 dark:bg-gray-700'
          >
          </textarea>
        </div>
        <div>
          <button
            className='bg-green-600 dark:bg-green-600 shadow-xl shadow-green-600/30 dark:shadow-green-600/40 text-zinc-50 px-4 py-1 my-1 rounded-2xl'
            type='submit'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}