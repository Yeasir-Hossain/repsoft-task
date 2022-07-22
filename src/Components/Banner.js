import React from 'react';
import Navbar from './Navbar';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-[url('/src/Assets/bg.png')] bg-no-repeat bg-cover w-full h-[825px] body-font">
            <Navbar></Navbar>
            <div class="min-h-screen flex flex-col justify-center items-center">
                <h1 className='text-white text-center font-bold tracking-widest text-6xl evolve'>Evolve Your<br /> Gaming Experience</h1>
                <h1 className='text-white text-center font-bold leading-9 tracking-widest text-3xl play mt-8 '>Play with friends or compete against rivals from around the<br /> world</h1>
                <button className='btn bg-white text-black text-lg px-24 pt-6 pb-12 mt-20'>Join Now</button>
            </div>

        </div>
    );
};

export default Banner;