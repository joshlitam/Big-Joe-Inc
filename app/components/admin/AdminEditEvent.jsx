import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";


const AdminEditEvent = ({ pictures, eventName, description, tags }) => {
  const [currentTags, setTags] = useState(tags)
  const [currentTag, setCurrentTag] = useState("")
  const [currentEventName, setCurrentEventName] = useState(eventName)
  const [currentEventDescription, setCurrentEventDescription] = useState(description)
  const [error, setError] = useState("")
  let newTags = []
  const handleDeleteTag = (tag) => {
    setTags((currentTags) => currentTags.filter(x => x !== tag))
  }

  const handleAddTag = (tag) => {
    if (!currentTags.includes(tag)) {
      setError("")
      setTags([...currentTags, tag])
      setCurrentTag("")
    } else {
      setError("tag already exists")
    }
  }

  const handleEventNameChange = (title) => {
    setCurrentEventName(title)
  }

  const handleEventDescriptionChange = (title) => {
    setCurrentEventDescription(title)
  }

  return (
    <div className='flex flex-col justify-center gap-8 h-full w-1/2 py-8'>
      <h1 className='text-7xl font-extrabold text-center text-red-500 mb-24'>Edit Event</h1>

      {/* Primary Image */}
      <div className='flex justify-center gap-4 w-full'>
        <h1 className='text-3xl text-start font-extrabold text-red-500 w-1/3'>Primary Image:</h1>
        <input className="text-3xl text-black bg-transparent w-2/3" value={currentEventName} onChange={(e) => handleEventNameChange(e.target.value)} type="text" />
      </div>

      {/* Event name */}
      <div className='flex justify-center gap-4 w-full'>
        <h1 className='text-3xl text-start font-extrabold text-red-500 w-1/3'>Event Name:</h1>
        <input className="text-3xl text-black bg-transparent w-2/3" value={currentEventName} onChange={(e) => handleEventNameChange(e.target.value)} type="text" />
      </div>

      {/* Event Description */}
      <div className='flex justify-center gap-4 w-full'>
        <h1 className='text-3xl text-start font-extrabold text-red-500 w-1/3'>Event Description:</h1>
        <textarea rows={5} cols={30} className="text-3xl text-black bg-transparent w-2/3 border-2 py-2 px-2 border-black" value={currentEventDescription} onChange={(e) => handleEventDescriptionChange(e.target.value)} type="text" />
      </div>

      {/* Tag form */}
      <div className='flex gap-4 w-full'>
        <h1 className="text-3xl text-start font-extrabold text-red-500 w-1/3">Current Tags:</h1>
        <div className="flex flex-col w-2/3 gap-4">
          <div className="flex flex-wrap gap-2">
            {currentTags.map((tag) => (
              <div className='flex'>
                <h1 className='text-3xl'>{tag}</h1>
                <button onClick={() => handleDeleteTag(tag)}><IoIosClose /></button>
              </div>
            ))}</div>
          <div className="flex gap-2">
            <input className="px-4 py-2 rounded-lg bg-gray-400 border-2 border-black placeholder-white text-white" type="text" placeholder='add tag' value={currentTag} onChange={(e) => setCurrentTag(e.target.value)} />
            <button className='px-4 py-2 rounded-lg bg-green-500' onClick={() => handleAddTag(currentTag)}>Submit</button>
          </div>
          {error && <h1 className='text-red-500'>{error}</h1>}
        </div>

      </div>
    </div>
    // End of tag
  )
}

export default AdminEditEvent