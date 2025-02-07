"use client";

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getProductById } from '@/lib/api';
import { Product } from '@/utils/types';
import Loading from '../../../loading';
import { useUserForm } from '@/context/UserFormContext';
// import { ArrowBack } from '@mui/icons-material';

const SingleProduct = () => {  
  const [product, setProduct] = useState<Product | null>(null);
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');

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
      <div className='w-max px-1 border-b-2 border-primary'>
        <button onClick={()=>router.back()} className='backBtn flex items-center gap-2 font-bold text-black pt-[11px] px-1 hover:cursor-pointer'>
          <div className="userleftArrowIcon relative w-[27px] h-[10px]">
            <Image
              src="/images/Vector-1.svg"
              alt="back icon"
              fill
              className="img object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          Back
        </button>
      </div>

      <div className='mt-12 flex flex-col md:flex-row items-center justify-start gap-10'>
        <div className='rounded-lg p-1 border-2 border-dashed border-primary'>
          <div className="relative w-64 h-64">
            <Image
              src={product.image}
              alt={`${product.name} preview`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="text">
          <h1 contentEditable className='text-primary text-2xl md:text-3xl font-bold'>{product.name}</h1>
          <p>{product.description}</p>
          <p className='font-semibold'>Price: ${product.price}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
