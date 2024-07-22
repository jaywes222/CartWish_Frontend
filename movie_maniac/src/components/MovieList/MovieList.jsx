import React, { useState } from 'react'

import Fire from '../../assets/fire.png'
import MovieCard from './MovieCard';

const MovieList = () => {
    const [activeTab, setActiveTab] = useState('8+ Star');
    const tabs = ["8+ Star", "7+ Star", "6+ Star"];
    const handleClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <section className="movie_list mt-0">
                {/* Header */}
                <header className="movie_list_header flex items-center justify-between mb-0 px-3 py-4">
                    <h2 className="movie_list_heading flex items-center text-xl text-canary font-bold">
                        Popular
                        <img src={Fire} alt="fire emoji" className="navbar_emoji w-6 h-6 ml-2" />
                    </h2>
            
                    <div className="movie_list_fs flex items-center space-x-2">
                        <ul className="movie_filter flex items-center list-none text-lg">
                            {tabs.map((text, index) => (
                                <li
                                    key={index}
                                    className={`movie_filter_item px-3 py-2 cursor-pointer border-b-2 ${activeTab === text ? 'border-b-platinum font-medium' : 'border-b-transparent'}`}
                                    onClick={() => handleClick(text)}
                                >
                                    {text}
                                </li>
                            ))}
                        </ul>

            
                        <select
                            name="Sort"
                            className="movie_sorting bg-white text-black font-medium font-montserrat h-8 px-2 py-1 border-b-2 border-gray-300 outline-none rounded-none"
                        >
                            <option value="" disabled selected>Select sorting option</option>
                            <option value="date">Date</option>
                            <option value="rating">Rating</option>
                        </select>
            
                        <select
                            name="order"
                            className="movie_sorting bg-white text-black font-medium font-montserrat h-8 px-2 py-1 border-b-2 border-gray-300 outline-none rounded-none"
                        >
                            <option value="" disabled selected>Select order</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </header>

                <div className="movie_cards">
                    <MovieCard />
                </div>
            </section>


        </>
    )
}

export default MovieList
