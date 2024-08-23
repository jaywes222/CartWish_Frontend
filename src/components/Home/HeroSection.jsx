import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection = ({title, subtitle, link, image, altText}) => {
    return (
        <section className="hero_section grid md:grid-cols-2 grid-cols-1 h-[480px] bg-black text-white px-6 md:px-16 py-12 md:py-24">
            <div className="flex flex-col justify-center md:items-start items-center text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {title}
                </h2>
                <p className="text-lg md:text-2xl mb-8 w-full md:w-3/4">
                    {subtitle}
                </p>
                <Link to={link} className="py-4 px-6 uppercase tracking-widest font-bold border-2 border-white 
                rounded-full text-black bg-white transition-all duration-300 ease-in-out hover:bg-transparent
                hover:text-white">
                    Buy Now
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    src={image} 
                    alt={altText}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-300 ease-in-out transform hover:scale-105" 
                />
            </div>
        </section>
    );
}

export default HeroSection;
