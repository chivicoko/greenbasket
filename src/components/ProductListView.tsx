'use client';

import { useCart } from '@/context/CartContext';
import { tableHead } from '@/utils/data'
import { Product2 } from '@/utils/types'
import { Add, AddShoppingCart, Remove } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './button/Button';

interface ProductViewProps {
  products: Product2[],
}

const ProductListView = ({products}: ProductViewProps) => {
  const {addToCart, isProductInCart, increaseProductQuantity, decreaseProductQuantity, getProductQuantity} = useCart();

  return (
    <div className="w-full overflow-x-scroll custom-scrollbar">
        <table className="min-w-full custom-scrollbar">
            <thead className="bg-transparent rounded-xl">
                <tr className="border bg-neutral-300 rounded-[4px]">
                    {tableHead.map(item => (
                    <th key="item.id" className={`${item.title === 'Action' ? 'text-center' : 'text-left'} pl-6 py-3 text-[#064f38] uppercase text-xs font-bold tracking-wider`}>{ item.title }</th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg- divide-y-[.8rem] divide-y-transparent">
                {products.map(product => (

                    <tr
                        key={product.id}
                        className="rounded-[4px] my-2"
                    >
                        <td className="relative pl-6 py-2 text-[15px] whitespace-nowrap w-2">{ product.id }</td>
                        <td className="pl-6 py-2 w-2">
                            <Link href={`/products/${product.id}`} className="relative block size-12 cursor-pointer">
                                <Image
                                    src={product.thumbnail || '/images/imagePlaceholder.jpeg'}
                                    alt={`${product.title} preview`}
                                    fill
                                    className="object-contain rounded-full"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </Link>
                        </td>
                        <td className="relative pl-6 py-2 text-[15px] whitespace-nowrap w-2">
                            <Link href="`product-details/${product.id}`" className="text-[#064f38] font-semibold">{ product.title }</Link>
                        </td>
                        <td className="relative pl-6 py-2 text-[15px] whitespace-nowrap w-2">{ product.price }</td>
                        <td className="relative pl-6 py-2 text-[15px] whitespace-nowrap w-2">{ product.category }</td>
                        <td className="relative pl-6 text-[15px] whitespace-nowrap w-2">
                          <div className='bg-[#cee1af90] w-full md:w-[80%] mx-auto flex items-center py-1 px-2 rounded-lg justify-around'>
                            <button onClick={() => addToCart(product)} className={`${isProductInCart(product.id) ? 'hidden' : 'flex items-center justify-center'} w-full`} > 
                              <span className="py-[5px] px-2 bg-white hover:bg-[#cee9a490] rounded-full transition-all duration-200 ease-in-out">
                                <AddShoppingCart style={{fontSize: '16px'}} />
                              </span>
                            </button>
                            <div className={`${isProductInCart(product.id) ? 'flex items-center justify-around gap-3' : 'hidden'} w-full`} >
                              <Button onClick={() => decreaseProductQuantity(product.id)} icon1={<Remove/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                              <p>{getProductQuantity(product.id)}</p>
                              <Button onClick={() => increaseProductQuantity(product.id)} icon1={<Add/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                            </div>
                          </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductListView;