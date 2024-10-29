import Loading from '@/app/loading';
import { getProducts } from '@/lib/api';
import { Product } from '@/utils/types';
import { Add, Remove } from '@mui/icons-material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Products: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const getData = async () => {
        const products = await getProducts();
        setProducts(products);
        setLoading(false);
      };
      getData();
    }, []);
    
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 py-3 md:py-5 px-2 md:px-6 ">
        {
          loading ? <Loading/> : 
          products.map(product => 
            <div key={product.id} className="bennetCurve2 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl">
              <div className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                <Image
                  // src={product.img}
                  src={product.image}
                  alt={`${product.name} preview`}
                  fill
                  className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <span className='px-4 w-full'>
                <h2 className='text-center text-lg font-semibold text-theme'>{product.name}</h2>
                <p className='text-center text-sm text-gray-500 font-semibold'>120gm</p>
                <p className='text-center text-xl py-3 font-bold text-theme'>${product.price}</p>
                <div className='bg-[#cee1af90] w-full flex items-center py-1 rounded-lg justify-around'>
                  <button className='p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full'><Remove/></button>
                  <button className='p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full'><Add/></button>
                </div>
              </span>
            </div>
          )
        }
    </section>
  )
}

export default Products;