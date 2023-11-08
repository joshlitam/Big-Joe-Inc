'use client'
import React from 'react'
import BrandCard from './BrandCard'
import Reveal from './Reveal'

const brands = [
    { "imgUrl": "/img/gatorade.png", "alt": "gatorade logo" },
    { "imgUrl": "/img/havaianas.png", "alt": "havaianas logo" },
    { "imgUrl": "/img/mountaindew.png", "alt": "mountain dew logo" },
    { "imgUrl": "/img/pepsi.png", "alt": "pepsi logo" },
    { "imgUrl": "/img/phoenix.png", "alt": "phoenix logo" },
    { "imgUrl": "/img/quaker.png", "alt": "quaker logo" },
    { "imgUrl": "/img/smart.png", "alt": "smart logo" },
    { "imgUrl": "/img/dito.jpg", "alt": "dito logo" },
]

const Brands = () => {
    return (
        <div className="brands-wrapper div flex min-h-screen px-12 justify-center bg-white">
            <div className='brands mt-12 max-w-7xl flex flex-col justify-center'>
                <Reveal>
                <h2 className='brands-header text-4xl text-center font-extrabold text-red-500'>Brands we've worked with</h2>
                <div className="brands-cards-container grid grid-cols-4 mt-16 gap-y-12">
                    {brands.map((brand) => (
                        <BrandCard imgURL={brand.imgUrl} alt={brand.alt}/>
                    ))}
                </div>
                </Reveal>
            </div>
        </div>

    )
}

export default Brands
