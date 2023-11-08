import React from 'react'
import Image from 'next/image'

const PreviewCard = ({imageURL, eventName }) => {
  return (
    <div className='pc h-auto w-auto'>
      <Image src={imageURL} width={300} height={600} className='border-4 border-gray-400 mb-2' alt={eventName} priority={true}/>
      <h2 className='text-xl font-bold text-center'>{eventName}</h2>
    </div>
  )
}

export default PreviewCard
