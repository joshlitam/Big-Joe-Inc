"use client"
import React from 'react'

const Navbar = () => {

    return (
        <div className='w-full flex justify-center navbar-wrapper absolute p-4 text-white'>
            <div className="navbar justify-between">
                <div>
                    <a href="/" className="btn btn-ghost normal-case text-xl">Big Joe Inc</a>
                </div>
                <div className="flex justify-around gap-3">
                    <div className="contact-nav"><a href="">Contact Us</a></div>
                    <div>
                        <ul className='flex gap-3 mobile-links'>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
