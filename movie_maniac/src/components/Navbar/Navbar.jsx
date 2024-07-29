import React from 'react'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar flex items-center justify-between py-0 px-32 border-b-2 border-b-platinum mb-0">
                <h1 className='text-3xl text-canary'>Movie Maniac</h1>

                <div className="navbar_links flex items-center text-white text-2xl font-medium space-x-8 py-4">
                    <a href="" className="flex items-center">
                        Popular
                        <img src={Fire} alt="fire emoji" className='navbar_emoji w-6 h-6 ml-2' />
                    </a>
                    <a href="" className="flex items-center">
                        Top Rated
                        <img src={Star} alt="star emoji" className='navbar_emoji w-6 h-6 ml-2' />
                    </a>
                    <a href="" className="flex items-center">
                        Upcoming
                        <img src={Party} alt="partying-face emoji" className='navbar_emoji w-6 h-6 ml-2' />
                    </a>
                </div>
            </nav>

        </>
    )
}

export default Navbar
