import { GitHub, Instagram, KeyboardArrowRight, Language, LinkedIn, Mail, Send, Twitter, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#064f38] flex flex-col text-white z-30 mt-16">
      <div className="border-b border-[#406f60] flex flex-col lg:flex-row gap-6 items-center justify-between py-14 px-8 lg:px-12">

        <div className="flex-1 flex self-start md:self-center flex-col items-start justify-start gap-2">
          <Link href='/' className="flex items-center  space-x-2">
            <span className="relative w-8 h-8">
              <Image 
                src="/images/logo.png" 
                alt="GreenBasket Store's Logo"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100%"
              />
            </span>
            <p className="text-white text-xl md:text-2xl font-bold flex items-center gap-2">
              GreenBasket
            </p>
          </Link>
          <p>We are dedicated to serving you better and making your life get easier and better day after day. </p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-start justify-center md:justify-between gap-6 md:gap-16 my-6 lg:my-auto">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-2xl">Links</div>
            <ul className="flex flex-col gap-1 justify-end mt-3">
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href='/' className="flex items-center"><KeyboardArrowRight/> Home</Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href='/extras' className="flex items-center"><KeyboardArrowRight/> Favorite</Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href='/extras' className="flex items-center"><KeyboardArrowRight/> Cart</Link>
              </li>
            </ul>
          </div>

          <div className="flex-2 flex flex-col gap-2">
            <div className="text-2xl">Contact</div>
            <ul className="flex flex-col gap-2 justify-end mt-3">
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href={'#'}>+234 8028845693</Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg">
                <Link href={'#'}>victor.c.okoye@gmail.com</Link>
              </li>
              <li className="listItem itemIcons">
                <span className="flex gap-2 flex-wrap items-center mt-2">
                  <Link href={'https://www.instagram.com/chivicoko'} target="_blank" className="bg-btn hover:bg-btn-hover p-2 text-[#064f38] rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <Instagram className="h-4 w-4 md:h-6 md:w-6" />
                  </Link>
                  <Link href={'https://twitter.com/chivicoko'} target="_blank" className="bg-btn hover:bg-btn-hover p-2 text-[#064f38] rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <Twitter className="h-4 w-4 md:h-6 md:w-6" />
                  </Link>
                  <Link href={'https://github.com/chivicoko'} target="_blank" className="bg-btn hover:bg-btn-hover p-2 text-[#064f38] rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <GitHub className="h-4 w-4 md:h-6 md:w-6" />
                  </Link>
                  <Link href={'https://www.victorokoye.com/'} target="_blank" className="bg-btn hover:bg-btn-hover p-2 text-[#064f38] rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <Language className="h-4 w-4 md:h-6 md:w-6" />
                  </Link>
                  <Link href={'https://www.linkedin.com/in/chivicoko'} target="_blank" className="bg-btn hover:bg-btn-hover p-2 text-[#064f38] rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <LinkedIn className="h-4 w-4 md:h-6 md:w-6" />
                  </Link>
                  <Link href={'https://wa.me/+2348028845693'} target="_blank" className="bg-btn hover:bg-btn-hover p-2 text-[#064f38] rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
                    <WhatsApp className="h-4 w-4 md:h-6 md:w-6" />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <p className="self-center">Subscribe To Our Newsletter</p>
          <div className="bg-[#11192899] pl-3 flex items-center border rounded-full border-[#bbea70] focus-within:border-[#bbea70] focus-within:ring-1 focus-within:ring-[#064f38] focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
            <span className="relative flex items-center w-4 h-5 text-[#bbea70] flex-shrink-0">
              <Mail />
            </span>
            <input
              type="email"
              placeholder="eg. john@gmail.com"
              name="email"
              className="bg-transparent p-3 ml-2 rounded-full shadow-lg w-full border-0 text-sm md:text-base text-white leading-tight focus:outline-0 focus:ring-0"
            />
            <button
              type="button"
              className="bg-btn hover:bg-btn-hover text-[#064f38] font-semibold rounded-full px-4 py-3 ml-2 focus:ring-2 focus:ring-[#064f38]"
            >
              <Send className='-rotate-45 h-4 w-4 md:h-6 md:w-6' />
            </button>
          </div>
        </div>

      </div>

      <p className="py-4 flex items-center justify-center">&copy; GreenBasket Stores 2024</p>
    </footer>
  )
}

export default Footer;