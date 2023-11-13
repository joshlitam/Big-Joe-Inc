import React from 'react'
import Link from 'next/link'

const EventDescription = ({ eventName, eventDescription, tags }) => {
    return (
        <div className="et-text flex flex-col justify-center items-start gap-8 mx-16">
            <h1 className='et-text-title text-5xl text-black font-bold'><span className='text-red-500'>{eventName}</span></h1>
            <h2 className='et-text-description text-2xl text-gray-500 font-bold'>{eventDescription}</h2>
            <h2 className='et-text-tags text-xl text-left'>Tags: {tags.join(", ")}</h2>
            <Link href="/portfolio"><button className='px-6 py-4 bg-green-500 rounded-lg text-white'>Back to portfolio</button></Link>
        </div>
    )
}

export default EventDescription
