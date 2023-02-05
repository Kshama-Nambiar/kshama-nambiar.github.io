import Header from '@/components/utils/header'
import Head from 'next/head'                                                                                                                              


export default function Home() {
  return (
    <>
      <Head>
        <title>Sandeep Singh Guldu</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SS.ico" />
      </Head>
      <main >
        <div className='bg-primary-black overflow-hidden'>
         <Header/>
        </div>
      </main>
    </>
  )
}
