import React from 'react'

const brands = [
  {"imgUrl":"/img/gatorade.png", "alt":"gatorade logo"},
  {"imgUrl":"/img/havaianas.png", "alt":"havaianas logo"},
  {"imgUrl":"/img/mountaindew.png", "alt":"mountain dew logo"},
  {"imgUrl":"/img/pepsi.png", "alt":"pepsi logo"},
  {"imgUrl":"/img/phoenix.png", "alt":"phoenix logo"},
  {"imgUrl":"/img/quaker.png", "alt":"quaker logo"},
  {"imgUrl":"/img/smart.png", "alt":"smart logo"},
  {"imgUrl":"/img/dito.jpg", "alt":"dito logo"},
]

const AboutUs = () => {
  return (
    <div className="about-us min-h-3/4 min-w-full h-full flex mt-48 about-us-wrapper justify-center px-16">
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
        <div className='about-us-brands mt-32'>
            <h2 className='about-us-brands-header text-4xl text-center font-extrabold text-red-500'>Brands we've worked with</h2>
            <div className="about-us-brands grid grid-cols-4 mt-16 gap-y-12">
              {brands.map((brand) => (
                <img className="col-span-1 w-3/4" src={brand.imgUrl} alt={brand.alt} key={brand.alt} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs
