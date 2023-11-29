'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import items from '@/app/data'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'


const EventTemplate = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const event = items.filter((item) => (
    item.id == search
  ))
  const imageSet = event[0].supportingImages

  const [page, setPage] = useState(1)

  const setPrev = () => {
    setPage(prev => ((prev - 1) > 0 ? prev - 1 : imageSet.length))
  }

  const setNext = () => {
    setPage(prev => ((prev + 1) >= imageSet.length + 1 ? 1 : prev + 1))
  }

  return (
    <div className='et-wrapper w-screen h-screen flex justify-center items-center absolute bg-white'>
      <div className="et-container flex justify-center item-center max-w-7xl px-6">
        <div className="et-image-container w-full event-container flex flex-col gap-4">

          <Image src={imageSet[page - 1]} width={800} height={700} alt={imageSet[page - 1].eventName} key={imageSet[page - 1].eventName} className='border-4 border-grey rounded-lg duration-700 ease-in-out' />
          <div className="flex justify-center items-center gap-8">
            <button onClick={setPrev}><Image src={"/img/left.png"} width={40} height={40} alt="slider" key="left" /></button>
            {imageSet.map((image, i) => (
              <Image src={(i == page - 1) ? "/img/circle.png" : "/img/oval.png"} width={20} height={20} className={i} key={i} alt="circle" />
            ))}
            <button onClick={setNext}><Image src={"/img/right.png"} width={40} height={40} alt="slider" key="right" /></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EventTemplate
