"use client";

import Button from '@/components/button/Button';
import CountDownTimer from '@/components/CountDownTimer';
import DiscountBadge from '@/components/DiscountBadge';
import DiscountCard2 from '@/components/DiscountCard2';
import { categories, extraImages } from '@/utils/data';
import { AddShoppingCart, FavoriteBorder, Star, StarHalf, StarOutline, Storefront } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
// import { useParams } from 'next/navigation';
import React, { useState } from 'react';
// import { getProductById } from '@/lib/api';
// import { Product } from '@/utils/types';
// import { ArrowBack } from '@mui/icons-material';
// import Loading from '@/app/loading';

const SingleProduct = () => {  
  // const [product, setProduct] = useState<Product | null>(null); // Single product
  const [currentImage, setCurrentImage] = useState<string>('/images/spinach.jpeg');

  // const { _id } = useParams();
  
  // Ensure params.id is a string
  // const productId = Array.isArray(params.id) ? params.id[0] : params.id;

  // useEffect(() => {
  //   if (_id) {
  //     const getData = async () => {
  //       try {
  //         const product = await getProductById(_id);
  //         // console.log('Product:', product);
  //         setProduct(product);
  //       } catch (error) {
  //         console.error('Error fetching product:', error);
  //       }
  //     };
  //     getData();
  //   }
  // }, [_id]);

  // Check if product is null (data hasn't been fetched yet)
  // if (!product) {
    // return <Loading />;
    // return <p>Loading...</p>;
  // }


  const handleProductImagesViews = (id: number, image: string) => {
    if (id) {
      setCurrentImage(image);
    }
  }

  return (
    <section className='px-4 md:px-[85px] lg:px-[60px] xl:px-[85px] md:pt-1'>
      <div className='mt-2 p-4 sm:p-10 md:p-16 flex flex-col xl:flex-row items-center justify-start gap-16 md:gap-28 bg-white rounded-xl md:rounded-3xl'>
        <div className='flex flex-col items-center justify-between gap-4'>
          <div className='relative rounded-lg p-3 md:p-6 bg-zinc-50 h-64 w-64 md:h-96 md:w-96 flex items-center justify-center'>
            <DiscountBadge/>
            
            <div className="relative w-44 h-44 md:w-64 md:h-64">
              <Image
                src={currentImage}
                alt={`Samsung Galaxy S50's preview`}
                fill
                className="object-cover rounded-lg md:hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {
              extraImages.map(extraImage => {
                return(
                  <div key={extraImage.id} onClick={() => handleProductImagesViews(extraImage.id, extraImage.img)} className='rounded-lg p-1 md:p-4 bg-zinc-50 flex items-center justify-center cursor-pointer'>
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                      <Image
                        src={extraImage.img}
                        alt="product extra preview"
                        fill
                        className="object-cover rounded-lg hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='flex flex-col gap-6 self-start'>
          <div className="flex flex-col lg:flex-row xl:flex-col gap-6 lg:gap-3 xl:gap-6">
            <div className="self-start">
              <CountDownTimer/>

              <p className='text-sm text-gray-400 my-2 font-semibold'>Bevmo Grocery</p>
              <h1 className='text-[#064f38] text-2xl md:text-3xl font-semibold'>Samsung Galaxy S50</h1>
              
              <div className="flex items-center gap-3 pt-2 pb-3 flex-wrap">
                <span className='text-yellow-500'>
                  <Star/><Star/><Star/><StarHalf/><StarOutline/>
                </span>
                <span className='flex items-center gap-1 self-end flex-wrap'>
                  <span className='text-[#064f38] text-sm'>4.5 Rating</span>
                  <span className='text-xs text-gray-500'>(15 reviews)</span>
                </span>
              </div>

              <p className='text-3xl font-semibold text-[#064f38]'>$34.<sup>55</sup></p>
            </div>

            <div className="flex flex-col gap-8 border-y md:border-y lg:border-y-0 xl:border-y border-l-0 lg:border-l xl:border-l-0 pl-0 lg:pl-3 xl:pl-0 py-6 text-xs md:text-sm">
              <div className="flex items-center gap-4 md:gap-7 flex-wrap">
                <Button btnText="Add to cart" icon1={<AddShoppingCart className='h-4 w-4 md:h-5 md:w-5' />} classes="gap-2 md:gap-3 bg-[#cee1af90] text-[#064f38] font-bold rounded-full py-[11px] px-[27px] hover:cursor-pointer shadow-md hover:shadow-sm" />
                <Button btnText="Buy with Visa Apple Pay" classes="gap-2 bg-btn hover:bg-btn-hover font-bold rounded-full text-theme py-[11px] px-[27px] hover:cursor-pointer shadow-md hover:shadow-sm" />
              </div>

              <div className="flex items-center gap-4 md:gap-7 flex-wrap">
                <Button btnText="Add to favorite" icon1={<FavoriteBorder />} classes="gap-2 md:gap-3 font-bold hover:cursor-pointer underline uppercase md:border-r md:pr-7" />
                <Button btnText="Compare with other vendors" icon1={<Storefront />} classes="gap-2 md:gap-3 font-bold hover:cursor-pointer underline" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className='text-[#064f38] text-sm font-semibold'>SKU: MB3442</p>
            <div className="flex items-center gap-4 my-2 text-xs md:text-sm font-semibold">
              <span className='self-start'>Categories: </span>
              <ul className='flex items-center gap-3 flex-wrap'>
                {
                  categories.slice(0,5).map(category => {
                    return(
                      <li key={category.id} className='underline'><Link href='/products'>{category.name},</Link></li>
                    )
                  })
                }
              </ul>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, numquam ut consequuntur alias, et labore veniam esse velit distinctio id, fugiat atque assumenda. Tenetur, modi.</p>
          </div>
        </div>

      </div>

      <DiscountCard2/>
    </section>

    // <section className='px-4 md:px-[85px] md:pt-1'>
    //   <div className='mt-12 flex flex-col md:flex-row items-center justify-start gap-10'>
    //     <div className='rounded-lg p-1 border-2 border-dashed border-[#064f38]'>
    //       <div className="relative w-64 h-64">
    //         <Image
    //           src={product.image}
    //           alt={`${product.name} preview`}
    //           fill
    //           className="object-cover rounded-lg"
    //           sizes="(max-width: 768px) 100vw, 50vw"
    //         />
    //       </div>
    //     </div>

    //     <div className="text">
    //       <h1 className='text-[#064f38] text-2xl md:text-3xl font-bold'>{product.name}</h1>
    //       <p>{product.description}</p>
    //       <p className='font-semibold'>Price: ${product.price}</p>
    //     </div>
    //   </div>
    // </section>
  );
}

export default SingleProduct;