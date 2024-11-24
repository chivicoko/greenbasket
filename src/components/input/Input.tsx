'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

const Input = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    setError(false) // Reset error when typing
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputValue.trim()) {
      setError(true)
      toast.error('Input is missing or Input key is missing')
    } else {
      toast.success('Input submitted successfully')
      // Add logic to process the input (e.g., submit data)
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section
        className={`draggableItem bg-white pb-6 h-full w-fit m-[28px] rounded-[12px] ${error ? 'border-2 border-red-500' : ''}`}
        draggable="true"
      >
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full py-4 px-7 flex items-center justify-between">
            <div className="left flex items-center gap-2">
              <span className="relative w-[20px] h-[20px]">
                <Image
                  src="/images/Group 1000003504.svg"
                  alt="GreenBasket Store's Logo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="100%"
                />
              </span>
              <span className="text-[16px] font-[600] color-black">INPUT</span>
            </div>
            <span className="rounded-full bg-[#666666] w-3 h-3"></span>
          </div>

          <p className="text-[#666666] bg-[#EEF4FF] p-3 text-[14px] font-[500] whitespace-nowrap">
            Write the input/ question you want to ask
          </p>

          <div className="inputWrapper flex flex-col gap-[5px] p-4">
            <label htmlFor="input" className="text-black text-[14px] font-[400]">Input</label>
            <textarea
              name="input"
              id="input"
              placeholder="Type something..."
              value={inputValue}
              onChange={handleInputChange}
              className={`py-2 px-3 border-2 rounded-md text-[14px] font-[400] ${error ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {error && <span className="text-red-500 text-sm">Input is missing or Input key is missing</span>}
          </div>

          {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Submit
          </button> */}
        </form>
      </section>
    </>
  )
}

export default Input
