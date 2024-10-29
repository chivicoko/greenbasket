'use client';

import React, { useEffect, useState } from 'react';
import { VisibilityOutlined, DeleteOutline, EditNote } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import ProductDeleteModal from '@/components/admin/ProductDeleteModal';
import ProductDeletedModal from '@/components/admin/ProductDeletedModal';
import BasicPagination from './Pagination';
import Image from 'next/image';
import { getProducts } from '@/lib/api';
import { Product } from '@/utils/types';
import Loading from '@/app/loading';

// Define the Product interface
// interface Product {
//   _id: number;
//   name: string;
//   image: string;
//   price: number;
//   description: string;
// }

interface CampaignTableProps {
  error: string | null;
}

const ProductTable: React.FC<CampaignTableProps> = ({ error }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDeletedModal, setShowDeletedModal] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  if (error) return <p className='text-red-500'>{error}</p>;

  const handleEdit = (id: string) => {
    router.push(`/admin/products/${id}`);
  };

  const handleView = (id: string) => {
    router.push(`/admin/products/${id}`);
  };

  const handleDeleteClick = (id: string) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (deletingId) {
      try {
        // await deleteCampaign(deletingId);
        setShowDeleteModal(false);
        setShowDeletedModal(true);
      } catch (err) {
        console.log('Failed to delete product');
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeletingId(null);
  };

  const handleCloseDeletedModal = () => {
    setShowDeletedModal(false);
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
    <>
      {
        loading ? <Loading/> : 
      
        products && products.length > 0 ? (
        <div className='custom-scrollbar overflow-x-scroll'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr className='border-0 rounded-[4px]'>
                <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>S/N</th>
                <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Product</th>
                <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Product Name</th>
                <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Price</th>
                <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Status</th>
                <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {products.slice(0, 10).map((product, index) => (
                <tr key={product._id} className='border-b'>
                  <td className='px-6 py-2 text-xs whitespace-nowrap'>{index + 1}.</td>
                  <td className='px-6 py-2 text-xs whitespace-nowrap'>
                    <div className="relative w-10 h-10 flex justify-center rounded-full">
                      <Image
                        src={product.image}
                        alt={`${product.name} preview`}
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </td>
                  <td className='px-6 py-2 text-xs whitespace-nowrap'>{product.name}</td>
                  <td className='px-6 py-2 text-xs whitespace-nowrap'>{product.price}</td>
                  <td className={`${product.description === 'active' ? 'text-green-500' : 'text-red-700'} px-6 py-2 text-xs whitespace-nowrap`}>
                    {product.description === 'active' ? "Active" : "Inactive"}
                  </td>
                  <td className='px-6 py-5 text-xs whitespace-nowrap flex items-center space-x-2'>
                    <button onClick={() => handleView(product._id)} className='text-[#666666] hover:text-green-700'>
                      <VisibilityOutlined style={{ width: '17px', height: '17px' }} />
                    </button>
                    <button onClick={() => handleEdit(product._id)} className='text-[#666666] hover:text-blue-700'>
                      <EditNote style={{ width: '19px', height: '19px' }} />
                    </button>
                    <button onClick={() => handleDeleteClick(product._id)} className='text-[#666666] hover:text-red-700'>
                      <DeleteOutline style={{ width: '17px', height: '17px' }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='mt-8 flex flex-col md:flex-row items-center justify-between'>
            <BasicPagination />
            <p className='text-sm'>Showing 10 of 40 results</p>
          </div>
        </div>
      ) : (
        <div className='text-center text-xl text-gray-600'>No Products found</div>
      )}

      {showDeleteModal && (
        <ProductDeleteModal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}

      {showDeletedModal && (
        <ProductDeletedModal onClose={handleCloseDeletedModal} />
      )}
    </>
  );
};

export default ProductTable;
