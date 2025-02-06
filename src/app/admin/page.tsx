'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Add } from '@mui/icons-material';
// import { products } from '@/utils/data';
import { Product } from '@/utils/types';
import ProductModal from '@/components/admin/ProductModal';
import { getProducts } from '@/lib/api';
import Loading from '../loading';
import UsageChart from '@/components/admin/UsageChart';
import { UsageHistory } from '@/utils/data';

// export const generateMetadata = {
//     title: "Admin Overview",
//     description: "GreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
// }


const AdminProductForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalMode, setModalMode] = useState<'view' | 'edit'>('view');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    
    const addProduct = (p) => {
        console.log('Adding product',p);
    }


    const updateProduct = (po,p) => {
        console.log('Updating product', po,p);
    }
    
  const handleAddEditProduct = (product?: Product) => {
    setSelectedProduct(product || null);
    setModalMode(product ? 'edit' : 'edit');
    setIsModalOpen(true);
  };

    
  const handleSaveProduct = (product: Product) => {
    if (selectedProduct) {
      updateProduct(selectedProduct._id, product);
    } else {
      addProduct(product);
    }
    setIsModalOpen(false);
  };

  
  useEffect(() => {
    const getData = async () => {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    };
    getData();
  }, []);


  return (
    <section className='px-4 md:px-[85px] pt-8'>
        <div className="headArea flex flex-col md:flex-row items-center justify-between">
            <h1 className='text-primary text-xl font-bold'>Overview</h1>
        </div>

        {
          loading ? <Loading/> : 
          products && products?.length > 0
        ?
        <>
          <div className='py-8 flex flex-col sm:flex-row items-center justify-between flex-wrap gap-4 md:gap-6 lg:gap-10'>
              <div className='bg-[#bbea70] py-6 md:py-4 px-2 md:px-4 w-full flex-1 rounded-lg flex flex-col justify-center items-center gap-2 md:gap-4 h-40'>
                  <span className='text-2xl text-center uppercase font-semibold'>products</span>
                  <span className='text-xl'>{products.length}</span>
              </div>
              <div className='bg-[#7e70ea] py-6 md:py-4 px-2 md:px-4 w-full flex-1 rounded-lg flex flex-col justify-center items-center gap-2 md:gap-4 h-40'>
                  <span className='text-2xl text-center uppercase font-semibold'>Total users</span>
                  <span className='text-xl'>1,500</span>
              </div>
              <div className='bg-[#eaa570] py-6 md:py-4 px-2 md:px-4 w-full flex-1 rounded-lg flex flex-col justify-center items-center gap-2 md:gap-4 h-40'>
                  <span className='text-2xl text-center uppercase font-semibold'>Active Users</span>
                  <span className='text-xl'>1,500</span>
              </div>
          </div>
          
          <UsageChart data={UsageHistory}/>
        </>
        :
          <div className="flex flex-col items-center justify-center gap-8 py-12">
              <div className="relative w-full max-w-md mx-auto">
                  <Image
                      src="/emptypage.svg"
                      alt="emptypage svg"
                      width={500}
                      height={300}
                      className="object-contain w-full h-auto"
                  />
              </div>
              <p className='text-sm text-center'>No product yet. Create a new product to get started</p>
              <button  onClick={() => handleAddEditProduct()} className="flex items-center text-white hover:text-primary bg-primary hover:bg-transparent border border-transparent hover:border-primary py-2 px-14 rounded-[4px] text-sm font-semibold">
                  <Add /> New Product
              </button>
          </div>
        }


        {isModalOpen && (
            <ProductModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              product={selectedProduct}
              onSave={handleSaveProduct}
              mode={modalMode}
            />
          )}

    </section>
  )
}

export default AdminProductForm;