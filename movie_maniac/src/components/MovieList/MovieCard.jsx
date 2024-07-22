import React from 'react';
import Star from '../../assets/star.png'

const MovieCard = () => {
    return (
        <a href="" className="movie_card">
            <img 
                src="https://imgs.search.brave.com/l80oTQYxDioB__tNgvi7UkT2HUX4IRfiS_o0eyPFwEU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/am9ibG8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L3RyYXAtZmluYWwt/cG9zdGVyLTQwMHg2/MDAuanBn" 
                alt="movie poster" 
                className="movie_poster w-full h-auto block" 
            />

            <div className="movie_details">
                <h3 className="movie_details_heading">Movie Name</h3>
                <div className="movie_date_rate">
                    <p>10-20-2020</p>
                    <p>8.0 <img src={ Star } alt="rating icon" className='card_emoji'/></p>
                </div>
                <p className="movie_description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aliquid numquam doloribus expedita obcaecati quaerat vero quam, amet aperiam omnis!
                </p>
            </div>
        </a>
    );
}

export default MovieCard;
