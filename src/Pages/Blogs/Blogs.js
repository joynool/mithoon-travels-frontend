import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Blogs = () =>
{
    const [trigger, setTrigger] = useState(false);
    const [page, setPage] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [spots, setSpots] = useState([]);

    const size = 3;
    useEffect(() =>
    {
        fetch(`https://lit-caverns-48381.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data =>
            {
                setBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    useEffect(() =>
    {
        fetch('https://lit-caverns-48381.herokuapp.com/spot')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, []);

    return (
        <div id='blogs' className='container'>
            <div className={`grid ${trigger ? 'grid-cols-1' : 'sm:grid-cols-4 grid-cols-1'} gap-4 sm:divide-x-2 sm:divide-dotted`}>
                <aside className='grid grid-cols-1 gap-4 col-span-3 p-5'>
                    <div>
                        <div className="flex justify-center items-end text-white text-2xl" style={{ fontFamily: 'Poiret One, cursive' }}>
                            <FaQuoteRight className='text-4xl' />&nbsp; Our Travelers Experience...
                        </div>
                        <div className='hidden sm:flex justify-end items-center'>
                            {
                                trigger ?
                                    <ChevronLeftIcon onClick={() => setTrigger(false)} className='h-10 p-2 text-white bg-slate-500 hover:bg-slate-700 rounded-md cursor-pointer' />
                                    :
                                    <ChevronRightIcon onClick={() => setTrigger(true)} className='h-10 p-2 text-white bg-slate-500 hover:bg-slate-700 rounded-md cursor-pointer' />
                            }
                        </div>
                    </div>
                    <div className="text-center">
                        {
                            [...Array(pageCount).keys()].map((number, index) => <button key={index} onClick={() => setPage(number)} className={number === page ? 'bg-gray-300 text-black rounded-full shadow-md mr-3 px-3 py-1 hover:bg-gray-400' : 'bg-slate-500 text-white rounded-full shadow-md mr-3 px-3 py-1 hover:bg-slate-700'}>{number + 1}</button>
                            )
                        }
                    </div>
                    <div className='grid grid-rows-3 gap-4'>
                        {
                            blogs.map(blog => <figure key={blog._id} className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                <img className="w-24 h-24 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto" src={blog.img} alt="" width="384" height="512" />
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <blockquote>
                                        <p className="text-lg font-medium">
                                            {blog.description}
                                        </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                        <div className="text-sky-500 dark:text-sky-400">
                                            {blog.name}
                                        </div>
                                        <div className="text-slate-700 dark:text-slate-500">
                                            {blog.email}
                                        </div>
                                        <div className="md:w-2/3 my-5">
                                            <Link to={`blog/${blog._id}`} className="shadow bg-slate-700 hover:bg-slate-100 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                                Read More ...
                                            </Link>
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>)
                        }
                    </div>
                    <div className="text-center">
                        {
                            [...Array(pageCount).keys()].map((number, index) => <button key={index} onClick={() => setPage(number)} className={number === page ? 'bg-gray-300 text-black rounded-full shadow-md mb-5 mr-3 px-3 py-1 hover:bg-gray-400' : 'bg-slate-500 text-white rounded-full shadow-md mb-5 mr-3 px-3 py-1 hover:bg-slate-700'}>{number + 1}</button>
                            )
                        }
                    </div>
                </aside>
                <aside className='sm:mb-10'>
                    <div className={`grid grid-cols-1 gap-4 p-5 divide-y-8 divide-solid ${trigger ? 'inset-0 hidden' : 'inset-0 block'}`}>
                        <div className="flex justify-center items-end text-white text-2xl my-5" style={{ fontFamily: 'Poiret One, cursive' }}>
                            <FaQuoteRight className='text-4xl' />&nbsp; Our Top Rated Spot
                        </div>
                        {
                            spots.map(spot => <figure key={spot._id} className="md:flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={spot.img} alt="" width="384" height="512" />
                                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                    <figcaption className="font-medium">
                                        <div className="text-slate-700 dark:text-slate-500">
                                            {spot.title}
                                        </div>
                                    </figcaption>
                                </div>
                            </figure>)
                        }
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blogs;
