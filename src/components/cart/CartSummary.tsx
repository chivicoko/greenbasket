'use client';

import { useCart } from '@/context/CartContext';
import React from 'react'
import Button from '../button/Button';

const CartSummary = () => {    
    const { totalCount, getTotalPrice } = useCart();

  return (
    <div className="w-1/4 h-fit p-4 border rounded-xl">
        <h2 className="font-semibold text-2xl text-[#064f38] py-2">Summary</h2>
        <div className="border-y py-4 space-y-2">
            <p className="text-lg text-theme flex items-center justify-between"><span className="font-semibold">Subtotal: </span> ${parseInt(getTotalPrice()).toFixed(2)}</p>
            <p className="text-lg text-theme flex items-center justify-between"><span className="font-semibold">Delivery: </span> ${ (totalCount > 0 ? 1000.00 : 0.00).toFixed(2) }</p>
        </div>
        <p className="border-b py-2 text-lg flex items-center justify-between"><span className="font-semibold">Total: </span> ${(parseInt(getTotalPrice()) + (totalCount > 0 ? 1000.00 : 0.00)).toFixed(2)}</p>

        <div className="my-8">
            <p className='text-theme'>Do you have a discount?</p>
            <div className="w-full text-theme flex items-center gap-2">
                <input type="text" placeholder="discount code" className="w-2/3 border-2 placeholder:uppercase rounded-lg py-2 px-1 border-theme" />
                <Button btnText='apply' classes="bg-btn hover:bg-btn-hover py-[8px] lg:py-[8px] px-[16px] lg:px-[24px] capitalize font-bold rounded-md text-lg text-theme hover:cursor-pointer shadow-md w-1/3" />
            </div>
        </div>
        <Button btnText='Checkout' classes="w-full flex items-center justify-center gap-3 bg-btn hover:bg-btn-hover mt-2 font-bold rounded-md text-lg text-theme py-[11px] px-[27px] hover:cursor-pointer shadow-md" />
    </div>
  )
}

export default CartSummary;