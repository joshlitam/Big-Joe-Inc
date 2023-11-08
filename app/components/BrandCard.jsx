'use client'
import React from 'react'
import Reveal from './Reveal'

const BrandCard = ({ imgURL, alt }) => {
  return (
    <Reveal>
      <div className='brand-card flex justify-center items-center place-items-center'>
        <img className="col-span-1 w-3/4" src={imgURL} alt={alt} />
      </div>
    </Reveal>

  )
}

export default BrandCard
