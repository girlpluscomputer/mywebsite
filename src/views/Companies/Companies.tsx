import Image from 'next/image'
import CrehanaLogo from '../../../public/assets/crehana.svg'
import CienLadrillosLogo from '../../../public/assets/100ladrillos-logo.png'
import ShipheroLogo from '../../../public/assets/shiphero-logo.svg'

const Companies = () => {
  return (
    <div className="h-30 w-full flex justify-center bg-black p-20">
      <div className="w-1/2 flex justify-between items-center">
        <Image src={CienLadrillosLogo} alt="logo" width={100} height={100} />
        <ShipheroLogo />
        <CrehanaLogo />
      </div>
    </div>
  )
}

export default Companies
