import React from 'react'

const AboutUs = () => {
  return (
    <div className="about-us min-w-full h-full flex pt-24 about-us-wrapper justify-center px-16 bg-gray-200">
      <div className="about-us-container max-w-7xl flex flex-col w-full">
        <h2 className='text-2xl font-bold about-us-title text-red-500'>About Us</h2>
        <div className="mt-4 about-us-text flex">
          <div className="about-us-left text-5xl font-black  flex-1">Big Joe Inc offers end-to-end services for all your event needs</div>
          <div className="about-us-right text-xl font-bold text-right text-gray-500 flex-1">
            <p className='about-us-p pl-36'> With almost 10 years of event experience, Big Joe Inc serves as the go-to agency for
              accomplishing all event requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
