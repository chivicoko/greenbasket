"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getProductById } from '@/lib/api';
import { Product } from '@/utils/types';
import Loading from '../../../loading';

const SingleProduct = () => {  
  const [product, setProduct] = useState<Product | null>(null); // Single product

  const { _id } = useParams();
  
  // Ensure params.id is a string
  // const productId = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (_id) {
      const getData = async () => {
        try {
          const product = await getProductById(_id); // Use the string ID
          // console.log('Product:', product);
          setProduct(product);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      getData();
    }
  }, [_id]);

  // Check if product is null (data hasn't been fetched yet)
  if (!product) {
    return <Loading/>;
    // return <p>Loading...</p>;
  }

  return (
    <section className='px-4 md:px-[85px] pt-8'>
      <div className='mt-6 flex flex-col md:flex-row items-center justify-start gap-10'>
        <div className="relative w-64 h-64">
          <Image
            src={product.image}
            alt={`${product.name} preview`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="text">
          <h1 contentEditable className='text-[#064f38] text-2xl md:text-3xl font-bold'>{product.name}</h1>
          <p>{product.description}</p>
          <div className="flex justify-between gap-6">
            <p className='font-semibold my-4'>{product.description}</p>
            <p className='font-semibold'>Price: ${product.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
