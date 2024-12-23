"use client";

import { products } from '@/utils/data';
import { Add, ArrowForward, Remove } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './button/ButtonLink';
import { usePathname } from 'next/navigation';
import Button from './button/Button';
import { useEffect, useState } from 'react';
import { DummyProduct } from '@/utils/types';

const ProductsJustForYou: React.FC = () => {
  const [currentProducts, setCurrentProducts] = useState<DummyProduct[]>(products);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === '/') {
      setCurrentProducts(products.slice(0, 5));
    } else {
      setCurrentProducts(products.slice(7, 12));
    }
  },[pathName]);
    
  return (
    <div className='bg-[#fffbeb] w-full pt-10 md:pt-16 pb-20 px-4 lg:px-8 xl:px-20 2xl:px-32'>
      <div className="flex items-center justify-between mb-8">
        <h3 className='text-lg md:text-xl lg:text-3xl font-bold text-[#064f38]'>{pathName === '/' ? 'Just for you' : 'Most selling products'}</h3>
        <ButtonLink url='/products' btnText='See more' classes='text-orange-950 font-semibold gap-2 group' icon2={<ArrowForward className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1' />}  />
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {
            currentProducts.map(product => 
              <div key={product.id} className="pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
                <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                  <Image
                    src={product.img}
                    alt={`${product.name} preview`}
                    fill
                    className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>

                <span className='px-4 w-full'>
                  <h2 className='text-center text-lg font-semibold text-theme hover:text-[#bbea70]'>
                    <Link href={`/products/${product.id}`} className="">
                      {product.name}
                    </Link>
                  </h2>
                  <p className='text-center text-sm text-gray-500 font-semibold'>120gm</p>
                  <p className='text-center text-xl py-3 font-bold text-theme'>${product.price}</p>
                  <div className='bg-[#cee1af90] w-full flex items-center py-1 rounded-lg justify-around'>
                    <Button icon1={<Remove/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                    <Button icon1={<Add/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                  </div>
                </span>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default ProductsJustForYou;