"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = (props) => {

    return (
        <div className='w-full flex justify-center navbar-wrapper absolute p-4 z-10 text-white' style={{}}>
            <div className="navbar justify-between max-w-7xl">
                <div>
                    <Link href="/" className="btn btn-ghost normal-case text-xl">Big Joe Inc</Link>
                </div>
                <div className="flex justify-around gap-3">
                    <div className="contact-nav"><Link href="/#contact-us">Contact Us</Link></div>
                    <div>
                        <ul className='flex gap-3 mobile-links'>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/#about-us">About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
