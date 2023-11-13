import React from 'react'
import PreviewCard from './PreviewCard'
import Link from 'next/link'


const PreviewSection = async ({ events }) => {
    return (
        <div className='ps w-screen flex flex-col justify-center items-center pt-24 pb-24 bg-white'>
            <h2 className='text-4xl text-red-500 mb-16'>Event Portfolio</h2>
            <div className="pc-container w-full h-full max-w-7xl flex justify-around flex-wrap">
                {events.map((event) => (
                    <Link href={{
                        pathname: `portfolio/events/${event._id}`,
                        query: { id: event._id }
                    }}>
                        <PreviewCard imageURL={event.imageURL} eventName={event.eventName} />
                    </Link>
                ))}
            </div>
            <Link href="/"><button className='mt-16 px-6 py-4 bg-green-500 rounded-lg text-white'>Back to home</button></Link>
        </div >
    )
}

export default PreviewSection 
