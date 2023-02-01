import SamVector from '../../../public/sam-vector.svg'

const About = () => {
  return (
    <div className="flex bg-pink px-20">
      <div className="w-1/2 h-screen flex justify-center items-end">
        <div style={{ width: '75%' }}>
          <SamVector />
        </div>
      </div>
      <div className="w-1/2 h-screen pt-10 flex flex-col justify-center">
        <h1>About me</h1>
        <p className="text-black text-2xl py-4 line-height-md">
          I’m a <b>software developer</b> with a passion for building innovative
          and user-friendly applications. On this website, you will find more
          information about my background and experience, as well as some of the
          projects I have worked on.
        </p>
        <p className="text-black text-2xl py-4 line-height-md">
          Thank you for visiting and I hope to connect with you soon!
        </p>
      </div>
    </div>
  )
}

export default About
