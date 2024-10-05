'use client';

import React, { useState } from 'react';
import { VisibilityOutlined, DeleteOutline, EditNote } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
// import { deleteCampaign } from '@/services/api';
import ProductDeleteModal from '@/components/admin/ProductDeleteModal';
import ProductDeletedModal from '@/components/admin/ProductDeletedModal';
// import Loading from '../app/loading';
// import Loading from '../../app/loading';
import BasicPagination from './Pagination';
import { products } from '@/utils/data';
import Image from 'next/image';

interface CampaignTableProps {
  // campaigns: Campaign[];
  loading: boolean;
  error: string | null;
}

const ProductTable: React.FC<CampaignTableProps> = ({ loading, error }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showDeletedModal, setShowDeletedModal] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // if (loading) return <Loading />;
  if (error) return <p className='text-red-500'>{error}</p>;

  const handleEdit = (id: number) => {
    router.push(`/admin/products/${id}`);
  };

  const handleView = (id: number) => {
    router.push(`/admin/products/${id}`);
  };

  const handleDeleteClick = (id: number) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (deletingId) {
      try {
        // await deleteCampaign(deletingId);
        setShowDeleteModal(false);
        setShowDeletedModal(true);

        // const updatedCampaigns = await getCampaigns();
      } catch (err) {
        console.log('Failed to delete campaign');
      } finally {
        setDeletingId(null);
      }
    }
    
    // console.log(`Viewing campaign`);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeletingId(null);
  };
  
  const handleCloseDeletedModal = () => {
    setShowDeletedModal(false);
  };

  return (
    <>
        {products && products?.length > 0 ?
        <div className='custom-scrollbar overflow-x-scroll'>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr className='border-0 rounded-[4px]'>
                    <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>S/N</th>
                    <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Product</th>
                    <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Product Name</th>
                    <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>price</th>
                    <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Status</th>
                    <th className='px-6 py-2 text-left text-xs font-medium text-gray-500 tracking-wider'>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {products.slice(0,10).map((product, index) => (
                    <tr key={product.id} className='border-b'>
                        <td className='px-6 py-2 text-xs whitespace-nowrap'>{index + 1}.</td>
                        <td className='px-6 py-2 text-xs whitespace-nowrap'>
                          <div className="relative w-10 h-10 flex justify-center">
                            <Image
                              src={product.img}
                              alt={`${product.name} preview`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </td>
                        <td className='px-6 py-2 text-xs whitespace-nowrap'>{product.name}</td>
                        <td className='px-6 py-2 text-xs whitespace-nowrap'>{product.price}</td>
                        <td className={`${product.desc === 'active' ? 'text-green-500' : 'text-red-700'} px-6 py-2 text-xs whitespace-nowrap`}>{product.desc === 'active' ? "Active" : "Inactive"}</td>
                        <td className='px-6 py-2 text-xs whitespace-nowrap flex space-x-2'>
                          <button onClick={() => handleView(product.id)} className='text-[#666666] hover:text-green-700'>
                              <VisibilityOutlined style={{width: '17px', height: '17px'}} />
                          </button>
                          <button onClick={() => handleEdit(product.id)} className='text-[#666666] hover:text-blue-700'>
                              <EditNote style={{width: '19px', height: '19px'}} />
                          </button>
                          <button onClick={() => handleDeleteClick(product.id)} className='text-[#666666] hover:text-red-700'>
                              <DeleteOutline style={{width: '17px', height: '17px'}} />
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
        :
        <div className='text-center text-xl text-gray-600'>No Campaigns found</div>
        }

      {showDeleteModal && (
        <ProductDeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {showDeletedModal && (
        <ProductDeletedModal
          onClose={handleCloseDeletedModal}
        />
      )}
    </>
  );
};

export default ProductTable;
