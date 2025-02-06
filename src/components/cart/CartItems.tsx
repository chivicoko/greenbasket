'use client';

import { useCart } from '@/context/CartContext';
import { Add, DeleteOutline, Remove } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../button/Button';

const CartItems = () => {
  const { cart, removeFromCart, clearCart, getProductQuantity, increaseProductQuantity, decreaseProductQuantity } = useCart();

  return (
    <div className="w-3/4">
        <div className="w-full space-y-6">
            {cart.map(product => (
                <div key={product.id} className="relative w-full rounded-2xl border border-primary p-2 flex items-center gap-12">
                    <p className="absolute top-2 left-2 z-50 bg-dark_orange text-white px-2 rounded-sm text-xs flex items-center justify-center">
                        <Remove/>{ product.discountPercentage }%
                    </p>
                    <Link href={`/products/${product.id}`} className="w-1/4 h-fit mb-4">
                        <div className="relative size-52 self-center cursor-pointer rounded-t-md overflow-hidden text-[#6A7E8A] text-[15px]">
                            <Image
                                src={product.thumbnail || '/src/assets/images/imagePlaceholder.jpeg'}
                                alt={`${product.title} preview`}
                                fill
                                className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </Link>
            
                    <div className="w-3/4 flex flex-col justify-center items-start gap-2">
                        <p className="text-primary text-xl">
                            <Link href={`/products/${product.id}`} className="text-primary hover:underline font-semibold whitespace-wrap w-full">{ product.title }</Link>
                        </p>
                        
                        <p className="whitespace-wrap text-[15px]"><strong>Description: </strong> { product.description }</p>
            
                        <div className="flex items-center gap-12">
                            <p className="whitespace-wrap text-[15px]"><strong>Price: </strong> { product.price }</p>
                            <p className="whitespace-wrap text-[15px] capitalize"><strong>Category: </strong> { product.category }</p>
                        </div>
            
                        <div className="flex items-center gap-12 flex-wrap">
                            <p className="whitespace-wrap text-[15px]"><strong>Quantity: </strong> { product.quantity }</p>
                            <p className="whitespace-wrap text-[15px]"><strong>Rate: </strong> { product.rating }</p>
                            <p className="whitespace-wrap text-[15px]"><strong>Stock: </strong> { product.stock }</p>
                            <p className="whitespace-wrap text-[15px]"><strong>Discount: </strong> { product.discountPercentage }%</p>
                        </div>
            
                        <div className="w-full flex items-center gap-3 justify-between mt-4 pr-4">
                            <div className="flex items-center justify-between gap-6 px-2">
                                <Button onClick={() => decreaseProductQuantity(product.id)} icon1={<Remove className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-btn hover:bg-btn-hover flex items-center justify-center p-2 text-primary rounded-full text-sm shadow-md" />
                                <span className="flex items-center justify-center rounded-full text-primary text-2xl">{ getProductQuantity(product.id) }</span>
                                <Button onClick={() => increaseProductQuantity(product.id)} icon1={<Add className='h-4 w-4 md:h-6 md:w-6' />} classes="bg-btn hover:bg-btn-hover flex items-center justify-center p-2 text-primary rounded-full text-sm shadow-md" />
                            </div>

                            <Button icon1={<DeleteOutline className='h-4 w-4 md:h-6 md:w-6' />} onClick={() => removeFromCart(product.id)} classes="bg-delete hover:bg-delete_hover flex items-center justify-center p-2 text-white rounded-full text-sm shadow-md" />
                        </div>

                    </div>
                </div>
            ))}

            <Button onClick={clearCart} btnText='Clear cart' classes="bg-delete hover:bg-delete_hover py-[8px] lg:py-[8px] px-[16px] lg:px-[24px] capitalize font-bold rounded-xl text-lg text-white hover:cursor-pointer shadow-md w-1/3" />
        </div>
    </div>
  )
}

export default CartItems;