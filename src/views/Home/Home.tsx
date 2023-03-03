import background from '../../../public/assets/background.png'
import Image from 'next/image'

import { Navbar } from './components'

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${background.src}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
      className="w-full h-screen"
    >
      <Navbar />
      <div className="z-10 flex flex-col justify-center items-center p-40 md:p-80">
        <div className="w-full flex flex-col justify-center items-center pt-40">
          <h1 className="text-white text-center text-base md:text-xl">
            Hi!, I’m <span className="text-pink">Sam</span>
          </h1>
          <p className="text-white text-center text-xs md:text-sm">
            Turning ideas into real life products
          </p>
          <button className="bg-yellow text-black text-xs md:text-sm mt-8 py-10 px-20 rounded-md">
            Contact me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
