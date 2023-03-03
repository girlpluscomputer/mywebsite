import Link from 'next/link'
import Image from 'next/image'

import GithubLogo from 'public/assets/github.svg'
import LinkedInLogo from 'public/assets/linkedin-icon.svg'

const Navbar = () => {
  return (
    <nav className="w-200 flex items-center p-40 border-red-600">
      <ul className="flex w-1/3">
        {/* <li className="text-white text-lg pr-4 align-center">
          <Link href="">about</Link>
        </li> */}
      </ul>
      <div className="w-1/3 flex justify-center">
        <Link href="/">
          <Image src="/nun-logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>
      <div className="w-1/3 hidden md:flex justify-end">
        <Link
          href="https://www.linkedin.com/in/samantharnunez/"
          target="_blank"
          style={{ marginRight: '16px' }}
        >
          <LinkedInLogo />
        </Link>
        <Link href="https://github.com/girlpluscomputer" target="_blank">
          <GithubLogo />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
