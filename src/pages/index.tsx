import type { NextPage } from 'next'
import Head from 'next/head'

import { About, Home } from '@/views'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samantha Nuñez - Frontend Developer</title>
      </Head>
      <Home />
      <About />
    </>
  )
}

export default HomePage
