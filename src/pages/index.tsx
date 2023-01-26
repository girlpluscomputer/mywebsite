import type { NextPage } from 'next'
import Head from 'next/head'

import { Home } from '@/views'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Samantha Nuñez - Frontend Developer</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
