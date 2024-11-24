"use client";

import Cart from '@/components/Cart';
import React from 'react'

const ProductsCart = () => {
//   const [error, setError] = useState<string | null>(null);

  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className='mt-6'>
            <Cart />
        </div>
    </section>
  )
}

export default ProductsCart;