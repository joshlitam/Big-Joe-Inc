import React from 'react'

const AboutUs = () => {
  return (
    <div className="about-us min-h-3/4 min-w-full h-full flex mt-32 about-us-wrapper justify-center px-16">
      <div className="about-us-container max-w-7xl flex flex-col w-full">
        <h2 className='text-3xl font-bold about-us-title text-red-700'>About Us</h2>
        <div className="mt-4 about-us-text flex">
          <div className="about-us-left text-4xl font-black  flex-1">Big Joe Inc offers end-to-end services for all your event needs</div>
          <div className="about-us-right text-xl font-bold text-right text-gray-500 flex-1">
            <p className='pl-36'> With almost 10 years of event experience, Big Joe Inc serves as the go-to agency for
              accomplishing all event requirements.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUs
