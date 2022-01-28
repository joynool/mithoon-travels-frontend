import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../../components/Alert';
import { FaQuoteRight } from "react-icons/fa";

const MakeAdmin = () =>
{
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>
    {
        const user = data;
        fetch('https://lit-caverns-48381.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount) {
                    setSuccess(true);
                    reset();
                };
            });
    };

    return (
        <>
            <div className="flex justify-center items-end text-white text-2xl mb-5" style={{ fontFamily: 'Poiret One, cursive' }}>
                <FaQuoteRight className='text-3xl' />&nbsp; Make New Admin
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                <div className="md:flex border-2 border-dotted rounded-md px-16 py-2 mb-3">
                    <div className="md:w-full">
                        <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='email'>
                            Enter Email
                        </label>
                    </div>
                    <div className="md:w-full">
                        <input {...register("email")} className="w-60 bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='email' type="email" placeholder='Enter email for admin power' required />
                    </div>
                </div>
                <div className="md:w-2/3 text-center">
                    <button className="shadow bg-slate-700 hover:bg-white focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded" type="submit">
                        Make Admin
                    </button>
                </div>
                {success && <Alert title="Congrats...You have the power of Admin role" />}
            </form>
        </>
    );
};

export default MakeAdmin;
