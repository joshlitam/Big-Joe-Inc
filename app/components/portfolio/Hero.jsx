'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '../Navbar'
import Reveal from '../Reveal'
import items from '@/app/data'

const Hero = () => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    let int = setInterval(() => {
      setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
    }, 5000)

    return () => clearInterval(int)
  }, [])

  return (
    <div className='relative flex h-screen w-full flex-col justify-center items-center'>
      <div className="absolute w-full h-full">
        <Navbar />
        {items.map((item) => (
          <Image src={items[page - 1].imageURL} fill objectFit='cover'/>
        ))}
        {/* Gray shade on images */}
        <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center py-4 px-8 rounded-lg bg-gray-700 opacity-60'></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
          <Reveal>
            <div className='carousel-text flex flex-col items-center'>
              <h1 className="text-7xl font-bold hero-title text-white">Events? We Got <span className='text-red-700 font-black'>YOU!</span></h1>
              <p className="py-6 text-center text-white w-8/12 hero-text"><span className='text-yellow-300 font-extrabold text-xl underline'>BIG JOE INC</span> offers end-to-end services when it comes to events! From concept creation to merchandise sourcing, all the way to event handling, Big Joe has got your event needs covered.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Hero
