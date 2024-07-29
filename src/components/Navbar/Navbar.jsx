import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen bg-gray-400'>
            <nav className='navbar flex items-center justify-between py-2 px-10 w-full'>
                <div className='flex items-center'>
                    <h1 className="navbar_heading mr-5 text-4xl font-montserrat">CartWish</h1>
                    <form action="" className="navbar_form flex items-center w-100 h-10 border-2 border-solid border-gray-300 rounded-md p-1">
                        <input type="text" className='navbar_search font-montserrat flex-1 h-full py-0 px-2 text-lg font-medium border-none outline-none' placeholder='Search Products' />
                        <button type='submit' className="search_btn font-montserrat py-0 px-2 text-xl font-medium rounded-md bg-majorelle-blue text-white cursor-pointer">Search</button>
                    </form>
                </div>
            
                <div>Right</div>
            </nav>
        </div>
    )  
}  

export default Navbar
