import React from 'react'

const Descriptions = () => {
  return (
    <div className='descriptions-wrapper py-24 min-h-3/5 h-full flex justify-center bg-gray-200'>
      <div className="descriptions-container max-w-7xl w-full flex flex-col justify-around">
        <div className='description-item flex flex-col gap-8 justify-around w-full'>
          <div className="description-content flex justify-around w-full">
            <div className="div description-left flex flex-1 justify-center items-center">
              <div className="div description-box min-w-36 w-36 h-36 bg-red-500 border-red border-2 rounded-xl flex justify-center items-center text-white text-5xl">
                <p>1</p>
              </div>
            </div>
            <div className="div description-right flex flex-2 justify-start items-center">
              <div className="description-text flex justify-center items-center text-xl font-bold text-right text-gray-500">
                <p className='description-p'>The number 1 end-to-end service provider for all event needs</p>
              </div>
            </div>
          </div>
          <div className="description-content flex justify-around w-full">
            <div className="div description-left flex flex-1 justify-center items-center">
              <div className="div description-box min-w-36 w-36 h-36 bg-red-500 border-red border-2 rounded-xl flex justify-center items-center text-white text-5xl">
                <p>10+</p>
              </div>
            </div>
            <div className="div description-right flex flex-2 justify-start items-center">
              <div className="description-text flex justify-center items-center text-xl font-bold text-right text-gray-500">
                <p className='description-p'>Years in the events industry</p>
              </div>
            </div>
          </div>
          <div className="description-content flex justify-around w-full">
            <div className="div description-left flex flex-1 justify-center items-center">
              <div className="div description-box min-w-36 w-36 h-36 bg-red-500 border-red border-2 rounded-xl flex justify-center items-center text-white text-5xl">
                <p>20+</p>
              </div>
            </div>
            <div className="div description-right flex flex-2 justify-start items-center">
              <div className="description-text flex justify-center items-center text-xl font-bold text-right text-gray-500">
                <p className='description-p'>Partners and brands satisfied</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Descriptions
