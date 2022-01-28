import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlogsManagement = () =>
{
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() =>
    {
        fetch('https://lit-caverns-48381.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setAllBlogs(data.blogs));
    }, []);

    const handleDelete = id =>
    {
        Swal.fire({
            title: 'Are you sure delete the blog?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) =>
            {
                if (result.isConfirmed) {
                    fetch(`https://lit-caverns-48381.herokuapp.com/blogs/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data =>
                        {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your blog has been deleted.',
                                    'success'
                                )
                                const restBlogs = allBlogs.filter(blog => blog._id !== id);
                                setAllBlogs(restBlogs);
                            }
                        })
                }
            });
    }

    return (
        <>
            <div className="flex justify-center items-end text-white text-2xl mb-5" style={{ fontFamily: 'Poiret One, cursive' }}>
                <FaQuoteRight className='text-3xl' />&nbsp; All Blogs Management Panel
            </div>
            <p className='text-center font-semibold mb-3'>TOTAL BLOG - {allBlogs.length}</p>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className=" min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            BLOG TITLE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            BLOGGER EMAIL
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            STATUS
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            BLOG MANAGEMENT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {allBlogs.map((blog) => (
                                        <tr key={blog._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={blog.img} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                        <div className="text-sm text-gray-500">{blog.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{blog.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                                                <Link to={`update-blog/${blog._id}`} className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </Link>
                                                &nbsp;|&nbsp;
                                                <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:text-red-900">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsManagement;
