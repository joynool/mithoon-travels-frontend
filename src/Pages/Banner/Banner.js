import React from 'react';
import Slider from 'react-slick';
import one from './../../images/one.jpg';
import two from './../../images/two.jpg';
import three from './../../images/three.jpg';
import four from './../../images/four.jpg';

const Banner = () =>
{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='m-10'>
            <Slider {...settings}>
                <div>
                    <img src={one} alt="slider one" />
                </div>
                <div>
                    <img src={two} alt="slider one" />
                </div>
                <div>
                    <img src={three} alt="slider one" />
                </div>
                <div>
                    <img src={four} alt="slider one" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
