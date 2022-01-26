import React from 'react';
import { NavLink } from 'react-router-dom';
import
{
    UserIcon,
    LogoutIcon
} from '@heroicons/react/outline';
import HeaderItem from '../../../components/HeaderItem';
import logo from './../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () =>
{
    const { user, logOut } = useAuth();

    return (
        <header className='sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-around bg-gray-800 py-1 shadow-lg'>
            <div className='hover:text-white cursor-pointer m-5 lg:m-1'>
                <a className='flex justify-center items-center border border-slate-600 rounded py-1 px-3' href="/">
                    <img src={logo} alt='b4b biz club logo' width={80} height={80} />
                    <h2 style={{ fontFamily: 'Poiret One, cursive' }} className='text-2xl'>
                        Mith00n<br />Travels
                    </h2>
                </a>
            </div>
            <div className='flex flex-grow justify-center max-w-2xl'>
                <NavLink to={'/home'}>
                    <HeaderItem title='HOME' />
                </NavLink>
                <NavLink to={'/rules'}>
                    <HeaderItem title='BLOGS' />
                </NavLink>
                <NavLink to={'/dashboard'}>
                    <HeaderItem title='GALLERY' />
                </NavLink>
                <NavLink to={'/contact'}>
                    <HeaderItem title='CONTACT' />
                </NavLink>
            </div>
            <div className='hover:text-white cursor-pointer my-2'>
                {
                    user.email ?
                        <div className='flex flex-col lg:flex-row items-center justify-center'>
                            <h1 className='text-xl font-thin mb-2 lg:mr-5'>{user.displayName}</h1>
                            <button onClick={logOut} className='flex items-center text-lg text-black bg-white rounded-md hover:bg-gray-600 hover:text-white active:bg-blue-500 shadow-md px-2 py-1'>
                                <LogoutIcon className='h-7 w-7' />
                            </button>
                        </div>
                        :
                        <NavLink to={'/login'} className={'flex items-center justify-between'}>
                            <UserIcon className='h-7 mr-2' />
                        </NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
