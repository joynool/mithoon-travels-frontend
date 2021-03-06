import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () =>
{
    return (
        <main>
            <Header />
            <Banner />
            <Blogs />
            <Footer />
        </main>
    );
};

export default Home;
