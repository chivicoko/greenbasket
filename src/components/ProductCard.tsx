'use client';

import React from 'react'
import Button from './button/Button';
import { Add, AddShoppingCart, Remove } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Product2 } from '@/utils/types';

const ProductCard = ({product, key}: {product: Product2, key: string}) => {
  const {addToCart, isProductInCart, increaseProductQuantity, decreaseProductQuantity, getProductQuantity} = useCart();

  return (
    <div key={key} className="pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
        <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
            <Image
                src={product.thumbnail}
                // src={product.image}
                alt={`${product.title} preview`}
                fill
                className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </Link>

        
        <div className='px-4 w-full h-1/2 flex flex-col items-center justify-between'>
            <h2 className='text-center text-lg font-semibold text-primary hover:text-black'>
            <Link href={`/products/${product.id}`} className="">
                {product.title}
            </Link>
            </h2>
            
            <div>
            <p className='text-center text-sm text-gray-500 font-semibold'>234 gm</p>
            {/* <p className='text-center text-sm text-gray-500 font-semibold'>{product.weight}gm</p> */}
            <p className='text-center text-xl py-3 font-bold text-primary'>${product.price}</p>
            </div>

            <div className='bg-yellowish w-full flex items-center py-1 px-2 rounded-lg justify-around'>
                <button onClick={() => addToCart(product)} className={`${isProductInCart(product.id) ? 'hidden' : 'flex items-center justify-center'} w-full`} > 
                    <span className="py-[5px] px-2 bg-white hover:bg-yellowish_hover rounded-full transition-all duration-200 ease-in-out">
                    <AddShoppingCart style={{fontSize: '16px'}} />
                    </span>
                </button>
                <div className={`${isProductInCart(product.id) ? 'flex items-center justify-around gap-3' : 'hidden'} w-full`} >
                    <Button onClick={() => decreaseProductQuantity(product.id)} icon1={<Remove/>} classes="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full" />
                    <p>{getProductQuantity(product.id)}</p>
                    <Button onClick={() => increaseProductQuantity(product.id)} icon1={<Add/>} classes="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;