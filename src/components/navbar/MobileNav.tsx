import Image from 'next/image'
import { Cancel, HomeOutlined, Logout, PunchClock, Settings } from '@mui/icons-material'
import { useUserForm } from '@/context/UserFormContext'
import Button from '../button/Button'
import Link from 'next/link'
import ButtonNeutral from '../button/ButtonNeutral'

type MobileNavProps = {
    isOpen: boolean,
    onHandleClose: () => void
}

const MobileNav = ({isOpen, onHandleClose}: MobileNavProps) => {
  const {userInfo, dropUserInfo} = useUserForm();

  return (
    <nav
      className={ `${isOpen ? 'translate-y-0' : '-translate-y-full'} tabs fixed left-0 top-0 flex flex-col items-center justify-center gap-6 md:hidden bg-white w-screen h-screen z-[1000] transform transition-transform duration-300` }
      id="navbar-default">
        

      <ul className="flex relative h-full w-full flex-col items-center justify-center gap-4">
        {/* <button id="cancel" className="absolute top-4 right-8" onClick={onHandleClose}>❌</button> */}
        <ButtonNeutral
            onClick={onHandleClose}
            icon1={<Cancel className='absolute top-10 right-10 transition-all duration-300 ease-in-out transform group-hover:-translate-x-1' />}
        />
        
        <li className='relative md:hidden mb-24' tabIndex={1}>
            <span className="flex items-center gap-3">
                <span className="relative size-10 rounded-full">
                <Image
                    src='/images/default_avatar.png'
                    alt="User Profile Image"
                    fill
                    className='rounded-full object-cover'
                    sizes="100%"
                />
                </span>
                <span className="text-primary text-base font-semibold capitalize">Hi, { userInfo?.userName }</span>
            </span>
        </li>
        <li>
            <Link href="/" title="settings" className="py-[0.5rem] px-[1rem] border-b-2 text-[16px] font-semibold text-primary border-transparent hover:border-primary transition-transform duration-300 flex items-center gap-2">
                <HomeOutlined/>
                <span>Home</span>
            </Link>
        </li>
        <li>
            <Link href="/products" title="settings" className="py-[0.5rem] px-[1rem] border-b-2 text-[16px] font-semibold text-primary border-transparent hover:border-primary transition-transform duration-300 flex items-center gap-2">
                <PunchClock/>
                <span>Products</span>
            </Link>
        </li>
        <li>
            <Link href="/settings" title="settings" className="py-[0.5rem] px-[1rem] border-b-2 text-[16px] font-semibold text-primary border-transparent hover:border-primary transition-transform duration-300 flex items-center gap-2">
                <Settings/>
                <span>settings</span>
            </Link>
        </li>
      </ul>
      <div className="btns flex flex-col items-center gap-4 mb-24">
        <Button onClick={dropUserInfo} btnText='Logout' icon1={<Logout/>} classes="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-secondary_hover mt-2 font-bold rounded-xl text-lg text-primary py-[11px] px-[27px] hover:cursor-pointer shadow-md" />
      </div>
    </nav>
  )
}

export default MobileNav