import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => 
                `flex items-center 
                ${sidebar
                    ? `flex-row-reverse justify-end text-[21px] py-2.5 px-4 rounded-[5px] transition-all duration-150 ease-in-out 
                    ${isActive ? 'bg-white font-bold' : 'hover:bg-white active:font-bold'}`
                    : `text-lg ${isActive ? 'font-semibold text-xl' : 'text-base'}`
                }`}
        >
            {title}
            <img src={emoji} alt="" className="w-8 ml-0 mr-2" />
        </NavLink>
    );
};

export default LinkWithIcon;
