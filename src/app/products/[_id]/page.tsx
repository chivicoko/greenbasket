"use client";

import Button from '@/components/button/Button';
import CountDownTimer from '@/components/CountDownTimer';
import DiscountBadge from '@/components/DiscountBadge';
import DiscountCardTwo from '@/components/DiscountCardTwo';
import WeeklyBestSellingProducts from '@/components/WeeklyBestSellingProducts';
import { useCart } from '@/context/CartContext';
import { useUserForm } from '@/context/UserFormContext';
import { INITIAL_PRODUCT_DATA, PRODUCT } from '@/utils/data';
import { Product2 } from '@/utils/types';
import { Add, AddShoppingCart, FavoriteBorder, Remove, Star, StarHalf, StarOutline, Storefront } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// import { getProductById } from '@/lib/api';
// import { Product } from '@/utils/types';
// import { ArrowBack } from '@mui/icons-material';
// import Loading from '@/app/loading';

const SingleProduct = () => {  
  const [product, setProduct] = useState<Product2>(INITIAL_PRODUCT_DATA); // Single product
  // const [currentImage, setCurrentImage] = useState<string>('/images/spinach.jpeg');
  const {addToCart, isProductInCart, increaseProductQuantity, decreaseProductQuantity, getProductQuantity} = useCart();
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');

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

  useEffect(() => {
    setProduct(PRODUCT);
  }, []);
  
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const pathname = usePathname();

  // console.log("Params: ", params._id);
  // console.log("searchParams: ", searchParams);
  // console.log("pathname: ", pathname);

  // const handleProductImagesViews = (id: number, image: string) => {
  //   if (id) {
  //     setCurrentImage(image);
  //   }
  // }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatPrice = (price: string | number): { integerPart: number; decimalPart: number } => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  
    if (isNaN(numericPrice)) {
      return { integerPart: 0, decimalPart: 0 };
    }
  
    const [integerPart, decimalPart] = numericPrice.toFixed(2).split('.');
  
    return { 
      integerPart: parseInt(integerPart, 10), 
      decimalPart: parseInt(decimalPart, 10) 
    };
  };

  return (
    <section className='px-4 md:px-[85px] lg:px-[60px] xl:px-[85px] md:pt-1'>
      <div>
        <div className='mt-2 p-4 sm:p-10 md:p-16 flex flex-col xl:flex-row items-center justify-start gap-16 md:gap-28 bg-white rounded-xl md:rounded-3xl'>
          <div className='flex flex-col items-center justify-between gap-4'>
            <div className='relative rounded-lg mt-6 md:mt-auto p-3 md:p-6 bg-zinc-50 h-64 w-64 md:h-96 md:w-96 flex items-center justify-center'>
              <DiscountBadge discountPercentage={product.discountPercentage} />
              {
                product.thumbnail && 
                <div className="relative w-44 h-44 md:w-64 md:h-64">
                  <Image
                    src={product.thumbnail}
                    alt="product image"
                    fill
                    className="object-cover rounded-lg md:hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              }
            </div>

            <div className="flex items-center gap-4">
              {
                product.images && product.images.map((img, index) => {
                  return(
                    <div key={index} className='rounded-lg p-1 md:p-4 bg-zinc-50 flex items-center justify-center cursor-pointer'>
                    {/* <div key={index} onClick={() => handleProductImagesViews(index, img)} className='rounded-lg p-1 md:p-4 bg-zinc-50 flex items-center justify-center cursor-pointer'> */}
                      <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <Image
                          src={img}
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
              <div className="w-full self-start flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <CountDownTimer/>

                  <p className='text-sm text-gray-400 my-2 font-semibold'>Bevmo Grocery</p>
                  <h1 className='text-primary text-2xl md:text-3xl font-semibold'>{product.title}</h1>
                  
                  <div className="flex items-center gap-3 pt-2 pb-3 flex-wrap">
                    <span className='text-yellow-500'>
                      <Star/><Star/><Star/><StarHalf/><StarOutline/>
                    </span>
                    <span className='flex items-center gap-1 self-end flex-wrap'>
                      <span className='text-primary text-sm'>{product.rating} Rating</span>
                      <span className='text-xs text-gray-500'>({product.reviews?.length} reviews)</span>
                    </span>
                  </div>

                  <p className='text-3xl font-semibold text-primary'>${formatPrice(product.price).integerPart}.<sup>{formatPrice(product.price).decimalPart}</sup></p>
                </div>
                
                <div className="self-center space-y-1">
                  <div className="relative size-40">
                    <Image
                      src={product.meta.qrCode}
                      alt="QR Code"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-center">{product.meta.barcode}</p>
                </div>
              </div>

              <div className="flex flex-col gap-8 border-y md:border-y lg:border-y-0 xl:border-y border-l-0 lg:border-l xl:border-l-0 pl-0 lg:pl-3 xl:pl-0 py-6 text-xs md:text-sm">
                <div className="flex items-center gap-4 md:gap-7 flex-wrap">
                  {/* <button onClick={() => addToCart(product)} className={`${isProductInCart(product.id) ? 'hidden' : 'flex items-center justify-center'} w-full`} > 
                    <span className="py-[5px] px-2 bg-white hover:bg-yellowish_hover rounded-full transition-all duration-200 ease-in-out">
                      <AddShoppingCart style={{fontSize: '16px'}} />
                    </span>
                  </button> */}
                  <Button onClick={() => addToCart(product)} btnText="Add to cart" icon1={<AddShoppingCart className='h-4 w-4 md:h-5 md:w-5' />} classes={`${isProductInCart(product.id) ? 'hidden' : 'flex items-center justify-center gap-2 md:gap-3'} bg-[#cee1af90] text-primary font-bold rounded-full py-[11px] px-[27px] hover:cursor-pointer shadow-md hover:shadow-sm`} />
                  <div className={`${isProductInCart(product.id) ? 'flex items-center justify-around gap-3' : 'hidden'} bg-yellowish py-[6px] px-[20px] rounded-full shadow-md`} >
                    <Button onClick={() => decreaseProductQuantity(product.id)} icon1={<Remove/>} classes="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full" />
                    <p className='text-2xl w-10 text-center'>{getProductQuantity(product.id)}</p>
                    <Button onClick={() => increaseProductQuantity(product.id)} icon1={<Add/>} classes="p-1 bg-white hover:bg-yellowish_hover text-primary rounded-full" />
                  </div>
                  {/* <div className='bg-yellowish w-full flex items-center py-1 px-2 rounded-lg justify-around'>
                  </div> */}
                  <Button btnText="Buy with Visa Apple Pay" classes="gap-2 bg-btn hover:bg-btn-hover font-bold rounded-full text-primary py-[11px] px-[27px] hover:cursor-pointer shadow-md hover:shadow-sm" />
                </div>

                <div className="flex items-center gap-4 md:gap-7 flex-wrap">
                  <Button btnText="Add to favorite" icon1={<FavoriteBorder />} classes="gap-2 md:gap-3 font-bold hover:cursor-pointer underline uppercase md:border-r md:pr-7" />
                  <Button btnText="Compare with other vendors" icon1={<Storefront />} classes="gap-2 md:gap-3 font-bold hover:cursor-pointer underline" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className='text-primary text-sm font-semibold'>SKU: {product.sku}</p>
              <p className='text-primary text-sm font-semibold'>Category: <Link href='/products' className='capitalize underline'>{product.category}</Link></p>
              <div className="flex items-center gap-4 my-2 text-xs md:text-sm font-semibold">
                <span className='self-start'>Tags: </span>
                <ul className='flex items-center gap-3 flex-wrap'>
                  {
                    product.tags && product.tags.map((tag, index) => {
                      return(
                        <li key={index} className='capitalize'>{tag},</li>
                      )
                    })
                  }
                </ul>
              </div>
              <p className='text-sm'>{product.description}</p>
            </div>
          </div>

        </div>

        <div className='mt-2 p-4 sm:p-10 md:p-16 bg-white rounded-xl md:rounded-3xl'>
          <div className="flex items-center gap-y-2 gap-x-6 flex-wrap">
            <p className='font-semibold'>
              <span className='text-primary text-base'>Warranty Information: </span> <span className='text-sm'>{product.warrantyInformation}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Shipping Information: </span> <span className='text-sm'>{product.shippingInformation}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Availability Status: </span> <span className='text-sm'>{product.availabilityStatus}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Return Policy: </span> <span className='text-sm'>{product.returnPolicy}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Minimum Order Quantity: </span> <span className='text-sm'>{product.minimumOrderQuantity}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Width: </span> <span className='text-sm'>{product.dimensions.width}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Height: </span> <span className='text-sm'>{product.dimensions.height}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Depth: </span> <span className='text-sm'>{product.dimensions.depth}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Created At: </span> <span className='text-sm'>{formatDate(product.meta.createdAt)}</span>
            </p>
            <p className='text-sm font-semibold'>
              <span className='text-primary text-base'>Updated At: </span> <span className='text-sm'>{formatDate(product.meta.updatedAt)}</span>
            </p>
          </div>

          <aside className="productReview pt-6 md:pt-10 w-full">
            <h2 className="text-center text-xl md:text-2xl mb-4 font-bold">Reviews</h2>
            
            <ul className="flex items-center justify-center gap-3 flex-wrap">
              {product.reviews.map((review, index) => (
                <li key={index} className="border-2 border-primary rounded-lg pt-2 px-2 w-1/3 max-w-sm">
                  <div className="flex flex-col items-center justify-between border-b border-primary">
                    <p className="text-xl md:text-2xl">{review.reviewerName}</p>
                    <p className="text-sm">({review.reviewerEmail})</p>
                  </div>
                  <p className="text-base my-4">{review.comment}</p>
                  <div className="flex items-center justify-between border-t border-primary">
                    <p className="text-base">Rating: {review.rating}</p>
                    <p className="text-base">{formatDate(review.date)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>

      </div>

      <DiscountCardTwo/>

      <WeeklyBestSellingProducts/>
    </section>
  );
}

export default SingleProduct;