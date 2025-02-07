"use client";

import React, { useState } from 'react'
import { DateRange, KeyboardArrowDown, Logout } from '@mui/icons-material';
import ProductTable from '@/components/admin/ProductTable';
import { useUserForm } from '@/context/UserFormContext';
import { useRouter } from 'next/navigation';

const Products = () => {
  const [error, setError] = useState<string | null>(null);
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');

  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className="headArea flex flex-col md:flex-row items-center justify-between">
            <h1 className='text-primary text-xl font-bold'>Products</h1>
            <div className='flex items-center flex-col md:flex-row justify-between gap-2 md:gap-3 text-xs mt-3 md:mt-auto'>
                <div className='p-2 border rounded-[4px] flex items-center justify-between'>
                    <div className="flex items-center justify-between gap-1 border-r pr-2">
                        <span className='text-primary'><DateRange className='h-4 w-4' /></span>
                        <span>Date Range</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 pl-2">
                        <span>Nov 1, 2022 - Nov 7, 2022</span>
                        <span className='text-primary'><KeyboardArrowDown className='h-5 w-5' /></span>
                    </div>
                </div>
                <button className="w-full md:w-auto flex items-center justify-center border-0 gap-2 text-primary hover:text-white bg-[#F0F4F4] hover:bg-primary rounded-[4px] py-[10px] px-[32px]">
                    <span className='-rotate-90'><Logout className='h-4 w-4' /></span>
                    <span>Export</span>
                </button>
            </div>
        </div>

        <div className='mt-6'>
            <ProductTable error={error} />
        </div>
    </section>
  )
}

export default Products