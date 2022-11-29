import React from 'react';
import about1 from '../../../../assets/about/about1.jpg';
import about2 from '../../../../assets/about/about2.jpg';
import './About.css';

const About = () => {
    return (
        <div>
                <div className="hero my-20 w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={about1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={about2}  alt="" className="absolute right-5 top-[-30%] w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <p className="text-3xl font-bold text-primary py-12">About Us</p>
                    <h1 className="my-5 lg:text-5xl text-3xl font-bold font-serif">
                    A better zone to  shop  for furniture !!!</h1>
                    <p className="py-6 text-xl text-semibold">Looking for a better way to buy furniture online? Furniture.com gathers thousands of quality pieces in one place to make browsing, comparing and coordinating simpler than ever.  </p>

                    <p className="py-6 text-xl text-semibold">Our curated collection of sofas, dining tables, bedroom sets, patio furniture, accents and more will connect you with just what you want in a snap.</p>
                    <button className="btn button text-black font-bold">See More Info</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;