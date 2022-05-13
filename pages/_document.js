import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="A bio, list of skills, and projects for Trung Nguyenvo" />
        {/* <link rel="icon" href="/clock.svg" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}