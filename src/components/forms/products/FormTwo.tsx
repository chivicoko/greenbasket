'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import InputTwo from '../../inputs/InputTwo';
import { ProductFormTwoProps } from '@/utils/types';
import InputOne from '../../inputs/InputOne';
import TextAreaTwo from '@/components/inputs/TextAreaTwo';
import ButtonNeutral from '@/components/button/ButtonNeutral';
import { Cancel } from '@mui/icons-material';

type productFormTwoProps = ProductFormTwoProps & {
  updateFields: (fields: Partial<ProductFormTwoProps>) => void
}

const FormTwo = ({images, tags, updateFields}: productFormTwoProps) => {
  const [productTags, setProductTags] = useState<string[]>([]);
  const [tagText, setTagText] = useState<string>('');

  const handleTagTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(e.target.value);
  };
    
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = tagText.trim();

      if (newTag.length > 2 && !productTags.includes(newTag)) {
        const newProductTags = newTag.split(',').map(item => item.trim()).filter(item => item !== '');
        setProductTags((prevTagsList) => [...prevTagsList, ...newProductTags]);
        setTagText('');
      }
    }
  };

  const removeItem = (index: number) => {
  setProductTags(prevItems => prevItems.filter((_, i) => i !== index));
  };


  return (
    <div className='h-[75%] space-y-3 overflow-y-auto custom-scrollbar2 px-1'>
      <p className='text-xl text-neutral-500 mt-4 mb-4 sm:text-center'>Add other images (max. 6) and tags</p>

      <div className="w-full min-h-32 h-fit relative py-3 rounded-2xl">
        <label htmlFor="image" tabIndex={0} className='w-full h-full rounded-2xl flex flex-col items-center gap-2 font-semibold cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 group border focus-within:outline-none focus-within:ring-[1px] focus-within:ring-primary'>
          <div className="relative size-20">
            <Image
              src="/images/Avatar.svg"
              alt="Shopping Sale's icon"
              fill
              className='border rounded-full object-cover'
              sizes="100%"
            />
          </div>
          <div className="size-8 group-hover:size-9 absolute left-1/2 -translate-x-1/2 -translate-y-3/4 top-1/2">
            <Image
              src="/images/add_photo_alternate.svg"
              alt="Shopping Sale's icon"
              fill
              className='rounded-full object-cover'
              sizes="100%"
            />
          </div>
          <p className='text-xs'>Upload store logo</p>
        </label>
        <InputOne id='image' type='file' classes="hidden" />
      </div>

      <div className={`${productTags.length > 0 ? 'focus-within:outline-none focus-within:ring-[1px] focus-within:ring-primary p-[4px]' : ''} border border-gray-300 space-y-3 min-h-fit mt-[6px] flex items-center justify-center flex-wrap rounded-xl`}>
        <InputTwo autoFocus required value={tagText} onKeyDown={handleKeyPress} onChange={handleTagTextChange} classes='w-full border-none' floatingLabel='Tags (add tags separated by comma)' />
        {/* <InputTwo autoFocus required value={tags} onChange={e => updateFields({tags: e.target.value})} classes='w-full border-none' floatingLabel='Tags' /> */}
        {productTags.length > 0 &&
          <div className='w-full self-start flex items-center gap-2 flex-wrap'>
            {productTags.map((tag, index) => (
              <span className='flex items-center gap-2 bg-customGray pl-3 pr-2 py-1 rounded-full capitalize'>
                <span>{tag}</span>
                <ButtonNeutral onClick={() => removeItem(index)} icon1={<Cancel className='size-6' />} classes="border border-primary bg-btn hover:bg-btn-hover flex items-center justify-center p- text-primary rounded-full text-sm" />
              </span>
            ))}
          </div>
        }
      </div>

    </div>
  )
}

export default FormTwo;