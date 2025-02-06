import Loading from '@/app/loading';
import { getProducts } from '@/lib/api';
import { Product } from '@/utils/types';
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import FullPagination from './pagination/FullPagination';
import ButtonLink from './button/ButtonLink';
import { ArrowForward } from '@mui/icons-material';
import Button from './button/Button';

const Products: React.FC = () => {
  const [gridView, setGridView] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const router = useRouter();
  const pathName = usePathname();

  // Load cart from localStorage on mount
  useEffect(() => {
    const productCart = localStorage.getItem('cart');
    if (productCart) {
      setCart(JSON.parse(productCart));
    }
  }, []);

  // Fetch products data
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const products = await getProducts();
        setProducts(products);
        setTotalProducts(products.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Update rows per page
  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // Refresh the page
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
            currentProducts.map(product =>
              <ProductCard key={product._id} product={product} />
              // <ProductCard key={product._id} product={product} addToCart={addToCart} />
            )
          }
        </div>

        {pathName === '/products' &&
          <FullPagination
            productsPerPage={productsPerPage}
            handleRowsPerPageChange={handleRowsPerPageChange}
            totalProducts={totalProducts}
            totalPages={totalPages}
            paginate={paginate}
            currentPage={currentPage}
          />
        }

      </section>
    : 
    <div className='w-full flex flex-col items-center gap-4'>
      <p>Products could not be fetched at this time</p>
      <Button onClick={refreshPage} btnText='Refresh Page' classes="flex items-center gap-3 bg-secondary hover:bg-secondary_hover font-bold rounded-xl text-primary py-[11px] px-[27px] hover:cursor-pointer shadow-md" />
    </div>
  );
}

export default Products;
