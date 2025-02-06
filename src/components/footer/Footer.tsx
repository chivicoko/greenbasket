import { BusinessCenterOutlined, CardGiftcard, GitHub, HelpOutline, Instagram, KeyboardArrowRight, Language, LinkedIn, Mail, Send, Twitter, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Prefoot from "./Prefoot";
import Button from "../button/Button";
import ButtonLink from "../button/ButtonLink";
import { footerLinks } from "@/utils/data";


const myLinks = [
  { id: 1, url: 'https://www.victorokoye.com/', icon: <Language className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 2, url: 'https://www.instagram.com/chivicoko', icon: <Instagram className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 3, url: 'https://twitter.com/chivicoko', icon: <Twitter className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 4, url: 'https://github.com/chivicoko', icon: <GitHub className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 5, url: 'https://www.linkedin.com/in/chivicoko', icon: <LinkedIn className="h-4 w-4 md:h-6 md:w-6" />, },
  { id: 6, url: 'https://wa.me/+2348028845693', icon: <WhatsApp className="h-4 w-4 md:h-6 md:w-6" />, },
];


const Footer = () => {
  return (
    <>
      <Prefoot />

      <footer className="bg-[#fffbeb] flex flex-col text-gray-800 z-30 px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-between pt-16">
          <div className="w-full xl:w-1/4 self-start md:self-center">
            <div className="flex flex-col items-start justify-start gap-2">
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
                <p className="text-primary text-xl md:text-2xl font-bold flex items-center gap-2">
                  GreenBasket
                </p>
              </Link>
              <p>We are dedicated to serving you better and making your life get easier and better day after day. </p>
            </div>
            <div className="mt-7 md:mt-10">
              <h3 className="text-xl font-semibold mb-3">Accepeted Payments</h3>
              <div className="flex items-center gap-2">
                <span className="relative rounded-sm shadow-md w-12 h-8">
                  <Image 
                    src="/images/visa-logo-300x300.jpg" 
                    alt="Visa's payment card symbol"
                    fill
                    className="object-cover rounded-sm"
                    sizes="100%"
                  />
                </span>
                <span className="relative rounded-sm shadow-md w-12 h-8">
                  <Image 
                    src="/images/Mastercard_logo.webp" 
                    alt="Mastercard's payment card symbol"
                    fill
                    className="object-cover rounded-sm"
                    sizes="100%"
                  />
                </span>
                <span className="relative rounded-sm shadow-md w-12 h-8">
                  <Image 
                    src="/images/apple-pay-2.png" 
                    alt="Apple's payment card symbol"
                    fill
                    className="object-cover rounded-sm"
                    sizes="100%"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-3/4 flex flex-row items-start justify-center md:justify-between gap-6 md:gap-10 my-6 lg:my-auto flex-wrap">
            {
              footerLinks.map(footerLink => {
                return(
                  <div key={footerLink.id} className="flex-1 flex flex-col gap-2">
                    <div className="text-2xl whitespace-nowrap">{footerLink.title}</div>
                    <ul className="flex flex-col gap-1 justify-end mt-3">
                    {
                      footerLink.links.map(link => {
                        return(
                          <li key={link.id} className="transition-transform duration-300 ease-in-out transform hover:translate-y-0.5 text-sm md:text-lg whitespace-nowrap">
                            <Link href={link.url} className="flex items-center"><KeyboardArrowRight/> {link.text}</Link>
                          </li>
                        )
                      })
                    }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="border-b  pt-8 md:pt-0 lg:pt-10 xl:pt-0 pb-14 md:pb-10 flex items-center justify-center md:justify-end gap-10 lg:gap-16 flex-wrap">
          <div className="listItem itemIcons self-end">
            <span className="flex gap-2 flex-wrap items-center mt-2">
              {
                myLinks.map(link => {
                  return(
                    <ButtonLink key={link.id} target="_blank" url={link.url} icon1={link.icon} classes="bg-secondary hover:bg-secondary_hover p-2 text-primary rounded-full text-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1" />
                  )
                })
              }
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="self-center">Subscribe To Our Newsletter</p>
            <div className="bg-[#1b2943] pl-3 flex items-center border rounded-full border-secondary focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 outline-none focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
              <span className="relative flex items-center w-4 h-5 text-secondary flex-shrink-0">
                <Mail />
              </span>
              <input
                type="email"
                placeholder="eg. john@gmail.com"
                name="email"
                className="bg-transparent p-3 ml-2 rounded-full shadow-lg w-full border-0 text-sm md:text-base text-white leading-tight focus:outline-0 focus:ring-0"
              />
              <Button icon1={<Send className='-rotate-45 h-4 w-4 md:h-6 md:w-6' />} classes="bg-secondary hover:bg-secondary_hover text-primary font-semibold rounded-full px-4 py-3 ml-2 focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        </div>

        <div className="py-4 flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center justify-center md:justify-start gap-4 md:gap-10 flex-wrap">
            <Button btnText="Become A Seller" icon1={<BusinessCenterOutlined className='h-4 w-4 md:h-6 md:w-6 text-pink-600' />} classes="flex items-center gap-1 whitespace-nowrap" />
            <Button btnText="Gift Cards" icon1={<CardGiftcard className='h-4 w-4 md:h-6 md:w-6 text-pink-600' />} classes="flex items-center gap-1 whitespace-nowrap" />
            <Button btnText="Help Center" icon1={<HelpOutline className='h-4 w-4 md:h-6 md:w-6 text-pink-600' />} classes="flex items-center gap-1 whitespace-nowrap" />
          </div>
          <div className="flex items-center justify-center gap-10 w-full md:w-auto">
            <Button btnText="Terms of Use" classes="flex items-center whitespace-nowrap" />
            <Button btnText="Privacy Policy" classes="flex items-center whitespace-nowrap" />
          </div>
          <div className="flex items-center justify-center md:justify-end gap-2 flex-wrap">
            <span>All Rights Reserved.</span> <span>&copy; GreenBasket Stores | 2024</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;