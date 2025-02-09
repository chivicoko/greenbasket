'use client';

import CartItems from '@/components/cart/CartItems';
import CartSummary from '@/components/cart/CartSummary';
import { useCart } from '@/context/CartContext';
// import { useUserForm } from '@/context/UserFormContext';
// import { useRouter } from 'next/navigation';
import React from 'react'

const ProductsCart = () => {
  const { totalCount } = useCart();
  // const {userInfo} = useUserForm();
  // const router = useRouter();
  
  // if(!userInfo) router.push('/users/auth/register');

  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className='mt-6'>
          
          <div className="flex gap-8">
            {totalCount > 0 ?
            <>
              <CartItems />
              <CartSummary/>
            </>
            :
            <div className="w-full">
              <p className="text-center text-xl font-semibold">No products in the cart at the moment</p>
            </div>
            }
          </div>

        </div>
    </section>
  )
}

export default ProductsCart;