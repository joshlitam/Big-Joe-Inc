'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'



const EventPictures = ({ primaryImage, alt, supportingImages }) => {
    const [page, setPage] = useState(1)

    const setPrev = () => {
        setPage(prev => ((prev - 1) > 0 ? prev - 1 : imageSet.length))
    }

    const setNext = () => {
        setPage(prev => ((prev + 1) >= imageSet.length + 1 ? 1 : prev + 1))
    }
    return (
        <div className="et-container flex justify-center item-center max-w-7xl px-6">
            <div className="et-image-container w-full event-container flex flex-col gap-4">

                <Image src={primaryImage} width={800} height={700} alt={alt} key={alt} className='border-4 border-grey rounded-lg duration-700 ease-in-out' priority={true} />
                <div className="flex justify-center items-center gap-8">
                    <button onClick={setPrev}><Image src={"/img/left.png"} width={40} height={40} alt="slider" key="left" /></button>
                    {supportingImages.map((image, i) => (
                        <Image src={(i == page - 1) ? "/img/circle.png" : "/img/oval.png"} width={20} height={20} className={i} key={i} alt="circle" priority={true} />
                    ))}
                    <button onClick={setNext}><Image src={"/img/right.png"} width={40} height={40} alt="slider" key="right" /></button>
                </div>
            </div>
        </div>
    )
}

export default EventPictures
