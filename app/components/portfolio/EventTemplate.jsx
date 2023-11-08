'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import items from '@/app/data'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="flex justify-center item-center max-w-7xl">
        <div className="w-full event-container flex flex-col gap-4">

          <Image src={imageSet[page - 1]} width={800} height={700} alt={imageSet[page - 1].eventName} className='border-4 border-grey rounded-lg duration-700 ease-in-out' />
          <div className="flex justify-center items-center gap-8">
            <button onClick={setPrev}><Image src={"/img/left.png"} width={40} height={40}/></button>
            {imageSet.map((image, i) => (
              <Image src={(i == page - 1) ? "/img/circle.png" : "/img/oval.png"} width={20} height={20} className={i}/>
            ))}
            <button onClick={setNext}><Image src={"/img/right.png"} width={40} height={40}/></button>
          </div>

        </div>
        <div className='flex flex-col justify-center items-start gap-8 ml-16'>
          <h1 className='text-5xl text-black font-bold'><span className='text-red-500'>{event[0].eventName}</span></h1>
          <h2 className='text-2xl text-gray-500 font-bold'>{event[0].eventDescription}</h2>
          <h2 className='text-xl text-left'>Tags: {event[0].services.join(", ")}</h2>
          <a href="/portfolio"><button className='px-6 py-4 bg-green-500 rounded-lg text-white'>Back to portfolio</button></a>
        </div>
      </div>

    </div>
  )
}

export default EventTemplate
