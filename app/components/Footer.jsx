import React from 'react'

const Footer = () => {
    return (

        <footer className="rounded-lg shadow p-4 bg-gray-200 dark:bg-gray-800">
            <div className="footer-container w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Big Joe Inc. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.facebook.com/bigjoeinc" target="_blank" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer
