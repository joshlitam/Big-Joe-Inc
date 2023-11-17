'use client'
import React from 'react'
import EventDescription from '../EventDescription'
import { CldImage } from 'next-cloudinary'
import { useEffect, useState } from 'react'

const Event = ({ image1, image2, image3, image4, eventName, description, tags }) => {
    const [page, setPage] = useState(1)
    const images = [image1, image2, image3, image4]

    useEffect(() => {
        let int = setInterval(() => {
            setPage(prev => ((prev + 1) >= 5 ? 1 : prev + 1));
        }, 5000)

        return () => clearInterval(int)
    }, [])

    const handleClick = (x) => {
        setPage(x)
    }

    return (
        <div>
            <div className='et-wrapper h-screen w-screen flex justify-center items-center my-8'>
                <div className='et-container flex justify-center items-center max-w-7xl px-6'>
                    <div className='et flex flex-col gap-4 flex-1 items-center'>
                        <div className="et-primary-image-container">
                            <CldImage src={images[page - 1]} width={900} height={700} className='border-2 border-black et-primary-image' />
                        </div>
                        <div className='flex justify-center items-center bg-gray-200 py-2 overflow-hidden'>
                            <div className='et-image-container'>
                                <CldImage src={image1} width={100} height={100} className={page == 1 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(1)} />
                            </div>
                            <div className='et-image-container'>
                                <CldImage src={image2} width={100} height={100} className={page == 2 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(2)} />
                            </div>
                            <div className='et-image-container'>
                                <CldImage src={image3} width={100} height={100} className={page == 3 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(3)} />
                            </div>
                            <div className='et-image-container'>
                                <CldImage src={image4} width={100} height={100} className={page == 4 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(4)} />
                            </div>
                        </div>
                    </div>
                    <EventDescription eventName={eventName} eventDescription={description} tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default Event
