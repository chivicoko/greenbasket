import Image from 'next/image'
import React from 'react'

const LlmEngine = () => {
  return (
    <section className='draggableItem bg-white pb-6 h-full w-fit m-[28px] rounded-[12px]' draggable="true">
        <form className='w-full'>
            <div className="w-full py-4 px-7 flex items-center justify-between">
                <div className="left flex items-center gap-2">
                    <span className="relative w-[20px] h-[20px]">
                        <Image
                        src="/images/streamline_ai-chip-spark.svg"
                        alt="GreenBasket Store's Logo"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100%"
                        />
                    </span>
                    <span className='text-[16px] font-[600] color-black'>LLM ENGINE</span>
                </div>
                <span className="rounded-full bg-[#666666] w-3 h-3"></span>
            </div>

            <p className='text-[#666666] bg-[#EEF4FF] p-3 text-[14px] font-[500] whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur</p>

            <div className="inputs flex flex-col gap-3 p-4">
                <div className="inputWrapper flex flex-col gap-[5px]">
                    <label htmlFor="model" className='text-black text-[14px] font-[400]'>Model Name</label>
                    <select name="model" id="model" className='py-2 px-3 border-2 border-gray-300 rounded-md text-[14px] font-[400]'>
                        <option disabled>Select</option>
                        <option value="gpt-3.5">gpt-3.5</option>
                        <option value="gpt-4">gpt-4</option>
                        <option value="gpt-4o mini">gpt-4o mini</option>
                    </select>
                </div>

                <div className="inputWrapper flex flex-col gap-[5px]">
                    <label htmlFor="input" className='text-black text-[14px] font-[400]'>OpenAI API Base</label>
                    <input type="text" placeholder='Type something...' className='py-2 px-3 border-2 border-gray-300 rounded-md text-[14px] font-[400]' />
                </div>

                <div className="inputWrapper flex flex-col gap-[5px]">
                    <label htmlFor="input" className='text-black text-[14px] font-[400]'>OpenAI Key</label>
                    <input type="password" placeholder='Type something...' className='py-2 px-3 border-2 border-gray-300 rounded-md text-[14px] font-[400]' />
                </div>

                <div className="inputWrapper flex flex-col gap-[5px]">
                    <label htmlFor="input" className='text-black text-[14px] font-[400]'>Max Tokens</label>
                    <input type="text" placeholder='Type something...' className='py-2 px-3 border-2 border-gray-300 rounded-md text-[14px] font-[400]' />
                </div>

                <div className="inputWrapper flex flex-col gap-[5px]">
                    <label htmlFor="input" className='text-black text-[14px] font-[400]'>Temperature</label>
                    <input type="number" placeholder='0.5' className='py-2 px-3 border-2 border-gray-300 rounded-md text-[14px] font-[400]' />
                </div>
            </div>

        </form>
    </section>
  )
}

export default LlmEngine