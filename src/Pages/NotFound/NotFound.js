import React from 'react';
import { NavLink } from 'react-router-dom';
import fourOFour from './../../images/404.svg';

const NotFound = () =>
{
    return (
        <div style={{ backgroundImage: `url(${fourOFour})` }} className="bg-no-repeat bg-content bg-center flex justify-center items-center w-screen h-screen">
            <NavLink to={'/'}>
                <button className='text-2xl font-thin text-white bg-rose-600 hover:bg-rose-500 px-8 py-1 rounded-full'>
                    Go Home
                </button>
            </NavLink>
        </div>
    );
};

export default NotFound;
