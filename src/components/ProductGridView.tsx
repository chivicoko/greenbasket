'use client';

import { Product2 } from '@/utils/types'
import { Add, AddShoppingCart, Favorite, FavoriteBorder, Remove } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button/Button'
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductViewProps {
  products: Product2[],
}

const ProductGridView = ({products}: ProductViewProps) => {
  const {addToCart, isProductInCart, increaseProductQuantity, decreaseProductQuantity, getProductQuantity} = useCart();
  const {toggleWishlistBtn, isProductInWishlist} = useWishlist();

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {
            products.map(product => 
            <div key={product.id} className="relative pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
              <p className="absolute top-2 left-2 z-40 bg-dark_orange text-white px-2 rounded-sm text-xs flex items-center justify-center">
                <Remove/>{ product.discountPercentage }%
              </p>

              <Button onClick={() => toggleWishlistBtn(product)} icon1={isProductInWishlist(product.id) ? <Favorite className="text-red-700" /> : <FavoriteBorder />} classes="absolute top-2 right-2 z-30 flex items-center justify-center rounded-full text-sm" />

              <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={`${product.title} preview`}
                  fill
                  className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>

              <div className='px-4 w-full h-1/2 flex flex-col items-center justify-between'>
                <h2 className='text-center text-lg font-semibold text-primary hover:text-black'>
                  <Link href={`/products/${product.id}`} className="">
                    {product.title}
                  </Link>
                </h2>
                
                <div>
                  <p className='text-center text-sm text-gray-500 font-semibold'>{product.weight}gm</p>
                  <p className='text-center text-xl py-3 font-bold text-primary'>${product.price}</p>
                </div>

                <div className='bg-yellowish w-full flex items-center py-1 px-2 rounded-lg justify-around'>
                  <button onClick={() => addToCart(product)} className={`${isProductInCart(product.id) ? 'hidden' : 'flex items-center justify-center'} w-full`} > 
                    <span className="py-[5px] px-2 bg-white hover:bg-yellowish_hover rounded-full transition-all duration-200 ease-in-out">
                      <AddShoppingCart style={{fontSize: '16px'}} />
                    </span>
                  </button>
                  <div className={`${isProductInCart(product.id) ? 'flex items-center justify-around gap-3' : 'hidden'} w-full`} >
                    <Button onClick={() => decreaseProductQuantity(product.id)} icon1={<Remove/>} classes="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full" />
                    <p>{getProductQuantity(product.id)}</p>
                    <Button onClick={() => increaseProductQuantity(product.id)} icon1={<Add/>} classes="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            )
        }
    </div>
  )
}

export default ProductGridView;