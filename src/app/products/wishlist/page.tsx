'use client';

import WishlistItems from '@/components/wishlist/WishlistItems';
import { useUserForm } from '@/context/UserFormContext';
import { useWishlist } from '@/context/WishlistContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductsWishlist = () => {
  const { totalWishlistCount } = useWishlist();
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');

  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className='mt-6'>
          
          <div className="flex gap-8">
            {totalWishlistCount > 0 ?
            <>
              <WishlistItems />
              {/* <CartSummary/> */}
            </>
            :
            <div className="w-full">
              <p className="text-center text-xl font-semibold">No products in the wishlist at the moment</p>
            </div>
            }
          </div>

        </div>
    </section>
  )
}

export default ProductsWishlist;