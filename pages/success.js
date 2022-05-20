import Link from 'next/link'

export default function Success() {
  return (
    <main className='grid h-screen w-screen place-items-center content-center'>
      <h1 className='text-6xl'>Thank You! 💌</h1>
      <h2 className='text-3xl'>We'll be in touch soon!</h2>
      <Link href='/'>
        <a
          className='mt-8 flex items-center'
        >
          <img className='inline w-5' src='arrow-left.svg' alt=''></img>
          <p className='inline ml-1 text-green-600 font-medium text-xl'>Back to home</p>
        </a>
      </Link>
    </main>
  )
}