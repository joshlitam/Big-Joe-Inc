import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import Footer from '../Footer'
import PreviewSection from './PreviewSection'
import Carousel from '../Carousel'


const Portfolio = () => {
    return (
        <div className='bh-screen'>
            <Carousel />
            <PreviewSection />
            <Footer />
        </div>
    )
}

export default Portfolio
