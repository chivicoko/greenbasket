"use client";

import React, { useState } from 'react'
import { DateRange, KeyboardArrowDown, Logout } from '@mui/icons-material';
import ProductTable from '@/components/admin/ProductTable';

const Products = () => {
  const [error, setError] = useState<string | null>(null);

  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className="headArea flex flex-col md:flex-row items-center justify-between">
            <h1 className='text-[#064f38] text-xl font-bold'>Products</h1>
            <div className='flex items-center flex-col md:flex-row justify-between gap-2 md:gap-3 text-xs mt-3 md:mt-auto'>
                <div className='p-2 border rounded-[4px] flex items-center justify-between'>
                    <div className="flex items-center justify-between gap-1 border-r pr-2">
                        <span className='text-[#064f38]'><DateRange className='h-4 w-4' /></span>
                        <span>Date Range</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 pl-2">
                        <span>Nov 1, 2022 - Nov 7, 2022</span>
                        <span className='text-[#064f38]'><KeyboardArrowDown className='h-5 w-5' /></span>
                    </div>
                </div>
                <button className="w-full md:w-auto flex items-center justify-center border-0 gap-2 text-[#064f38] hover:text-white bg-[#F0F4F4] hover:bg-[#064f38] rounded-[4px] py-[10px] px-[32px]">
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