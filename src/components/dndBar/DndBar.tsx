import Image from 'next/image'
import React from 'react'

const DndBar = () => {
  return (
    <section className='bg-white p-6 h-auto w-1/5 m-[28px] rounded-[20px]'>
        <div className="head">
            <h1 className='font-[500] text-[18px]'>Components</h1>
        </div>

        <div className="dndComponentsArea mt-3 border-t-2">
            <h3 className='my-4 text-gray-400'>Drag and Drop</h3>

            <div className="draggableArea flex items-center flex-col gap-5">
                <div className="draggableItem w-full p-2 flex items-center justify-between border-2 border-gray-300 rounded-md" draggable="true">
                    <div className="left flex items-center gap-2">
                        <span className="relative w-4 h-4">
                            <Image
                            src="/images/Group 1000003504.svg"
                            alt="GreenBasket Store's Logo"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="100%"
                            />
                        </span>
                        <span>Input</span>
                    </div>
                    <span className="relative w-4 h-4">
                        <Image
                        src="/images/Vector.svg"
                        alt="GreenBasket Store's Logo"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100%"
                        />
                    </span>
                </div>
                <div className="draggableItem w-full p-2 flex items-center justify-between border-2 border-gray-300 rounded-md" draggable="true">
                    <div className="left flex items-center gap-2">
                        <span className="relative w-4 h-4">
                            <Image
                            src="/images/streamline_ai-chip-spark.svg"
                            alt="GreenBasket Store's Logo"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="100%"
                            />
                        </span>
                        <span>LLM Engine</span>
                    </div>
                    <span className="relative w-4 h-4">
                        <Image
                        src="/images/Vector.svg"
                        alt="GreenBasket Store's Logo"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100%"
                        />
                    </span>
                </div>
                <div className="draggableItem w-full p-2 flex items-center justify-between border-2 border-gray-300 rounded-md" draggable="true">
                    <div className="left flex items-center gap-2">
                        <span className="relative w-4 h-4">
                            <Image
                            src="/images/Group 1000003505.svg"
                            alt="GreenBasket Store's Logo"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="100%"
                            />
                        </span>
                        <span>Output</span>
                    </div>
                    <span className="relative w-4 h-4">
                        <Image
                        src="/images/Vector.svg"
                        alt="GreenBasket Store's Logo"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100%"
                        />
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DndBar