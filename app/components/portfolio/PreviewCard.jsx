'use client'
import React from 'react'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

const PreviewCard = ({imageURL, eventName }) => {
  return (
    <div className='pc h-auto w-auto'>
      <CldImage src={imageURL} width={500} height={400} className='border-4 border-gray-400 mb-2' alt={eventName}/>
      <h2 className='text-xl font-bold text-center'>{eventName}</h2>
    </div>
  )
}

export default PreviewCard
