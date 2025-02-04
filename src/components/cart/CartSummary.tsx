'use client';

import { useCart } from '@/context/CartContext';
import React from 'react'

const CartSummary = () => {    
    const { totalCount, getTotalPrice } = useCart();

  return (
    <div className="w-1/4 h-fit p-4 border rounded-xl">
        <h2 className="font-semibold text-2xl py-2">Summary</h2>
        <div className="border-y py-4 space-y-2">
        <p className="text-lg flex items-center justify-between"><span className="font-semibold">Subtotal: </span> ${parseInt(getTotalPrice()).toFixed(2)}</p>
        <p className="text-lg flex items-center justify-between"><span className="font-semibold">Delivery: </span> ${ (totalCount > 0 ? 1000.00 : 0.00).toFixed(2) }</p>
        </div>
        <p className="border-b py-2 text-lg flex items-center justify-between"><span className="font-semibold">Total: </span> ${(parseInt(getTotalPrice()) + (totalCount > 0 ? 1000.00 : 0.00)).toFixed(2)}</p>

        <div className="my-8">
        <p>Do you have a discount?</p>
        <div className="w-full flex items-center gap-2">
            <input type="text" placeholder="discount code" className="w-2/3 border-2 placeholder:uppercase rounded-lg py-2 px-1 border-[#783EAD]" />
            <button className="bg-[#783EAD] py-[8px] lg:py-[8px] px-[16px] lg:px-[24px] font-semibold text-white text-xl capitalize rounded-[7px] lg:rounded-[10px] w-1/3">
            apply
            </button>
        </div>
        </div>

        <button className="bg-[#783EAD] py-[8px] lg:py-[12px] px-[16px] lg:px-[24px] font-semibold text-white text-xl rounded-[7px] lg:rounded-[10px] w-full mt-2">
        Checkout
        </button>
    </div>
  )
}

export default CartSummary;