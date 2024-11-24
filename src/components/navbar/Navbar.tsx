import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { NavbarProps } from '@/utils/types';
import { Favorite, Search, ShoppingCart } from '@mui/icons-material';
import Button from '../button/Button';
import ButtonLink from '../button/ButtonLink';

const Navbar: React.FC<NavbarProps> = ({ firstDivClasses, secondDivClasses }) => {

  return (    
    <nav className={`z-30 ${firstDivClasses}`}>
      <div className={secondDivClasses}>

        <Link href="/" className="flex items-center space-x-2">
          <span className="relative w-8 h-8">
            <Image
              src="/images/logo.png"
              alt="GreenBasket Store's Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </span>
          <span className='hidden md:block text-white text-xl md:text-2xl font-bold'>GreenBasket</span>
        </Link>

        <div className="bg-[#11192899] w-fit md:w-[40%] md:pl-3 flex items-center rounded-full focus-within:ring-1 focus-within:ring-[#bbea70d3] focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
          <input
            type="text"
            placeholder="Search for groceries, vegetables..."
            name="searchText"
            className="bg-transparent p-2 md:p-3 ml-2 w-full border-0 text-sm md:text-base text-white leading-tight focus:outline-0 focus:ring-0"
          />
          <Button icon1={<Search className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-btn hover:bg-btn-hover text-[#064f38] font-semibold rounded-full px-2 md:px-4 py-1 md:py-3 md:ml-2 focus:ring-2 focus:ring-[#bbea70d3]" />
        </div>

        <div className="flex gap-2 items-center justify-end">
          <Button icon1={<Favorite className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-btn hover:bg-btn-hover flex items-center justify-center p-2 text-[#064f38] rounded-full text-sm" />
          <ButtonLink url='/products/cart' classes='bg-btn hover:bg-btn-hover flex items-center justify-center p-2 text-[#064f38] rounded-full text-sm' icon2={<ShoppingCart className='h-4 w-4 md:h-6 md:w-6' />}  />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
