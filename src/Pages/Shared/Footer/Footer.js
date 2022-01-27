import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsGeoAlt, BsEnvelope, BsTelephone } from "react-icons/bs";
import logo from './../../../images/logo.png';

const Footer = () =>
{
    return (
        <footer>
            <section className='flex flex-col lg:flex-row items-center justify-around bg-gray-800'>
                <div className='mt-5'>
                    <iframe title='Google Map' src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741437.2151148906!2d90.35633102080202!3d23.684993990074968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1643222810533!5m2!1sen!2sbd'} width={300} height={200} style={{ border: 0 }} className='m-3 rounded' loading="lazy"></iframe>
                    <div className="flex justify-center items-start text-white text-2xl mb-3" style={{ fontFamily: 'Poiret One, cursive' }}>
                        <FaQuoteRight className='text-3xl' />&nbsp; The journey is my home...
                    </div>
                </div>
                <nav className='flex flex-col items-center justify-center'>
                    <span className='my-1 text-sm underline underline-offset-8'>Mithoon Travels</span>
                    <Link to="/home" className='my-1 hover:text-white'>Home</Link>
                    <Link to="/home#blogs" className='mb-1 hover:text-white'>Blogs</Link>
                    <Link to="/gallery" className='mb-5 hover:text-white'>Our Gallery</Link>

                    <span className='my-3 text-sm underline underline-offset-8'>Follow us on social networks</span>
                    <div className='flex items-center mb-5'>
                        <a href="/#">
                            <FaFacebook className="w-8 h-8 mr-5 hover:text-blue-500" />
                        </a>
                        <a href="/#">
                            <FaTwitter className="w-8 h-8 mr-5 hover:text-blue-400" />
                        </a>
                        <a href="/#">
                            <FaInstagram className="w-8 h-8 hover:text-red-300" />
                        </a>
                    </div>
                </nav>
                <nav className='flex flex-col justify-center items-center'>
                    <a className='flex justify-center items-center border border-slate-600 rounded py-1 px-5' href="/">
                        <img src={logo} alt='b4b biz club logo' width={80} height={80} />
                        <h2 style={{ fontFamily: 'Poiret One, cursive' }} className='text-2xl'>
                            Mith00n<br />Travels
                        </h2>
                    </a>
                    <span className='my-3 text-sm underline underline-offset-8'>Contact Us</span>
                    <p className='flex justify-center items-center mb-1'><BsGeoAlt />&nbsp;&nbsp;92, Dhaka - 1000, Bangladesh</p>
                    <p className='flex justify-center items-center mb-1'><BsEnvelope />&nbsp;&nbsp;contact@mithoontravels.com</p>
                    <p className='flex justify-center items-center mb-2'><BsTelephone />&nbsp;&nbsp;+88012345678, +8887654321</p>
                </nav>
            </section>
            <section className='bg-gray-600 text-center py-3'>
                <span className='font-extralight'>&copy; 2022, Mithoon Travels | All right reserved</span>
            </section>
        </footer>
    );
};

export default Footer;
