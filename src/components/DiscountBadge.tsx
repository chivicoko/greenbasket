import React from 'react'

const DiscountBadge = () => {
  return (
    <div className="absolute -top-1 md:-top-7 -left-1 md:-left-7 h-12 w-12 md:h-24 md:w-24 bg-blue-950 rounded-full text-white">
        <p className='transform translate-x-1/8 translate-y-1/3 md:translate-y-1/2 text-center flex flex-col'>
        <span><span className='md:hidden'>-</span><span className='text-xl font-semibold'>70</span><sub>%</sub></span> 
        <span className='uppercase text-xs hidden md:block'>discount</span>
        </p>
    </div>
  )
}

export default DiscountBadge