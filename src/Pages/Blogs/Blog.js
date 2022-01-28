import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Blog = () =>
{
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() =>
    {
        fetch(`https://lit-caverns-48381.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [id]);

    return (
        <>
            <Header />
            <div className='flex justify-center items-center p-5'>
                <figure className="flex flex-col md:w-1/2 bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 text-center">
                    <div style={{ fontFamily: 'Poiret One, cursive' }} className="text-white text-xl md:text-2xl border-2 border-dotted rounded-xl p-3 whitespace-nowrap mb-5">
                        {blog.title}
                    </div>
                    <img className="w-full rounded-xl mx-auto" src={blog.img} alt="travel blog" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium text-justify">
                                {blog.description}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className='flex justify-evenly bg-white text-black rounded-xl p-3 mb-5'>
                                <p>{blog.duration}</p>
                                <p>{blog.price}</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-white'>BLOGGER</p>
                                <div className="text-sky-500 dark:text-sky-400">
                                    {blog.name}
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    {blog.email}
                                </div>
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
