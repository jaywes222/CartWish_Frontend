import React from 'react';
import Star from '../../assets/star.png'
import '../../index.css'

const MovieCard = () => {
    return (
        <a href="" className="movie_card relative w-48 h-80 m-4 text-white rounded-xl overflow-hidden shadow-custom 
        transition-transform duration-200 hover:scale-105">
            <img 
                src="https://www.joblo.com/wp-content/uploads/2024/04/trap-final-poster-400x600.jpg" 
                alt="movie poster" 
                className="w-full h-full object-cover" 
            />
            <div className="movie_details absolute bottom-0 w-full p-3 bg-gradient-to-b from-transparent to-black 
            opacity-0 hover:opacity-100 flex flex-col justify-end transition-opacity duration-300">
                <h3 className="movie_details_heading text-base text-canary font-bold">Movie Name</h3>
                <div className="movie_date_rate flex items-center justify-between text-canary text-sm font-medium my-1">
                    <p>10-20-2020</p>
                    <p>8.0 <img src={Star} alt="rating icon" className='card_emoji w-5 h-5 ml-1' /></p>
                </div>
                <p className="movie_description text-sm font-montserrat">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aliquid numquam doloribus expedita obcaecati quaerat vero quam, amet aperiam omnis!
                </p>
            </div>
        </a>
    );
}

export default MovieCard;
