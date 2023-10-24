import React from 'react'

const BrandCard = ({imgURL, alt}) => {
  return (
    <div className='brand-card flex justify-center items-center'>
      <img className="col-span-1 w-3/4" src={imgURL} alt={alt} />
    </div>
  )
}

export default BrandCard
