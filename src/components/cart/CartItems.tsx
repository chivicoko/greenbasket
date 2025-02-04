'use client';

import { useCart } from '@/context/CartContext';
import { DeleteOutline } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CartItems = () => {
  const { cart, removeFromCart, clearCart, totalCount, getProductQuantity, increaseProductQuantity, decreaseProductQuantity } = useCart();

  return (
    <div className="w-3/4">
        {totalCount > 0 ?
            <div className="w-full space-y-6">
            {cart.map(product => (
                <div
                key={product.id}
                className="w-full rounded-2xl border p-2 flex items-center gap-12"
                >
                <div className="w-1/4 text-[#6A7E8A] text-[15px] whitespace-nowrap">
                    <Link href={`/products/${product.id}`} className="relative w-60 h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                    <Image
                        src={product.thumbnail || '/src/assets/images/imagePlaceholder.jpeg'}
                        alt={`${product.title} preview`}
                        fill
                        className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    </Link>
                </div>
        
                <div className="w-3/4 flex flex-col justify-center items-start gap-2">
                    <p className="text-xl">
                    <Link href="`product-details/${product.id}`" className="text-[#432361] font-semibold whitespace-wrap w-full">{ product.title }</Link>
                    </p>
                    
                    <p className="whitespace-wrap text-[15px]"><strong>Description: </strong> { product.description }</p>
        
                    <div className="flex items-center gap-12">
                    <p className="whitespace-wrap text-[15px]"><strong>Price: </strong> { product.price }</p>
                    <p className="whitespace-wrap text-[15px] capitalize"><strong>Category: </strong> { product.category }</p>
                    </div>
        
                    <div className="flex items-center gap-12">
                    <p className="whitespace-wrap text-[15px]"><strong>Quantity: </strong> { product.quantity }</p>
                    <p className="whitespace-wrap text-[15px]"><strong>Rate: </strong> { 'product.rating' } ({ 'product.rating' })</p>
                    </div>
        
                    <div className="w-full flex items-center gap-3 justify-between mt-4 pr-4">
                    <div className="flex items-center justify-between gap-2 px-2">
                        <button onClick={() => decreaseProductQuantity(product.id)} className="px-2 pb-1 flex items-center justify-center hover:bg-neutral-200 rounded-full transition-all duration-200 ease-in-out text-3xl">-</button>
                        <span className="p-2 flex items-center justify-center bg-[#432361] text-white rounded-full transition-all duration-200 ease-in-out text-2xl">{ getProductQuantity(product.id) }</span>
                        <button onClick={() => increaseProductQuantity(product.id)} className="px-2 pb-1 flex items-center justify-center hover:bg-neutral-200 rounded-full transition-all duration-200 ease-in-out text-3xl">+</button>
                    </div>
        
                    <button onClick={() => removeFromCart(product.id)} className="w-fit whitespace-nowrap py-2 px-4 flex items-center justify-center gap-3 text-white bg-red-700 hover:bg-red-600 rounded-md transition-all duration-200 ease-in-out">
                        <span className=""><DeleteOutline /></span>
                        <span className="font-semibold">Remove from cart</span>
                    </button>
                    </div>

                </div>
                </div>
            ))}

            <button v-if="cartItems.length > 0" onClick={clearCart} className="py-1 px-4 flex items-center justify-center text-white bg-red-700 hover:bg-red-600 rounded-md transition-all duration-200 ease-in-out text-lg font-semibold">
                Clear cart
            </button>
            </div>
        :
            <div className="w-full">
            <p className="text-center text-xl font-semibold">No products in the cart at the moment</p>
            </div>
        }
    
    </div>
  )
}

export default CartItems;