'use client'
import React from 'react'
import { CldImage } from 'next-cloudinary'
import { useEffect, useState } from 'react'
import AdminEventDescription from './AdminEventDescription'
import AdminEditEvent from './AdminEditEvent'

const AdminEvent = ({ pictures, eventName, description, tags }) => {
    const [page, setPage] = useState(1)
    const images = pictures

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
                            <CldImage src={pictures[page - 1]} width={900} height={700} className='border-2 border-black et-primary-image' />
                        </div>
                        <div className='flex justify-center items-center bg-gray-200 py-2 overflow-hidden'>
                            <div className='et-image-container'>
                                <CldImage src={pictures[0]} width={100} height={100} className={page == 1 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(1)} />
                            </div>
                            <div className='et-image-container'>
                                <CldImage src={pictures[1]} width={100} height={100} className={page == 2 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(2)} />
                            </div>
                            <div className='et-image-container'>
                                <CldImage src={pictures[2]} width={100} height={100} className={page == 3 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(3)} />
                            </div>
                            <div className='et-image-container'>
                                <CldImage src={pictures[3]} width={100} height={100} className={page == 4 ? "border-2 border-green-400 et-image" : "et-image"} onClick={() => handleClick(4)} />
                            </div>
                        </div>
                    </div>
                    <AdminEventDescription eventName={eventName} eventDescription={description} tags={tags} />
                </div>
                
            </div>
            <div className='h-screen w-screen bg-blue-300 text-center flex items-center justify-center'><AdminEditEvent pictures={pictures} eventName={eventName} description={description} tags={tags}/></div>
        </div>
    )
}

export default AdminEvent
