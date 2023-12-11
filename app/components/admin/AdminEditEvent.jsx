import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";


const AdminEditEvent = ({ pictures, eventName, description, tags }) => {
  const [currentTags, setTags] = useState(tags)
  const [currentTag, setCurrentTag] = useState("")
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

  return (
    <div className='flex flex-col justify-center gap-8 h-full max-w-7xl py-8'>
      <h1 className='text-7xl font-extrabold text-center text-white'>EDIT EVENT</h1>

    {/* Tag form */}
      <div className='flex flex-col gap-4'>
        <h1 className="text-xl text-start font-extrabold text-red-500">Current Tags</h1>
        <div className="flex gap-2">{currentTags.map((tag) => (
          <div className='flex'>
            <h1>{tag}</h1>
            <button onClick={() => handleDeleteTag(tag)}><IoIosClose /></button>
          </div>
        ))}</div>
        <div className="flex gap-2">
          <input className="px-4 py-2 rounded-lg" type="text" placeholder='add tag' value={currentTag} onChange={(e) => setCurrentTag(e.target.value)} />
          <button className='px-4 py-2 rounded-lg bg-green-500' onClick={() => handleAddTag(currentTag)}>Submit</button>
        </div>
        {error && <h1 className='text-red-500'>{error}</h1>}
      </div>
    </div>
    // End of tag
  )
}

export default AdminEditEvent