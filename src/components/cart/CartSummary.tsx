'use client';

import { useCart } from '@/context/CartContext';
import React from 'react'
import Button from '../button/Button';
import InputTwo from '../inputs/InputTwo';

const CartSummary = () => {    
    const { totalCount, getTotalPrice } = useCart();

  return (
    <div className="w-full md:w-1/4 h-fit p-4 border border-primary rounded-xl">
        <h2 className="font-semibold text-2xl text-primary py-2">Summary</h2>
        <div className="border-y border-primary py-4 space-y-2">
            <p className="text-lg text-primary flex items-center justify-between"><span className="font-semibold">Subtotal: </span> ${parseInt(getTotalPrice()).toFixed(2)}</p>
            <p className="text-lg text-primary flex items-center justify-between"><span className="font-semibold">Delivery: </span> ${ (totalCount > 0 ? 1000.00 : 0.00).toFixed(2) }</p>
        </div>
        <p className="border-b border-primary py-2 text-lg flex items-center justify-between"><span className="font-semibold">Total: </span> ${(parseInt(getTotalPrice()) + (totalCount > 0 ? 1000.00 : 0.00)).toFixed(2)}</p>

        <div className="my-8">
            <p className='text-primary'>Do you have a discount?</p>
            <div className="w-full text-primary flex items-center gap-2">
                
                <InputTwo classes='w-full' floatingLabel='DISCOUNT CODE' />
                {/* <input type="text" placeholder="discount code" className="w-2/3 border-2 border-secondary placeholder:uppercase rounded-lg py-2 px-1" /> */}
                <Button btnText='apply' classes="bg-secondary hover:bg-secondary_hover py-[8px] lg:py-[9px] px-[16px] lg:px-[24px] capitalize font-bold rounded-xl text-lg text-primary hover:cursor-pointer shadow-md w-1/3" />
            </div>
        </div>
        <Button btnText='Checkout' classes="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-secondary_hover mt-2 font-bold rounded-xl text-lg text-primary py-[11px] px-[27px] hover:cursor-pointer shadow-md" />
    </div>
  )
}

export default CartSummary;