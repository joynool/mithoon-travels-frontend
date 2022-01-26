import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import login from './../../../images/login.png';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () =>
{
    const [isLogin, setIsLogin] = useState(false);
    const { authError, setAuthError, loginUsingGoogle } = useAuth();

    /*-----------------------------------------------------
                Google login handler
    -------------------------------------------------------*/
    const location = useLocation();
    const navigate = useNavigate();

    /*-----------------------------------------------------
        Implement toggle for login and register switcher 
    -------------------------------------------------------*/
    const toggleLogin = e =>
    {
        setIsLogin(e.target.checked);
        setAuthError('');
    };

    /*--------------------------------------------------- 
            Login page for authentication
    -----------------------------------------------------*/

    return (
        <>
            <Header />
            <div className='flex justify-evenly items-center my-10'>
                <img src={login} alt="login" className='hidden sm:block' width={350} />
                <div className='sm:w-1/3 flex flex-col justify-center items-center bg-slate-300 rounded px-5 py-16'>
                    <h2 style={{ fontFamily: 'Poiret One, cursive' }} className='mb-5 text-xl font-bold sm:text-3xl text-black'>
                        {
                            isLogin ? 'Log in to your account' : 'Sign Up with Mithoon Travels'
                        }
                    </h2>
                    <button onClick={() => loginUsingGoogle(location, navigate)} className='flex items-center text-lg text-black bg-white rounded-md hover:bg-gray-600 hover:text-white active:bg-blue-500 shadow-md px-5 py-1'>
                        <FcGoogle className='h-10 w-10 mr-3' />
                        {
                            isLogin ? 'Log in with Google' : 'Sign up with Google'
                        }
                    </button>
                    {
                        authError && <p className="text-red-600 font-semibold">
                            {authError}
                        </p>
                    }
                    <div className='my-5 text-black'>
                        <input onChange={toggleLogin} className='mr-2' type="checkbox" id="toggle" />
                        <label htmlFor="toggle">Already have an account?</label>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
