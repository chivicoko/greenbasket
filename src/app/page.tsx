'use client';

import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import { categories, products } from '@/utils/data';
import { Add, East, Remove } from '@mui/icons-material';

const HomePage: React.FC = () => {

  return (
    <>
      <Header />
      <section id='productsContent' className="flex gap-3 md:gap-6 items-center justify-start pb-7 md:pt-10 md:pb-10 px-2 md:px-6 overflow-x-auto">
        {
          categories.slice(0,5).map(category => 
            <div key={category.id} className="flex justify-start gap-4 bg-white p-4 rounded-xl transform transition-transform duration-300 hover:-rotate-3 hover:shadow-lg">
              <span className='self-start'>
                <h2 className='text-lg font-semibold text-theme'>{category.name}</h2>
                <p className='text-gray-500 font-semibold'>{category.desc}</p>
              </span>
              <span className="relative w-14 h-14 self-end mt-8 rotate-12">
                <Image
                  src={category.img}
                  alt={`${category.name} preview`}
                  fill
                  className='object-cover'
                  sizes="100%"
                />
              </span>
            </div>
          )
        }

        <button className='flex flex-col items-center h-full w-fit justify-center gap-4 bg-[#bbea70] hover:bg-[#bbea70d3] p-4 rounded-xl'>
          <span className="text-sm md:text-lg text-theme bg-white rounded-full p-2 flex items-center"> 
            <p className='transition-transform duration-300 ease-in-out transform hover:translate-x-1'><East/> </p>
          </span>
          <p className='text-sm text-theme font-semibold'>See all</p>
        </button>

      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 py-3 md:py-5 px-2 md:px-6 ">
        {
          products.map(product => 
            <div key={product.id} className="bennetCurve2 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl">
              <div className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                <Image
                  src={product.img}
                  alt={`${product.name} preview`}
                  fill
                  className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <span className='px-4 w-full'>
                <h2 className='text-center text-lg font-semibold text-theme'>{product.name}</h2>
                <p className='text-center text-sm text-gray-500 font-semibold'>{product.weight}gm</p>
                <p className='text-center text-xl py-3 font-bold text-theme'>${product.price}</p>
                <div className='bg-[#cee1af90] w-full flex items-center py-1 rounded-lg justify-around'>
                  <button className='p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full'><Remove/></button>
                  <button className='p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full'><Add/></button>
                </div>
              </span>
            </div>
          )
        }
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
