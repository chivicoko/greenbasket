"use client";

import Image from 'next/image';
import Navbar from './navbar/Navbar';
import useScrollVisibility from '@/hooks/useScrollVisibility';
import { usePathname, useRouter } from 'next/navigation';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

const HeaderTwo = () => {
  const { totalWishlistCount } = useWishlist();
  const { totalCartCount } = useCart();
  const isVisible = useScrollVisibility(85);
  const router = useRouter();
  const pathName = usePathname();
  // console.log(pathName);

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  }

  return (
    <>
      <Navbar firstDivClasses={`transition-all duration-300 ease-in-out bg-zinc-50 text-white ${isVisible ? "sticky top-0 left-0 right-0 z-50" : "bg-white py-2 px-[7px] md:py-4 md:px-6"}`} secondDivClasses={`transition-all duration-300 ease-in-out flex items-center justify-between gap-2 ${isVisible ? "p-4 px-[7px] sticky top-0 left-0 right-0 z-50 bg-primary md:py-4 md:px-16 shadow-md" : "md:p-4 rounded-md md:rounded-lg px-[7px] py-3 bg-primary"}`}/>
      <header className=" text-white bg-zinc-50 lg:mb-4 mb-4 px-8 md:px-24">
        <div className={`w-full flex items-center justify-between gap-16 ${pathName === '/products/forms' ? 'mt-0' : 'mt-4'}`}>
          {pathName !== '/products/forms' &&
          <button onClick={goBack} className='group flex items-center gap-2 font-bold border-b border-primary text-black pt-[11px] px-1 hover:cursor-pointer'>
            <div className="transform group-hover:-translate-x-1 ease-in-out relative w-[27px] h-[10px]">
              <Image
                src="/images/Vector-1.svg"
                alt="back icon"
                fill
                className="img object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            Back
          </button>
          }
          {pathName === "/products/wishlist" &&
          <h3 className='w-[54%] self-end text-lg md:text-xl lg:text-3xl font-bold text-primary'>Wishlist ({totalWishlistCount})</h3>
          }
          {pathName === "/products/cart" &&
          <h3 className='w-[54%] self-end text-lg md:text-xl lg:text-3xl font-bold text-primary'>Cart ({totalCartCount})</h3>
          }
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
