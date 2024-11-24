import Image from 'next/image'
import React from 'react'

const DndBar = () => {
  return (
    <section className='draggableItem bg-white pb-6 h-full w-fit m-[28px] rounded-[12px]' draggable="true">
        <form className='w-full'>
            <div className="w-full py-4 px-7 flex items-center justify-between">
                <div className="left flex items-center gap-2">
                    <span className="relative w-[20px] h-[20px]">
                        <Image
                        src="/images/Group 1000003505.svg"
                        alt="GreenBasket Store's Logo"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100%"
                        />
                    </span>
                    <span className='text-[16px] font-[600] color-black'>OUTPUT</span>
                </div>
                <span className="rounded-full bg-[#666666] w-3 h-3"></span>
            </div>

            <p className='text-[#666666] bg-[#EEF4FF] p-3 text-[14px] font-[500] whitespace-nowrap'>Write the input/ question you want to ask</p>

            <div className="inputWrapper flex flex-col gap-[5px] p-4">
                <span className='text-black text-[14px] font-[400]'>Output Response</span>
                <div className='py-2 px-3 border-2 border-gray-300 rounded-md text-[14px] font-[400]' >
                    <p className='text-[#0000005b]'>Output response will be shown here</p>
                    {/* <p className='text-[#000]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime cupiditate quam assumenda id quo ab, similique culpa iure dignissimos suscipit quaerat, ipsa illum dolor?</p> */}
                </div>
            </div>
        </form>
    </section>
  )
}

export default DndBar