import React from 'react'
import PreviewCard from './PreviewCard'
import items from '@/app/data'
import Link from 'next/link'


const PreviewSection = () => {
    return (
        <div className='ps w-screen flex flex-col justify-center items-center pt-24 pb-24 bg-white'>
            <h2 className='text-4xl text-red-500 mb-16'>Event Portfolio</h2>
            <div className="pc-container w-full h-full max-w-7xl flex justify-around flex-wrap">
                {items.map((item) => (
                    <Link href={`portfolio/events/?search=` + item.id}><PreviewCard imageURL={item.imageURL} eventName={item.eventName} /></Link>
                ))}
            </div>
            <Link href="/"><button className='mt-16 px-6 py-4 bg-green-500 rounded-lg text-white'>Back to home</button></Link>
        </div>
    )
}

export default PreviewSection 
