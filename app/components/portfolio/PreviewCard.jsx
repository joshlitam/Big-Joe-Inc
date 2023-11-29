'use client'
import React from 'react'
import { CldImage } from 'next-cloudinary'

const PreviewCard = ({ imageURL, eventName }) => {
  return (
    <div>
      <div className='pc' style={{ height: "400px", width: "500px" }}>
        <CldImage src={imageURL} width={500} height={400} className='border-4 border-gray-400 mb-2 pc-image' alt={eventName} />
      </div>
      <h2 className='text-xl font-bold text-center'>{eventName}</h2>
    </div>

  )
}

export default PreviewCard

