import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import login from './../../../images/login.png';

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
        <div className='lg:w-2/3 flex flex-col items-center justify-center mx-auto border-2 rounded-lg my-5 wow animate__animated animate__zoomIn'>
            <img src={login} alt="b4b logo" width={600} height={600} />
            <h2 className='mb-5 text-xl sm:text-3xl'>
                {
                    isLogin ? 'Log in to your account' : 'Sign Up with b4b BizClub'
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
            <div className='my-5'>
                <input onChange={toggleLogin} className='mr-2' type="checkbox" id="toggle" />
                <label htmlFor="toggle">Already have an account?</label>
            </div>
        </div>
    );
};

export default Login;
