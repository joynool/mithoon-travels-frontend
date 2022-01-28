import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../../components/Alert';
import Error from '../../components/Error';
import { FaQuoteRight } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';

const ShareExperience = () =>
{
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>
    {
        fetch('https://lit-caverns-48381.herokuapp.com/blogs', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>
            {
                if (result.insertedId) {
                    setSuccess(true);
                    reset();
                } else {
                    setFail(true);
                };
            });
    };

    return (
        <>
            <div className="flex justify-center items-end text-white text-2xl mb-5" style={{ fontFamily: 'Poiret One, cursive' }}>
                <FaQuoteRight className='text-3xl' />&nbsp; Share Your Experience
            </div>
            <div className='bg-white rounded-md p-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='md:mx-40'>
                    <div className="my-3 flex flex-col">
                        <label className="text-gray-600 font-bold mb-3 md:mb-0 pr-4" htmlFor='title'>
                            Blog Title
                        </label>
                        <input {...register("title")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='title' type="text" placeholder='Enter your blog title' required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='description'>
                            Blog Description
                        </label>
                        <textarea {...register("description")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='description' placeholder='Enter your blog description' required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='img'>
                            Blog Image
                        </label>
                        <input {...register("img")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='img' type="text" placeholder='Enter your blog image link' required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='duration'>
                            Stay Duration
                        </label>
                        <input {...register("duration")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='duration' type="text" placeholder='How many days yor are stayed' required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='price'>
                            Total Cost
                        </label>
                        <input {...register("price")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='price' type="number" placeholder='Total travel cost' required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='name'>
                            Your Name
                        </label>
                        <input {...register("name")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='name' type="text" defaultValue={user.displayName} required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='email'>
                            Your Email
                        </label>
                        <input {...register("email")} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='email' type="email" defaultValue={user.email} required />
                    </div>
                    <div className="text-center pt-3">
                        <button className="shadow bg-slate-700 hover:bg-white focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded" type="submit">
                            Share My Blog
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        {success && <Alert title="Your blog published successfully !" />}
                        {fail && <Error errorMgs="Your blog publish failed !" />}
                    </div>
                </form>
            </div>
        </>
    );
};

export default ShareExperience;
