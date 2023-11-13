'use client'
import React from 'react'
import Carousel from '../components/Carousel'
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import Image from 'next/image';

const page = () => {

    const [imageId, setImageId] = useState("")
    const [eventTitle, setEventTitle] = useState("")
    const [eventDesc, setEventDesc] = useState("")
    const [supportingImage1, setSupportingImage1] = useState("")
    const [supportingImage2, setSupportingImage2] = useState("")
    const [supportingImage3, setSupportingImage3] = useState("")
    const [tag, setTag] = useState("")
    const [tags, setTags] = useState([])

    return (
        <div>
            <Carousel />
            <div className="flex justify-center items-center py-8">
                <div className='h-screen w-screen flex flex-col justify-center items-center gap-8 max-w-7xl'>
                    <form action="" method='POST' className='flex flex-col justify-center items-start gap-8 w-full h-full'>
                        <div className='flex flex-col justify-center items-center gap-2 w-full'>
                            <h2 className='text-5xl font-bold text-gray-500 mb-8'>Event Uploader</h2>
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" id='eventName' name='eventName' placeholder='Event Name' onChange={e => setEventTitle(e.target.value)} className='border-2 border-black rounded-lg py-2 px-4' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 w-full'>
                            <label htmlFor="eventDescription">Event Description</label>
                            <textarea
                                type="text"
                                id='eventDescription'
                                name='eventDescription'
                                placeholder='Event Description'
                                onChange={e => setEventDesc(e.target.value)} className='border-2 border-black rounded-lg py-2 px-4'
                                rows='5'
                                cols='40'
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                            <label htmlFor="image">Event Image</label>
                            {imageId && <CldImage src={imageId} width={200} height={200}/>}
                            <CldUploadButton
                                onUpload={(result) => {
                                    setImageId(result.info.public_id)
                                }}
                                uploadPreset="kujxblsb"
                                className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
                                name='image'
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-full">
                            <h3 className='text-3xl text-gray-500 font-bold mb-8'>Supporting Images</h3>
                            <div className="flex gap-8">
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <label htmlFor="supporting-image-1">Supporting Image 1</label>
                                    {supportingImage1 && <CldImage src={supportingImage1} width={120} height={120} />}
                                    <CldUploadButton
                                        onUpload={(result) => {
                                            setSupportingImage1(result.info.public_id)
                                        }}
                                        uploadPreset="kujxblsb"
                                        className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
                                        name='supporting-image-1'
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <label htmlFor="supporting-image-2">Supporting Image 2</label>
                                    {supportingImage2 && <CldImage src={supportingImage2} width={120} height={120} />}
                                    <CldUploadButton
                                        onUpload={(result) => {
                                            setSupportingImage2(result.info.public_id)
                                        }}
                                        uploadPreset="kujxblsb"
                                        className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
                                        name='supporting-image-2'
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <label htmlFor="supporting-image-3">Supporting Image 3</label>
                                    {supportingImage3 && <CldImage src={supportingImage3} width={120} height={120} />}
                                    <CldUploadButton
                                        onUpload={(result) => {
                                            setSupportingImage3(result.info.public_id)
                                        }}
                                        uploadPreset="kujxblsb"
                                        className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
                                        name='supporting-image-3'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4 w-full'>
                            <label htmlFor="eventTags">Add Tags: {tags && tags.join(", ")}</label>
                            <input
                                type="text"
                                id='eventTags'
                                name='eventTags'
                                placeholder='Event Tags'
                                className='border-2 border-black rounded-lg py-2 px-4'
                                rows='4'
                                cols='20'
                                value={tag}
                                onChange={e => setTag(e.target.value)}
                            />
                            <button className='py-2 px-4 rounded-lg bg-gray-500 text-white' onClick={() => {
                                setTags([...tags, tag])
                                setTag("")
                            }}>Add Tag</button>
                        </div>
                        <button className='bg-green-500 text-white rounded-lg py-4 px-8 mx-auto' >Submit</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default page