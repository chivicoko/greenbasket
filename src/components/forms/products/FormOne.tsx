import React, { useEffect, useState } from 'react'
import InputTwo from '../../inputs/InputTwo';
import { ProductFormOneProps } from '@/utils/types';
import TextAreaTwo from '@/components/inputs/TextAreaTwo';
import Image from 'next/image';
import { Add } from '@mui/icons-material';
import InputOne from '@/components/inputs/InputOne';

type productFormOneProps = ProductFormOneProps & {
  updateFields: (fields: Partial<ProductFormOneProps>) => void
}

const FormOne = ({title, description, category, thumbnail, updateFields}: productFormOneProps) => {
  const [formImage, setFormImage] = useState('');
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    setFormImage('');
    
    updateFields({thumbnail: formImage});
  }, [thumbnail]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          
          if (result && !result.startsWith('data:image')) {
            setImageError(prev => ('Invalid image format.' ));
          }
          
          setFormImage(prev => (result));
          updateFields({thumbnail: result});
        };
        reader.readAsDataURL(file);
      } else {
        setImageError(prev => ('Invalid image file type.' ));
      }
    }
  };

  return (
    <div className='h-[75%] overflow-y-auto custom-scrollbar2 px-1'>
      <p className='text-xl text-neutral-500 mt-4 mb-4 sm:text-center'>Enter the product&apos;s basic information</p>

      <div className="space-y-3 mt-[6px] flex items-center justify-center flex-wrap">
        <InputTwo autoFocus required value={title} onChange={e => updateFields({title: e.target.value})} classes='w-full' floatingLabel='Title' />
        <TextAreaTwo required value={description} onChange={e => updateFields({description: e.target.value})} classes='w-full' floatingLabel='Description' />
        <InputTwo required value={category} onChange={e => updateFields({category: e.target.value})} classes='w-full' floatingLabel='Category' />
        {/* <InputTwo required value={thumbnail} onChange={e => updateFields({thumbnail: e.target.value})} classes='w-full' floatingLabel='Thumbnail' /> */}

        
        {thumbnail ?
        // {formData.image && (
          <label
            htmlFor="imageFile" 
            className='cursor-pointer flex-1 flex items-center gap-1 p-2 border border-gray-300 rounded-2xl mb-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                document.getElementById('imageFile')?.click();
              }
            }}
          >
            <div className='w-1/2 text-lg font-semibold text-center underline hover:text-primary'>
              {/* Image File */}
              <span className='flex flex-col gap-2 text-gray-800 text-sm'>
                Image selected
                <span className='text-red-500 text-xs hover:text-red-700 border-0 ring-0 transition-all duration-300'>Change Image</span>
              </span>
            </div>
            <div className="relative w-full h-24 sm:h-28 self-start border-2 border-primary rounded-lg overflow-hidden p-4">
              <span className='text-secondary z-50 absolute top-4 md:top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-125'> <Add className='text-7xl'/> </span>
              <Image
                src={thumbnail}
                // src={formData.image}
                alt='Image'
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </label>
          :
          <label
            htmlFor="imageFile" 
            className='cursor-pointer flex-1 flex items-center gap-1 p-2 border border-gray-300 rounded-2xl focus-within:outline-none focus-within:ring-[1px] focus-within:ring-primary'
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                document.getElementById('imageFile')?.click();
              }
            }}
          >
            <div className='w-1/2 text-lg font-semibold text-center underline hover:text-primary'>
              <span className='flex flex-col gap-2 text-gray-800 text-sm'>
                Select Image
              </span>
            </div>
            <div className="relative w-full h-24 sm:h-28 self-start border-2 border-primary rounded-xl overflow-hidden p-4">
              <span className='text-primary z-50 absolute top-4 md:top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-125'> <Add className='text-7xl'/> </span>
              <Image
                src='/images/imagePlaceholder.jpeg'
                alt='Placeholder Image'
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </label>
        }

        {/* {thumbnail === '' && ( */}
        {/* // {!formData.image && ( */}
          
        {/* // )} */}

        <InputOne onChange={handleImageChange} name="image" id="imageFile" type='file' classes="hidden" />
        {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
        
      </div>
    </div>
  )
}

export default FormOne;