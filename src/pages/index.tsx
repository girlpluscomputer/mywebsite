import type { NextPage } from 'next'
import Head from 'next/head'

import { About, Companies, Home } from '@/views'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samantha Nuñez - Frontend Developer</title>
      </Head>
      <Home />
      <About />
      <Companies />
    </>
  )
}

export default HomePage
