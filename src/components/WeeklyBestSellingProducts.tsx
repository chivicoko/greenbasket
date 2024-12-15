import { categories, products } from '@/utils/data';
import { Add, ArrowForward, Remove } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './button/ButtonLink';
import Button from './button/Button';

const WeeklyBestSellingProducts: React.FC = () => {
    
  return (
    <div className='w-full pt-10 md:pt-16 pb-20'>
      <div className="flex items-center justify-between mb-8">
        <h3 className='text-lg md:text-xl lg:text-3xl font-bold text-[#064f38]'>Weekly best selling items</h3>
        <ButtonLink url='/products' btnText='See more' classes='text-orange-950 font-semibold gap-2' icon2={<ArrowForward />}  />
      </div>

      <div className="flex items-center flex-wrap gap-4 mb-8">
        {
          categories.slice(0, 8).map(category => {
            return(
              <Button key={category.id} btnText={category.name} classes="py-2 px-4 bg-white hover:bg-[#064f38] text-[#064f38] hover:text-white font-semibold text-sm rounded-full shadow-md" />
            )
          })
        }
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {
          products.slice(8,13).map(product => 
            <div key={product.id} className="pt-0 pb-4 flex-1 flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
              <Link href={`/products/${product.id}`} className="relative w-full h-48 mb-4 self-center cursor-pointer rounded-t-md overflow-hidden">
                <Image
                  src={product.img}
                  alt={`${product.name} preview`}
                  fill
                  className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>

              <div className='px-4 w-full'>
                <h2 className='text-center text-lg font-semibold text-theme hover:text-[#bbea70]'>
                  <Link href={`/products/${product.id}`} className="">
                    {product.name}
                  </Link>
                </h2>
                <p className='text-center text-sm text-gray-500 font-semibold'>120gm</p>
                <p className='text-center text-xl py-3 font-bold text-theme'>${product.price}</p>
                <div className='bg-[#cee1af90] w-full flex items-center py-1 rounded-lg justify-around'>
                  <Button icon1={<Remove/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                  <Button icon1={<Add/>} classes="p-1 bg-white hover:bg-[#cee9a490] text-theme rounded-full" />
                </div>
              </div>
            </div>
          )
        }
      </div>

      <div
        className="flex-1 relative w-full mt-20 bg-contain bg-center rounded-3xl shadow-md"
        style={{ backgroundImage: `url('/images/bgHeader3.jpeg')` }}
      >
          <div className={`bg-orange-950 absolute inset-0 bg-opacity-90 rounded-3xl`}></div>
          
          <div className="relative z-10 text-white py-3 sm:py-4 md:py-8 px-3 sm:px-6 lg:px-10 flex justify-between">
              <div className='flex flex-col justify-between gap-8 lg:gap-10 w-2/3'>
                  {/* <p className={`bg-orange-500 py-1 rounded-md w-fit px-3 text-sm`}><DeliveryDiningOutlined/> Membership Card</p> */}
                  <p className={`text-slate-300 text-lg sm:text-xl md:text-xl lg:text-2xl font-bold`}>Stay Home and Get All Your Essentials from Our Market!</p>
                  <p className={`text-slate-300`}>Download the app from app store or google play</p>
                  <div className="flex items-center gap-2 md:gap-4">
                    <button className="relative w-44 h-12 self-end rounded-lg shadow-md hover:shadow-lg">
                      <Image 
                      src="/images/googlePlay.png"
                      alt="Google Play Store download icon"
                      fill
                      className='object-cover rounded-lg'
                      sizes="100%"
                      />
                    </button>
                    <button className="relative w-44 h-12 self-end rounded-lg shadow-md hover:shadow-lg">
                      <Image 
                      src="/images/appleStore.png"
                      alt="Apple Store download icon"
                      fill
                      className='object-cover rounded-lg'
                      sizes="100%"
                      />
                    </button>
                  </div>
              </div>

              <span className="relative w-20 h-20  md:w-32 md:h-32 lg:w-44 lg:h-44 self-end">
                  <Image 
                  src="/images/gift-box.png"
                  alt="User carrying wheeled cart full of purchased products"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="100%"
                  />
              </span>
          </div>
      </div>
    </div>
  )
}

export default WeeklyBestSellingProducts;