import CartItems from '@/components/cart/CartItems';
import CartSummary from '@/components/cart/CartSummary';
import React from 'react'

const ProductsCart = () => {
  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className='mt-6'>
          
          <div className="flex gap-8">
            <CartItems />
            <CartSummary/>
          </div>

        </div>
    </section>
  )
}

export default ProductsCart;