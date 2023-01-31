import Image from 'next/image'

import { Navbar } from './components'

const Home = () => {
  return (
    <div className="bg-black w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center pt-40">
          <h1 className="text-white">
            Hi!, I’m <span className="text-pink">Sam</span>
          </h1>
          <p className="text-white text-2xl">
            Turning ideas into real life products
          </p>
          <button className="bg-yellow text-black text-lg mt-8 py-2 px-4 rounded-md">
            Contact me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
