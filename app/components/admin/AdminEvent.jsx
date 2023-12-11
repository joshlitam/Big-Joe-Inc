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
            
            <div className='h-screen w-screen text-center flex items-center justify-center'><AdminEditEvent pictures={pictures} eventName={eventName} description={description} tags={tags}/></div>
        </div>
    )
}

export default AdminEvent
