"use client";

import { East } from '@mui/icons-material';
import ButtonLink from './button/ButtonLink';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Product2 } from '@/utils/types';
import ViewButton from './ViewButton';
import ProductGridView from './ProductGridView';
import ProductListView from './ProductListView';
import { getDummyJsonProducts } from '@/lib/api';
import Loading from '@/app/loading';

const ProductsJustForYou: React.FC = () => {
  const [products, setProducts] = useState<Product2[]>([]);
  const [gridView, setGridView] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const pathName = usePathname();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await getDummyJsonProducts();
        const products = res.products;
        // if (pathName !== '/products') {
        // }
        setProducts(products.slice(10, 15));
        // console.log(res);
        // console.log(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        // setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [pathName]);

  if (loading) return <Loading />;

  return (
    <div className='bg-[#fffbeb] w-full pt-10 md:pt-16 pb-20 px-4 lg:px-8 xl:px-20'>
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <h3 className='text-xl lg:text-3xl mx-auto md:mx-0 font-bold text-primary'>{pathName === '/' ? 'Just for you' : 'Most selling products'}</h3>
        <div className="w-full md:w-auto flex items-center justify-between gap-6 flex-wrap">
          <ViewButton gridView={gridView} setGridView={setGridView} />
          {pathName !== '/products' ? 
          <ButtonLink url='/products' btnText='See more' classes='text-dark_orange font-semibold gap-2 group' icon2={<East className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1' />}  />
          : null
          }
        </div>
      </div>
      
      {gridView ?
        <ProductGridView products={products} /> 
        :
        <ProductListView products={products} /> 
      }
    </div>
  )
}

export default ProductsJustForYou;