import React, { useState } from 'react';
import login from './../../images/login.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Blogs = () =>
{
    const [trigger, setTrigger] = useState(false);

    return (
        <div className='container'>
            <div className='flex justify-center items-center'>
                <aside className='grid grid-cols-1 gap-4 sm:border-r p-5'>
                    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={login} alt="" width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-medium">
                                    “Tailwind CSS is the only framework that I've seen scale
                                    on large teams. It’s easy to customize, adapts to any design,
                                    and the build size is tiny.”
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    Sarah Dayan
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    Staff Engineer, Algolia
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={login} alt="" width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-medium">
                                    “Tailwind CSS is the only framework that I've seen scale
                                    on large teams. It’s easy to customize, adapts to any design,
                                    and the build size is tiny.”
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    Sarah Dayan
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    Staff Engineer, Algolia
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={login} alt="" width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-medium">
                                    “Tailwind CSS is the only framework that I've seen scale
                                    on large teams. It’s easy to customize, adapts to any design,
                                    and the build size is tiny.”
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    Sarah Dayan
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    Staff Engineer, Algolia
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </aside>
                <aside className='hidden sm:block'>
                    {
                        trigger ?
                            <ChevronLeftIcon onClick={() => setTrigger(false)} className='h-12 p-2 hover:bg-gray-500 rounded-md cursor-pointer' />
                            :
                            <ChevronRightIcon onClick={() => setTrigger(true)} className='h-12 p-2 hover:bg-gray-500 rounded-md cursor-pointer' />
                    }
                    <div className={`grid grid-cols-1 gap-4 p-5 divide-y-8 divide-solid ${trigger ? 'inset-0 hidden' : 'inset-0 block'}`}>
                        <span>&nbsp;</span>
                        <figure className="md:flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={login} alt="" width="384" height="512" />
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-slate-700 dark:text-slate-500">
                                        Staff Engineer, Algolia
                                    </div>
                                </figcaption>
                            </div>
                        </figure>
                        <figure className="md:flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={login} alt="" width="384" height="512" />
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-medium">
                                    <div className="text-slate-700 dark:text-slate-500">
                                        Staff Engineer, Algolia
                                    </div>
                                </figcaption>
                            </div>
                        </figure>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blogs;
