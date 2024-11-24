"use client";

import Image from 'next/image';
import Navbar from './navbar/Navbar';
import useScrollVisibility from '@/hooks/useScrollVisibility';
import { useRouter } from 'next/navigation';

const HeaderTwo = () => {
  const isVisible = useScrollVisibility(85);
  const router = useRouter();

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  }

  return (
    <>
      <Navbar firstDivClasses={`transition-all duration-300 ease-in-out bg-zinc-50 ${isVisible ? "sticky top-0 left-0 right-0 z-50" : "text-white bg-white py-2 px-2 md:py-4 md:px-6"}`} secondDivClasses={`transition-all duration-300 ease-in-out flex items-center justify-between gap-2 ${isVisible ? "p-4 sticky top-0 left-0 right-0 z-50 bg-theme md:py-4 md:px-16 shadow-md" : "md:p-4 rounded-md md:rounded-lg px-4 py-3 bg-theme"}`}/>
      <header className=" text-white bg-zinc-50 mb-1 lg:mb-4 px-2 md:px-6">
        <div className="flex gap-3 mt-4 mb-4">
          <button onClick={goBack} className='backBtn flex items-center gap-2 font-bold border-b border-theme text-black pt-[11px] px-1 ml-6 md:ml-16 hover:cursor-pointer'>
            <div className="userleftArrowIcon relative w-[27px] h-[10px]">
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
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
