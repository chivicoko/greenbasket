"use client";

import React from 'react'
import Products from '@/components/Products';

const ProductsPage = () => {
//   const [error, setError] = useState<string | null>(null);

  return (
    <section className='xs:px-3 sm:px-6 md:px-[64px] xl:px-[85px] pt-8'>
      <div className='mt-6'>
        <Products />
      </div>
    </section>
  )
}

export default ProductsPage;