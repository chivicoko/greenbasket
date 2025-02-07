import React from 'react'
import InputTwo from '../../inputs/InputTwo';
import { ProductFormThreeProps } from '@/utils/types';

type productFormThreeProps = ProductFormThreeProps & {
  updateFields: (fields: Partial<ProductFormThreeProps>) => void
}

const FormThree = ({stock, price, discountPercentage, returnPolicy, minimumOrderQuantity, weight, updateFields}: productFormThreeProps) => {

  return (
    <div className='h-[75%] space-y-3 overflow-y-auto custom-scrollbar2 px-1'>
      <p className='text-xl text-neutral-500 mt-4 mb-4 sm:text-center'>Other details</p>

      <div className="space-y-3 mt-[6px] flex items-center justify-center flex-wrap">
        <InputTwo autoFocus required value={stock} onChange={e => updateFields({stock: e.target.value})} classes='w-full' floatingLabel='Stock' />
        <InputTwo required value={price} onChange={e => updateFields({price: e.target.value})} classes='w-full' floatingLabel='Price' />
        <InputTwo required value={discountPercentage} onChange={e => updateFields({discountPercentage: e.target.value})} classes='w-full' floatingLabel='Discount Percentage' />
        <InputTwo required value={returnPolicy} onChange={e => updateFields({returnPolicy: e.target.value})} classes='w-full' floatingLabel='Return Policy' />
        <InputTwo required value={minimumOrderQuantity} onChange={e => updateFields({minimumOrderQuantity: e.target.value})} classes='w-full' floatingLabel='Minimum Order Quantity' />
        <InputTwo required value={weight} onChange={e => updateFields({weight: e.target.value})} classes='w-full' floatingLabel='Weight' />
      </div>
    </div>
  )
}

export default FormThree;