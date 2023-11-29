import React from 'react'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <div>
      <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>Register</h1>

        <form className='flex flex-col gap-3 '>
        <input className='' type="text" placeholder='Full Name' />
            <input className='' type="text" placeholder='Email' />
            <input className='' type="password" placeholder='Password' />
            <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Register</button>

            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>Error Message</div>

            <Link className='text-sm mt-3 text-right' href={'/admin/'}>Already have an account? <span className='underline'>Login</span></Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default RegisterForm
