"use client";

import ButtonNeutral from '@/components/button/ButtonNeutral';
import ButtonOne from '@/components/button/ButtonOne';
import ButtonTwo from '@/components/button/ButtonTwo';
import useForms from '@/hooks/useForms';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { INITIAL_PRODUCT_DATA } from '@/utils/data';
import { Product2 } from '@/utils/types';
import { useProductForm } from '@/context/ProductFormContext';
import { West } from '@mui/icons-material';
import FormTwo from '@/components/forms/products/FormTwo';
import FormOne from '@/components/forms/products/FormOne';
import FormThree from '@/components/forms/products/FormThree';
import { createProduct } from '@/lib/api';

const PRODUCT_DATA: Product2 = INITIAL_PRODUCT_DATA;

const ProductForms = () => {
  const [data, setData] = useState(PRODUCT_DATA);
  const {saveProductInfo, } = useProductForm();

  const updateFields = (fields: Partial<Product2>) => {
    setData(prev => {
      return {...prev, ...fields}
    });
  };

  const {currentStepIndex, currentStep, stepForward, stepBack, isFirstStep, isLastStep} = useForms([
    <FormOne key="formone" {...data} updateFields={updateFields} />,
    <FormTwo key="formtwo" {...data} updateFields={updateFields} />,
    <FormThree key="formthree" {...data} updateFields={updateFields} />,
  ]);

  const router = useRouter();
  // console.log(currentStepIndex);
  
  const handleContinue = () => {
    stepForward();
  };
  
  const handleBack = () => {
    if(isFirstStep) {
      router.back()
    } else {
      stepBack();
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return handleContinue();

    saveProductInfo(data);
    console.log(data);
    await createProduct(data);
    router.push('/products');
  };

  return (
    <div className="fixed inset-0 p-2 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative h-[95vh] bg-white rounded-lg shadow-lg w-full max-w-lg py-8 px-6 md:px-10">
            {/* <ButtonNeutral onClick={handleBack} icon1={<Cancel className='size-6 md:size-10' />} classes="absolute top-2 right-2 bg-btn hover:bg-btn-hover flex items-center justify-center p- text-primary rounded-full text-sm" /> */}
            <section className="h-full w-full flex-col">
                {currentStepIndex === 2 ?
                    <div className="flex items-center justify-between gap-1">
                        <div className='group pt-3 pb-2 flex items-center gap-0 '>
                            <ButtonNeutral
                              onClick={handleBack}
                              icon1={<West className='transition-all duration-300 ease-in-out transform group-hover:-translate-x-1' />}
                            />
                            <span className='font-semibold text-sm ml-1'>Create product</span>
                        </div>
                        {/* <ButtonNeutral btnText='Create Product' classes='px-2 rounded-sm' /> */}
                    </div>
                    :
                    <div className='group pt-3 pb-2 flex items-center gap-1'>
                        <ButtonNeutral
                            onClick={handleBack}
                            icon1={<West className='transition-all duration-300 ease-in-out transform group-hover:-translate-x-1' />}
                        />
                        <span className='font-semibold text-sm ml-1'>Create product</span>
                    </div>
                }

                <form onSubmit={handleSubmit} className='h-full min-h-[85%] flex flex-col gap-3'>
                    {currentStepIndex === 3 ?
                    <div className="px-5 sm:px-10 md:px-16 flex items-center justify-between gap-1 border-b pb-2">
                        <button className='rounded-full p-1 px-2 border text-xs font-semibold text-neutral-600 flex items-center gap-2'>
                        Draft
                        <div className="relative size-4">
                            <Image 
                            src="/images/check.svg" 
                            alt="Arrow Left" 
                            fill 
                            className="object-cover"
                            sizes="100%" 
                            />
                        </div>
                        </button>
                        <Link href='/products' className='text-primary text-sm font-semibold'>Preview product</Link>
                    </div>
                    :
                    <div className="flex items-center gap-1">
                        <span className='h-1 flex-1 bg-primary rounded-md'></span>
                        <span className={`${currentStepIndex === 1 || currentStepIndex > 1 ? 'bg-primary' : 'bg-customGray'} h-1 flex-1 rounded-md`}></span>
                        <span className={`${currentStepIndex === 2 ? 'bg-primary' : 'bg-customGray'} h-1 flex-1 rounded-md`}></span>
                    </div>
                    }

                    {currentStep}

                    {currentStepIndex === 2 ?
                    <div className="flex items-center justify-center gap-3 sm:gap-6 border-t border-customGray pt-5 pb-10">
                        <ButtonTwo onClick={handleBack} btnText="Cancel" classes='w-1/2' />
                        <ButtonOne btnText="Save" classes='w-1/2' />
                    </div>
                    :
                    <div className="flex items-center justify-center border-t border-customGray py-3">
                        <ButtonOne btnText="Continue" classes='w-full' />
                    </div>
                    }
                </form>
            </section>
        </div>
    </div>
  )
}

export default ProductForms;