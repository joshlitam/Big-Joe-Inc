'use client'
import React from 'react'
import Card from './Card'
import TransitionLeft from './TransitionLeft'
import Reveal from './Reveal'

let cards = [
  { "title": "EVENT ACTIVATIONS", "imgURL": "img/event-activation.png", "description": "From planning to logistics, all the way to event manpower, Big Joe Inc has got you covered" },
  { "title": "MERCHANDISE", "imgURL": "img/merchandise.png", "description": "Need some giveaways or prizes? Big Joe Inc sources the best materials to ensure the highest of quality merchandise, at the lowest of costs." },
  { "title": "ESPORTS AND BROADCAST", "imgURL": "img/headset.png", "description": "Looking to host your next Esports tournament? Big Joe Inc has a complete broadcasting and league operations team to ensure the quality and integrity of your event!" },
]

const AboutUs = () => {
  return (
    <div id="services" className="services-wrapper min-h-screen px-12 min-w-full flex justify-center items-center bg-gray-200">
      <div className="services-container min-h-screen max-w-7xl flex flex-col justify-around w-full">
        <h2 className='services-header text-2xl font-bold about-us-title text-red-500'>Services</h2>
        <div className="services-cards flex justify-around gap-8">
          {cards.map((card) => (
            <TransitionLeft>
              <Card key={card.title} title={card.title} imgURL={card.imgURL} description={card.description} />
            </TransitionLeft>
          ))}
        </div>
        <Reveal>
          <div className='services-footer text-5xl text-center font-black'>
            Big Joe Inc has a wide suite of services dedicated to provide the best event and customer experience.
          </div>
        </Reveal>

      </div>
    </div>
  )
}

export default AboutUs
