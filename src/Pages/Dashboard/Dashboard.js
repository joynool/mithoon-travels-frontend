import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from './../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';
import { ChevronLeftIcon, LogoutIcon, MenuIcon } from '@heroicons/react/outline';
import { MdAccountBalance, MdAccountBox, MdMoney } from "react-icons/md";

const Dashboard = () =>
{
    const [trigger, setTrigger] = useState(false);
    const { user, logOut } = useAuth();

    return (
        <>
            <Header />
            <div className='antialiased min-h-screen relative lg:flex'>
                <nav className={`absolute lg:relative z-10 w-80 lg:transform-none lg:opacity-100 bg-gray-600 text-white h-screen ${!trigger ? 'inset-0 opacity-0 transform duration-200 -translate-x-full ease-out' : 'inset-0 opacity-100 transform duration-200 translate-x-0 ease-in'}`}>
                    <div className='flex items-center justify-between m-2'>
                        <span className='font-light text-xl sm:text-xl p-2'>{user.displayName}</span>
                        <LogoutIcon onClick={logOut} className='h-8 w-8 mr-1 hover:bg-white hover:text-black hover:rounded cursor-pointer' />
                        <ChevronLeftIcon onClick={() => setTrigger(false)} className='h-12 p-2 hover:bg-gray-500 rounded-md cursor-pointer lg:hidden' />
                    </div>
                    <ul className='mt-8 mx-2 py-10 border-y-2'>
                        <li>
                            <Link to={"/dashboard/annual"} onClick={() => setTrigger(false)} className='px-4 py-2 text-xl hover:bg-gray-700 rounded-md flex items-center mb-5'>
                                <MdAccountBalance />&nbsp;&nbsp;Blogs Management
                            </Link>
                            <Link to={"/dashboard/individual"} onClick={() => setTrigger(false)} className='px-4 py-2 text-xl hover:bg-gray-700 rounded-md flex items-center mb-5'>
                                <MdAccountBox />&nbsp;&nbsp;Blogs Approval
                            </Link>
                            <Link to={"/dashboard/deposit"} onClick={() => setTrigger(false)} className='px-4 py-2 text-xl hover:bg-gray-700 rounded-md flex items-center'>
                                <MdMoney />&nbsp;&nbsp;Make Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='relative z-0 lg:flex-grow'>
                    <header className='flex items-center bg-gray-700 text-white'>
                        <MenuIcon onClick={() => setTrigger(true)} className='h-12 p-2 ml-2 hover:bg-gray-600 rounded-md cursor-pointer lg:hidden' />
                        <div className='lg:mx-auto'>
                            <span className='block text-xl sm:text-3xl font-light p-4'>
                                Welcome to DASHBOARD
                            </span>
                        </div>
                    </header>
                    <section className='m-5'>
                        <Outlet />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
