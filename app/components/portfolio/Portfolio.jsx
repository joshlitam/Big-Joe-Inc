import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import Footer from '../Footer'
import PreviewSection from './PreviewSection'


const Portfolio = () => {
    return (
        <div className='bg-blue-500 h-screen'>
            <Hero />
            <PreviewSection />
            <Footer />
        </div>
    )
}

export default Portfolio
