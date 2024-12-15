import React from 'react';
import DiscountCard from '../DiscountCard';
import ProductsJustForYou from '../ProductsJustForYou';

const Prefoot = () => {
  return (
    <div className='mt-16'>
      <div className='bg-[#fffbeb] mt-16 w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 flex-wrap py-16 px-4 lg:px-8 xl:px-20 2xl:px-32'>
        <DiscountCard/>
      </div>

      <ProductsJustForYou/>

      <div className='bg-[#fffbeb] w-full h-[80vh]'>
        <div
            className="bennetCurve2 relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/bg-3.jpg')` }}
          >
            <div className="bennetCurve2 absolute inset-0 bg-[#bbea70] bg-opacity-80"></div>
            
            <div className="relative z-10 text-[#064f38] p-4 pt-24 px-16 sm:px-32 md:px-36 lg:px-72 xl:px-96 text-center flex flex-col justify-center items-center gap-6">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">We always provide you with the best in town</h1>
              <p>Since 2007, we have been delivering excellence in product development, support & updates for frictionless shopping experience.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Prefoot;
