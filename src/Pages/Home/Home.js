import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () =>
{
    return (
        <main>
            <Header />
            <Blogs />
            <Footer />
        </main>
    );
};

export default Home;
