"use client"
import React from 'react'

const Navbar = (props) => {

    return (
        <div className='w-full flex justify-center navbar-wrapper absolute p-4 z-10 text-white' style={{}}>
            <div className="navbar justify-between max-w-7xl">
                <div>
                    <a href="/" className="btn btn-ghost normal-case text-xl">Big Joe Inc</a>
                </div>
                <div className="flex justify-around gap-3">
                    <div className="contact-nav"><a href="/#contact-us">Contact Us</a></div>
                    <div>
                        <ul className='flex gap-3 mobile-links'>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/#about-us">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
