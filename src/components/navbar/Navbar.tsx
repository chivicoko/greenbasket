'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { NavbarProps } from '@/utils/types';
import { ArrowDropDown, Favorite, Search, ShoppingCart } from '@mui/icons-material';
import Button from '../button/Button';
import ButtonLink from '../button/ButtonLink';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import ProfileDropdown from './ProfileDropdown';
import { useUserForm } from '@/context/UserFormContext';
import MobileNav from './MobileNav';

const Navbar: React.FC<NavbarProps> = ({ firstDivClasses, secondDivClasses }) => {
  const {userInfo, } = useUserForm();
  const [dropdown, setDropdown] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const {totalCount} = useCart();
  const {totalWishlistCount} = useWishlist();

  const dropdownToggle = () => setDropdown((prev) => !prev);
  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

  return (    
    <nav className={`z-30 ${firstDivClasses}`}>
      <div className={secondDivClasses}>
        
        <MobileNav isOpen={isMobileNavOpen} onHandleClose={toggleMobileNav} />

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

        <div className="bg-[#11192899] w-fit md:w-[40%] md:pl-3 flex items-center rounded-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 outline-none focus-within:shadow-[0_0_10px_0_rgba(142,68,173,0.5),0_0_20px_5px_rgba(142,68,173,0.05)]">
          <input
            type="text"
            placeholder="Search..."
            name="searchText"
            className="bg-transparent p-2 md:p-3 ml-2 w-full border-0 text-sm md:text-base text-white leading-tight focus:outline-0 focus:ring-0"
          />
          <Button icon1={<Search className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-secondary hover:bg-secondary_hover text-primary font-semibold rounded-full px-2 md:px-4 py-1 md:py-3 md:ml-2 focus:ring-2 focus:ring-[#bbea70d3]" />
        </div>

        <div className="flex gap-4 items-center justify-end">
          <div className="relative">
            <ButtonLink url='/products/wishlist' icon1={<Favorite className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-secondary hover:bg-secondary_hover flex items-center justify-center p-1 md:p-2 text-primary rounded-full text-sm" />
            {totalWishlistCount > 0 && 
              <div className="absolute -top-[10px] -right-[8px] md:-top-2 md:-right-1 size-5 md:size-6 bg-white rounded-full">
                <p className='w-full h-full flex items-center justify-center text-center text-black text-xs'>{totalWishlistCount}</p>
              </div>
            }
          </div>
          <div className="relative">
            <ButtonLink url='/products/cart' icon2={<ShoppingCart className='h-4 w-4 md:h-6 md:w-6' />} classes='bg-secondary hover:bg-secondary_hover flex items-center justify-center p-1 md:p-2 text-primary rounded-full text-sm' />
            {totalCount > 0 && 
              <div className="absolute -top-[10px] -right-[8px] md:-top-2 md:-right-1 size-5 md:size-6 bg-white rounded-full">
                <p className='w-full h-full flex items-center justify-center text-center text-black text-xs'>{totalCount}</p>
              </div>
            }
          </div>

          <div className='relative hidden md:block border-l pl-3'>
            <button onClick={dropdownToggle} className="flex items-center gap-3">
              <span className="relative size-8 md:size-10 rounded-full">
                <Image
                  src='/images/default_avatar.png'
                  alt="User Profile Image"
                  fill
                  className='rounded-full object-cover'
                  sizes="100%"
                />
              </span>
              <span className="text-white text-base font-semibold capitalize">Hi, { userInfo?.userName }</span>
              <span className={`transform ${dropdown ? 'rotate-180' : ''} text-white transition-all duration-300 ease-in-out`}><ArrowDropDown/></span>
            </button>
            
            {dropdown && 
              <div className="z-50 absolute top-[60px] -right-[73px] -translate-x-1/2 w-fit">
                <ProfileDropdown />
              </div>
            }
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="inline-flex items-center p-1 text-sm text-secondary hover:text-primary rounded-lg md:hidden hover:bg-secondary focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold transition-all duration-0 ease-in-out" 
            aria-controls="navbar-default" aria-expanded="false" onClick={toggleMobileNav}
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
