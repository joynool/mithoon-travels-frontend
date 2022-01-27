import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../../components/Alert';

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-8 mt-6 lg:mt-0 rounded shadow bg-white">
            <div className="md:flex border-2 border-dotted rounded-md px-16 py-2 mb-3">
                <div className="md:w-full">
                    <label className="text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor='email'>
                        Enter Email
                    </label>
                </div>
                <div className="md:w-full">
                    <input className="text-black border-2 border-dotted rounded-md px-2" id='email' {...register("email")} type="email" required />
                    <p className="py-2 text-sm text-gray-600">Add email to make new admin</p>
                </div>
            </div>
            <div className="md:w-2/3 text-center">
                <button className="shadow bg-slate-700 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Make Admin
                </button>
            </div>
            {success && <Alert title="Congrats...You have the power of Admin role" />}
        </form>
    );
};

export default MakeAdmin;
