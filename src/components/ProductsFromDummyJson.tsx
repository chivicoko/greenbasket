"use client";

import { ArrowForward } from '@mui/icons-material';
import ButtonLink from './button/ButtonLink';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Product2 } from '@/utils/types';
import { getDummyJsonProducts } from '@/lib/api';
import FullPagination from './pagination/FullPagination';
import Loading from '@/app/loading';
import ProductListView from './ProductListView';
import ProductGridView from './ProductGridView';
import ViewButton from './ViewButton';

const ProductsFromDummyJson: React.FC = () => {
  const [currentProducts, setCurrentProducts] = useState<Product2[]>([]);
  const pathName = usePathname();

  const [gridView, setGridView] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product2[]>([]);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    if (pathName !== '/dummyjson-products') {
      setCurrentProducts(products.slice(0, 5));
    }
  },[pathName, products]);
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await getDummyJsonProducts();
        const products = res.products;
        setProducts(products);
        // console.log(products);
        setTotalProducts(products.length);
      } catch (error) {
        console.error('Error fetching products:', error);
        // setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsForPagination = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const calculatedProducts = pathName !== '/dummyjson-products' ? currentProducts : currentProductsForPagination;

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(totalProducts < 10 ? totalProducts : Number(event.target.value));
    // setProductsPerPage(products.length < Number(event.target.value) ? products.length : Number(event.target.value));
    setCurrentPage(1);
  };
    
  if (loading) return <Loading />;
    
  return (
    <div className={`${pathName !== '/dummyjson-products' ? 'bg-[#fffbeb]' : ''} w-full pt-12 pb-20 px-4 lg:px-8 xl:px-20`}>
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <h3 className='text-xl lg:text-3xl mx-auto md:mx-0 font-bold text-[#064f38]'>{pathName === '/' ? 'From DummyJson API' : 'Products from DummyJson API'}</h3>
        <div className="w-full md:w-auto flex items-center justify-between gap-6 flex-wrap">
          <ViewButton gridView={gridView} setGridView={setGridView} />
          {pathName !== '/dummyjson-products' ? 
          <ButtonLink url='/dummyjson-products' btnText='See more' classes='text-orange-950 font-semibold gap-2 group' icon2={<ArrowForward className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1' />}  />
          : null
          }
        </div>
      </div>

      {gridView ?
        <ProductGridView products={calculatedProducts} /> 
        :
        <ProductListView products={calculatedProducts} /> 
      }

      {pathName === '/dummyjson-products' &&
        <FullPagination
          productsPerPage={productsPerPage}
          handleRowsPerPageChange={handleRowsPerPageChange}
          totalProducts={totalProducts}
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
      }
    </div>
  )
}

export default ProductsFromDummyJson;