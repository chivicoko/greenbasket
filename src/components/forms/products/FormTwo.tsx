'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import InputTwo from '../../inputs/InputTwo';
import { ProductFormTwoProps } from '@/utils/types';
import InputOne from '../../inputs/InputOne';
import ButtonNeutral from '@/components/button/ButtonNeutral';
import { Add, Cancel } from '@mui/icons-material';

type productFormTwoProps = ProductFormTwoProps & {
  updateFields: (fields: Partial<ProductFormTwoProps>) => void
}

const FormTwo = ({images, tags, updateFields}: productFormTwoProps) => {
  const [productTags, setProductTags] = useState<string[]>([]);
  const [tagText, setTagText] = useState<string>('');
  
  const [formImages, setFormImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  useEffect(() => {
    setFormImages([]);
    
    updateFields({images: formImages});
  }, [formImages, updateFields]);
  

  useEffect(() => {
    updateFields({tags: productTags});
  }, [tags, productTags, updateFields]);

  const handleTagTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(e.target.value);
  };
    
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTag = tagText.trim();

      if (newTag.length > 2 && !productTags.includes(newTag)) {
        const newProductTags = newTag.split(',').map(item => item.trim()).filter(item => item !== '');
        console.log(newProductTags);
        setProductTags((prevTagsList) => [...prevTagsList, ...newProductTags]);
        setTagText('');
      }
    }
  };

  const removeItem = (index: number) => {
  setProductTags(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          
          if (result && !result.startsWith('data:image')) {
            setImageError('Invalid image format.' );
          } else {
            setSelectedImage(result);
          }
          
          setFormImages(prev => ([...prev, result]));
          if (formImages.length < 6) {
            updateFields({images: [...formImages, result]});
          } else {
            setImageError('You have reached the allowed maximum (6)' );
          }

        };
        reader.readAsDataURL(file);
      } else {
        setImageError('Invalid image file type.' );
      }
    }
  };


  return (
    <div className='h-[75%] space-y-3 overflow-y-auto custom-scrollbar2 px-1'>
      <p className='text-xl text-neutral-500 mt-4 mb-4 sm:text-center'>Add other images (max. 6) and tags</p>

      <div className="w-full min-h-32 h-fit relative py-3 rounded-2xl">
        
        {selectedImage ?
          // {formData.image && (
          <div>
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
                  <span className='text-red-500 text-xs hover:text-red-700 border-0 ring-0 transition-all duration-300'>Add more images</span>
                </span>
              </div>
              <div className="relative w-full h-24 sm:h-28 self-start border-2 border-primary rounded-lg overflow-hidden p-4">
                <span className='text-secondary z-50 absolute top-4 md:top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-125'> <Add className='text-7xl'/> </span>
                <Image
                  src={images.length > 0 ? images[0] : selectedImage}
                  alt='Selected image'
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </label>

            {images.length > 0 && 
              <div className="grid grid-cols-3 gap-2">
                {images.slice(1, images.length).map((image, index) => (
                  <div key={index} className="relative w-full h-24 sm:h-28 self-start border-2 border-primary rounded-lg overflow-hidden p-4">
                    <Image
                      src={image}
                      alt='Selected image'
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            }
          </div>
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
                Select Images
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

        <InputOne onChange={handleImageChange} name="image" id="imageFile" type='file' classes="hidden" />
        {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
        
      </div>

      <div className={`${productTags.length > 0 ? 'focus-within:outline-none focus-within:ring-[1px] focus-within:ring-primary p-[4px]' : ''} border border-gray-300 space-y-3 min-h-fit mt-[6px] flex items-center justify-center flex-wrap rounded-xl`}>
        <InputTwo autoFocus value={tagText} onKeyDown={handleKeyPress} onChange={handleTagTextChange} classes='w-full border-none' floatingLabel='Tags (add tags separated by comma)' />
        {productTags.length > 0 &&
          <div className='w-full self-start flex items-center gap-2 flex-wrap'>
            {productTags.map((tag, index) => (
              <span key={index} className='flex items-center gap-2 bg-customGray pl-3 pr-2 py-1 rounded-full capitalize'>
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