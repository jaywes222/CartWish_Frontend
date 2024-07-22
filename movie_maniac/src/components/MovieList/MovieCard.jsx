import React from 'react';
import Star from '../../assets/star.png'
import '../../index.css'

const MovieCard = () => {
    return (
        <a href="" className="movie_card relative w-48 h-80 m-4 text-white rounded-xl overflow-hidden shadow-custom">
            <img 
                src="https://imgs.search.brave.com/l80oTQYxDioB__tNgvi7UkT2HUX4IRfiS_o0eyPFwEU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/am9ibG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L3RyYXAtZmluYWwt/cG9zdGVyLTQwMHg2/MDAuanBn" 
                alt="movie poster" 
                className="movie_poster w-full h-auto block" 
            />

            <div className="movie_details absolute flex flex-col justify-end top-0 w-full h-full p-3 
            bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100">
                <h3 className="movie_details_heading text-base text-canary font-bold">Movie Name</h3>
                <div className="movie_date_rate flex items-center justify-between text-canary text-sm font-medium my-1 mx-0">
                    <p>10-20-2020</p>
                    <p>8.0 <img src={ Star } alt="rating icon" className='card_emoji w-5 h-5 ml-1'/></p>
                </div>
                <p className="movie_description text-sm font-montserrat">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aliquid numquam doloribus expedita obcaecati quaerat vero quam, amet aperiam omnis!
                </p>
            </div>
        </a>
    );
}

export default MovieCard;
