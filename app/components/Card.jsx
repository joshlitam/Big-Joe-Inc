import React from 'react'

const Card = ({title, imgURL, description}) => {
  return (
    <div className='card-wrapper w-80 h-96 bg-gray-100 rounded-lg'>
      <div className="card-container flex flex-col justify-center items-center gap-3 py-8 px-6">
        <img src={imgURL} alt={title} className='w-36 h-36'/>
        <h2 className='text-lg text-center font-extrabold'>{title}</h2>
        <h3 className='text-md text-gray-700'>{description}</h3>
      </div>
    </div>
  )
}

export default Card
