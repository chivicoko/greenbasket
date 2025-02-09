"use client";

import React from 'react'
import Products from '@/components/Products';
// import { useUserForm } from '@/context/UserFormContext';
// import { useRouter } from 'next/navigation';

const ProductsPage = () => {
  // const {userInfo} = useUserForm();
  // const router = useRouter();
  
  // if(!userInfo) router.push('/users/auth/register');

  return (
    <section className='xs:px-3 sm:px-6 md:px-[64px] xl:px-[85px] pt-8'>
      <div className='mt-6'>
        <Products />
      </div>
    </section>
  )
}

export default ProductsPage;