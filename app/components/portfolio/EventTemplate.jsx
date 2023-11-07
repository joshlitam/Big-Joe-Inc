'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import items from '@/app/data'
import Image from 'next/image'

const EventTemplate = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const event = items.filter((item) => (
    item.id == search
  ))
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="flex justify-center item-center max-w-7xl">
        <div className="w-full event-container flex flex-col">
          <Image src={event[0].imageURL} width={800} height={700} className='border-4 border-grey rounded-lg'/>
          <div className="bg-gray-500 w-full">hi</div>
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
