import { categories } from '@/utils/data';
import { East } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const Categories: React.FC = () => {

  return (
    // <section id='productsContent' className="flex gap-3 md:gap-6 items-center justify-start pb-7 md:pt-10 md:pb-10 px-2 md:px-6 custom-scrollbar overflow-auto">
    <section id='productsContent' className="flex gap-3 md:gap-6 items-center justify-start pb-7 md:pt-10 md:pb-10 px-2 md:px-6 flex-wrap">
      {
        categories.slice(0,5).map(category => 
          <div key={category.id} className="flex justify-start flex-1 gap-4 bg-white p-4 rounded-xl transform transition-transform duration-300 hover:-rotate-3 shadow-md hover:shadow-lg">
            <span className='self-start'>
              <h2 className='text-lg font-semibold text-primary'>{category.name}</h2>
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

      <Link href='/products' className='flex flex-col items-center h-full w-fit justify-center gap-4 bg-secondary hover:bg-secondary_hover p-4 rounded-xl group focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none'>
        <span className="text-sm md:text-lg text-primary bg-white rounded-full p-2 flex items-center"> 
          <p className='transition-all duration-300 ease-in-out transform group-hover:translate-x-1'><East/> </p>
        </span>
        <p className='text-sm text-primary font-semibold'>See all</p>
      </Link>

    </section>
  )
}

export default Categories;