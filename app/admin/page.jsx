// 'use client'
// import React from 'react'
// import { CldImage, CldUploadButton } from 'next-cloudinary';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const page = () => {

//     const [imageId, setImageId] = useState("")
//     const [eventTitle, setEventTitle] = useState("")
//     const [eventDesc, setEventDesc] = useState("")
//     const [supportingImage1, setSupportingImage1] = useState("")
//     const [supportingImage2, setSupportingImage2] = useState("")
//     const [supportingImage3, setSupportingImage3] = useState("")
//     const [tag, setTag] = useState("")
//     const [tags, setTags] = useState([])
//     const [buttonStatus, setButtonStatus] = useState(false)
//     const [buttonName, setButtonName] = useState("Submit")

//     const router = useRouter()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch('/api/events', {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     "eventName": eventTitle,
//                     "description": eventDesc,
//                     "primaryImage": imageId,
//                     "supportingImage": [supportingImage1, supportingImage2, supportingImage3],
//                     "tags": tags
//                 })
//             })

//             if (res.ok) {
//                 router.push("/portfolio")
//             } else {
//                 throw new Error("failed to create event")
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div>
//             <div className="admin h-screen w-screen flex justify-center items-center py-8">
//                 <div className='admin h-screen w-screen flex flex-col justify-center items-center gap-8 max-w-7xl'>
//                     <form action="/api/events" onSubmit={handleSubmit} className='flex flex-col justify-center items-start gap-8 w-full h-full'>
//                         <div className='flex flex-col justify-center items-center gap-2 w-full'>
//                             <h2 className='text-5xl font-bold text-gray-500 mb-8'>Event Uploader</h2>
//                             <label htmlFor="eventName">Event Name</label>
//                             <input type="text" id='eventName' name='eventName' placeholder='Event Name' value={eventTitle} onChange={e => setEventTitle(e.target.value)} className='border-2 border-black rounded-lg py-2 px-4' />
//                         </div>
//                         <div className='flex flex-col justify-center items-center gap-2 w-full'>
//                             <label htmlFor="eventDescription">Event Description</label>
//                             <textarea
//                                 type="text"
//                                 id='eventDescription'
//                                 name='eventDescription'
//                                 placeholder='Event Description'
//                                 onChange={e => setEventDesc(e.target.value)}
//                                 value={eventDesc}
//                                 className='border-2 border-black rounded-lg py-2 px-4'
//                                 rows='5'
//                                 cols='40'
//                             />
//                         </div>
//                         <div className="flex flex-col justify-center items-center gap-2 w-full">
//                             <label htmlFor="image">Event Image</label>
//                             <div style={{ width: "200px", height: "150px" }} className='bg-gray-500 text-center flex justify-center items-center text-white'>
//                                 {imageId ? <CldImage src={imageId} width={200} height={200} /> : <h1>Placeholder Image</h1>}
//                             </div>

//                             <CldUploadButton
//                                 onUpload={(result) => {
//                                     setImageId(result.info.public_id)
//                                 }}
//                                 uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
//                                 className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
//                                 name='image'
//                             />
//                         </div>
//                         <div className="flex flex-col justify-center items-center gap-2 w-full">
//                             <h3 className='text-3xl text-gray-500 font-bold mb-8'>Supporting Images</h3>
//                             <div className="flex gap-8">
//                                 <div className="flex flex-col justify-center items-center gap-4">
//                                     <label htmlFor="supporting-image-1">Supporting Image 1</label>
//                                     <div style={{ width: "200px", height: "150px" }} className='bg-gray-500 text-center flex justify-center items-center text-white'>
//                                         {supportingImage1 ? <CldImage src={supportingImage1} width={200} height={200} /> : <h1>Placeholder Image</h1>}
//                                     </div>
//                                     <CldUploadButton
//                                         onUpload={(result) => {
//                                             setSupportingImage1(result.info.public_id)
//                                         }}
//                                         uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
//                                         className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
//                                         name='supporting-image-1'
//                                     />
//                                 </div>
//                                 <div className="flex flex-col justify-center items-center gap-4">
//                                     <label htmlFor="supporting-image-2">Supporting Image 2</label>
//                                     <div style={{ width: "200px", height: "150px" }} className='bg-gray-500 text-center flex justify-center items-center text-white'>
//                                         {supportingImage2 ? <CldImage src={supportingImage2} width={200} height={200} /> : <h1>Placeholder Image</h1>}
//                                     </div>
//                                     <CldUploadButton
//                                         onUpload={(result) => {
//                                             setSupportingImage2(result.info.public_id)
//                                         }}
//                                         uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
//                                         className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
//                                         name='supporting-image-2'
//                                     />
//                                 </div>
//                                 <div className="flex flex-col justify-center items-center gap-4">
//                                     <label htmlFor="supporting-image-3">Supporting Image 3</label>
//                                     <div style={{ width: "200px", height: "150px" }} className='bg-gray-500 text-center flex justify-center items-center text-white'>
//                                         {supportingImage3 ? <CldImage src={supportingImage3} width={200} height={200} /> : <h1>Placeholder Image</h1>}
//                                     </div>
//                                     <CldUploadButton
//                                         onUpload={(result) => {
//                                             setSupportingImage3(result.info.public_id)
//                                         }}
//                                         uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
//                                         className='border-2 border-black bg-gray-500 rounded-lg py-2 px-6 text-white'
//                                         name='supporting-image-3'
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='flex flex-col justify-center items-center gap-4 w-full'>
//                             <label htmlFor="eventTags">Add Tags: {tags && tags.join(", ")}</label>
//                             <input
//                                 type="text"
//                                 id='eventTags'
//                                 name='eventTags'
//                                 placeholder='Event Tags'
//                                 className='border-2 border-black rounded-lg py-2 px-4'
//                                 rows='4'
//                                 cols='20'
//                                 value={tag}
//                                 onChange={e => setTag(e.target.value)}
//                             />
//                             <button id="submitButton" disabled={buttonStatus} className='py-2 px-4 rounded-lg bg-gray-500 text-white' onClick={(e) => {
//                                 e.preventDefault()

//                                 setTags([...tags, tag])
//                                 setTag("")
//                             }}>Add Tags</button>
//                         </div>
//                         <button type="submit" onClick={() => {
//                             setButtonStatus(true)
//                             setButtonName("Submitting..")
//                         }} className='bg-green-500 text-white rounded-lg py-4 px-8 mx-auto' >{buttonName}</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page

'use client'
import useSWR from 'swr';
import Image from 'next/image';
import EditEvent from '../components/admin/EditEvent';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR(`/api/events`, fetcher)

    if (error) return <div className='h-screen w-screen'>failed to load..</div>
    if (!data) return <div className='h-screen w-screen flex justify-center items-center'><Image src='/img/loading.png' width={200} height={200} alt={"loading"} /></div>
    const event = data.events
    console.log(event)

    return (
        <>
            <h1 className='text-center text-5xl font-extrabold text-blue-500 mt-12'>Admin Page</h1>
            <EditEvent events={event} />
        </>

    )
}
