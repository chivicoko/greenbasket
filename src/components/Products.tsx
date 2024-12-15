import Loading from '@/app/loading';
import { getProducts } from '@/lib/api';
import { Product } from '@/utils/types';
import { Add, Remove } from '@mui/icons-material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import BasicPagination from './Pagination';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from './button/Button';

const Products: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);

    const router = useRouter();
    const path = usePathname();
    // console.log(path);
    
  // ============== pagination =================
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const products = await getProducts();
        setProducts(products);
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
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(totalProducts < 10 ? totalProducts : Number(event.target.value));
    // setProductsPerPage(products.length < Number(event.target.value) ? products.length : Number(event.target.value));
    setCurrentPage(1);
  };
  // ============== pagination =================

  
  
  const refreshPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.refresh();
  }

  if (loading) return <Loading />;

    
  return (
    products.length > 0 ?
      <section className='py-3 md:py-5 px-2 md:px-6'>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {
              loading ? <Loading/> : 
              currentProducts.map(product => 
                <div key={product.id} className="pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
                  <Link href={`/products/${product._id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                    <Image
                      // src={product.img}
                      src={product.image}
                      alt={`${product.name} preview`}
                      fill
                      className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>

                  <div className='px-4 w-full'>
                    <h2 className='text-center text-lg font-semibold text-theme hover:text-[#bbea70]'>
                      <Link href={`/products/${product._id}`} className="">
                        {product.name}
                      </Link>
                    </h2>
                    <p className='text-center text-sm text-gray-500 font-semibold'>120gm</p>
                    <p className='text-center text-xl py-3 font-bold text-theme'>${product.price}</p>
                    <div className='bg-[#cee1af90] w-full flex items-center py-1 rounded-lg justify-around'>
                      <Button icon1={<Remove/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                      <Button icon1={<Add/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                    </div>
                  </div>
                </div>
              )
            }

        </div>

        {
          path === '/products' &&
          <div className='pagination mt-6 flex flex-col md:flex-row items-center justify-center gap-2'>
            <div className='pages flex items-center justify-between gap-3'>
              <span>Showing</span>

              <div className="select-container">
                <select
                  value={productsPerPage}
                  onChange={handleRowsPerPageChange}
                  className="span"
                >
                  <option value={totalProducts < 10 ? totalProducts : 10}>{totalProducts < 10 ? totalProducts : 10}</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              <span>out of {totalProducts}</span>
            </div>
            <BasicPagination count={totalPages} onPageChange={paginate} currentPage={currentPage} />
          </div>
        }

      </section>
    : 
    <div className='w-full flex flex-col items-center gap-4'>
      <p>Products could not be fetched at this time</p>
      <button onClick={refreshPage} className='flex items-center gap-3 bg-btn hover:bg-btn-hover border border-transparent hover:border-theme font-bold rounded-md text-theme py-[11px] px-[27px] hover:cursor-pointer shadow-md'>
        Refresh Page
      </button>
    </div>
  )
}

export default Products;