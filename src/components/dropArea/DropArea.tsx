// import Image from 'next/image'
import React from 'react'
import Input from '../input/Input'
import LlmEngine from '../llmEngine/LlmEngine'
import Output from '../output/Output'

const DropArea = () => {
  return (
    <section className='flex items-center justify-center w-full h-[100%]'>
      {/* <div className="dropHere border border-red-70 flex flex-col justify-center items-center gap-8">
          <div className="relative w-[78px] h-[78px]">
              <Image
              src="/images/Frame 1000003287.svg"
              alt="GreenBasket Store's Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
              />
          </div>
          <p className='font-[500] text-[18px]'>Drag and drop to get started</p>
      </div> */}

      <div className="inputLlmEngineOutputWrapper flex items-center gap-8">
        <Input/>
        <LlmEngine/>
        <Output/>
      </div>
    </section>
  )
}

export default DropArea