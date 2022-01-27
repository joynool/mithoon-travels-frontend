import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import login from './../../../images/login.png';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { StarIcon } from '@heroicons/react/outline';
import Alert from '../../../components/Alert';
import Error from '../../../components/Error';
import { useForm } from 'react-hook-form';

const Login = () =>
{
    const [isLogin, setIsLogin] = useState(false);
    const { loginUser, registerUser, loginUsingGoogle, authError, setAuthError, isLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [loginSuccess, setLoginSuccess] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const toggleLogin = e =>
    {
        setIsLogin(e.target.checked);
        setAuthError('');
    };

    const onSubmit = data =>
    {
        if (data.name) {
            if (data.password !== data.password2) {
                alert('Your password did not match !');
                return;
            };
            registerUser(data.email, data.password, data.name, navigate);
            setLoginSuccess(true);
            reset();
        }
        else {
            loginUser(data.email, data.password, location, navigate);
            setLoginSuccess(true);
            reset();
        };
    };

    /*--------------------------------------------------- 
            Login page for authentication
    -----------------------------------------------------*/

    return (
        <>
            <Header />
            <div className='flex justify-evenly items-center my-10'>
                <img src={login} alt="login" className='hidden sm:block' width={350} />
                <div className='sm:w-1/3 flex flex-col justify-center items-center bg-slate-300 rounded px-5 py-5'>
                    <h2 style={{ fontFamily: 'Poiret One, cursive' }} className='mb-5 text-xl font-bold sm:text-3xl text-black'>
                        {
                            isLogin ? 'Log in to your account' : 'Sign Up with Mithoon Travels'
                        }
                    </h2>
                    {
                        isLogin ?
                            <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-dotted border-slate-800 rounded-md p-5'>
                                <div className="my-3 flex flex-col sm:block">
                                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='email'>
                                        Your Email
                                    </label>
                                    <input {...register("email")} className="w-60 text-black float-right border-2 border-dotted rounded-md px-2" id='email' type="email" placeholder='Enter your email' required />
                                </div>
                                <div className="my-3 flex flex-col sm:block">
                                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='password1'>
                                        Your Password
                                    </label>
                                    <input {...register("password")} className="w-60 text-black float-right border-2 border-dotted rounded-md px-2" id='password1' type="password" placeholder='Enter your password' required />
                                </div>
                                <div className="text-center pt-3">
                                    <button className="shadow bg-slate-700 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                        Login
                                    </button>
                                </div>
                                <div>
                                    {isLoading &&
                                        <div className='flex items-center justify-center'>
                                            <StarIcon className='animate-spin h-10 w-10 text-white' />
                                        </div>}
                                    {loginSuccess && <Alert title="Login successfully !" />}
                                    {authError && <Error errorMgs={authError} />}
                                </div>
                            </form>
                            :
                            <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-dotted border-slate-800 rounded-md p-5'>
                                <div className="my-3 flex flex-col sm:block">
                                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='name'>
                                        Your Name
                                    </label>
                                    <input {...register("name")} className="w-60 text-black float-right border-2 border-dotted rounded-md px-2" id='name' type="text" placeholder='Enter your name' required />
                                </div>
                                <div className="my-3 flex flex-col sm:block">
                                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='email'>
                                        Your Email
                                    </label>
                                    <input {...register("email")} className="w-60 text-black float-right border-2 border-dotted rounded-md px-2" id='email' type="email" placeholder='Enter your email' required />
                                </div>
                                <div className="my-3 flex flex-col sm:block">
                                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='password1'>
                                        Your Password
                                    </label>
                                    <input {...register("password")} className="w-60 text-black float-right border-2 border-dotted rounded-md px-2" id='password1' type="password" placeholder='Enter your password' required />
                                </div>
                                <div className="my-3 flex flex-col sm:block">
                                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='password2'>
                                        Retype Password
                                    </label>
                                    <input {...register("password2")} className="w-60 text-black float-right border-2 border-dotted rounded-md px-2" id='password2' type="password" placeholder='Retype your password' required />
                                </div>
                                <div className="text-center pt-3">
                                    <button className="shadow bg-slate-700 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                        Register
                                    </button>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    {isLoading &&
                                        <div className='flex items-center justify-center'>
                                            <StarIcon className='animate-spin h-10 w-10 text-white' />
                                        </div>}
                                    {loginSuccess && <Alert title="User created successfully !" />}
                                    {authError && <Error errorMgs={authError} />}
                                </div>
                            </form>
                    }
                    <span className='text-black text-2xl my-3'>............... Or ...............</span>
                    <button onClick={() => loginUsingGoogle(location, navigate)} className='flex items-center text-lg text-black bg-white rounded-md hover:bg-gray-600 hover:text-white active:bg-blue-500 shadow-md px-5 py-1 mb-2'>
                        <FcGoogle className='h-10 w-10 mr-3' />
                        {
                            isLogin ? 'Log in with Google' : 'Sign up with Google'
                        }
                    </button>
                    {authError && <Error errorMgs={authError} />}
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
