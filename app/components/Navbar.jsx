"use client"
import React from 'react'

const Navbar = () => {

    return (
        <div className='flex justify-center p-2 navbar-wrapper bg-white'>
            <div className="navbar justify-between bg-white max-w-7xl">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">Big Joe Inc</a>
                </div>
                <div className="flex gap-3">
                    <div className="contact-nav">Contact Us</div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Contact Us</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex gap-3 mobile-links'>
                            <li>Portfolio</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
