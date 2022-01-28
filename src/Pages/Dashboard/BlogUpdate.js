import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaQuoteRight } from "react-icons/fa";
import Swal from 'sweetalert2';

const BlogUpdate = () =>
{
    const { id } = useParams();
    const [updateBlog, setUpdateBlog] = useState({});

    const titleRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const durRef = useRef();
    const priceRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() =>
    {
        fetch(`https://lit-caverns-48381.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setUpdateBlog(data));
    }, [id]);

    const handleUpdateBlog = e =>
    {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = desRef.current.value;
        const img = imgRef.current.value;
        const duration = durRef.current.value;
        const price = priceRef.current.value;
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const updatedBlog = { title, description, img, duration, price, name, email };

        fetch(`https://lit-caverns-48381.herokuapp.com/blogs/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your blog has been updated.',
                        'success'
                    )
                }
            });
    };

    return (
        <>
            <div className="flex justify-center items-end text-white text-2xl mb-5" style={{ fontFamily: 'Poiret One, cursive' }}>
                <FaQuoteRight className='text-3xl' />&nbsp; Update Blog Data
            </div>
            <div className='bg-white rounded-md p-5'>
                <form onSubmit={handleUpdateBlog} className='md:mx-40'>
                    <div className="my-3 flex flex-col">
                        <label className="text-gray-600 font-bold mb-3 md:mb-0 pr-4" htmlFor='title'>
                            Blog Title
                        </label>
                        <input ref={titleRef} defaultValue={updateBlog.title} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='title' name='title' type="text" required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='description'>
                            Blog Description
                        </label>
                        <textarea ref={desRef} defaultValue={updateBlog.description} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='description' name='description' required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='img'>
                            Blog Image
                        </label>
                        <input ref={imgRef} defaultValue={updateBlog.img} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='img' name='img' type="text" required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='duration'>
                            Stay Duration
                        </label>
                        <input ref={durRef} defaultValue={updateBlog.duration} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='duration' name='duration' type="text" required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='price'>
                            Total Cost
                        </label>
                        <input ref={priceRef} defaultValue={updateBlog.price} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='price' name='price' type="text" required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='name'>
                            Your Name
                        </label>
                        <input ref={nameRef} defaultValue={updateBlog.name} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='name' name='name' type="text" required />
                    </div>
                    <div className="my-3 flex flex-col ">
                        <label className="text-gray-600 font-bold  mb-3 md:mb-0 pr-4" htmlFor='email'>
                            Your Email
                        </label>
                        <input ref={emailRef} defaultValue={updateBlog.email} className="w-full bg-slate-200 text-black float-right border-2 border-dotted rounded-md px-2" id='email' name='email' type="email" required />
                    </div>
                    <div className="text-center pt-3">
                        <button className="shadow bg-slate-700 hover:bg-white focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded" type="submit">
                            Update Blog Data
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogUpdate;
