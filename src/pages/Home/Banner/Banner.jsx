/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../../../assets/banner.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-10 mt-5 mb-5 items-center'>
            <div>
                <h1 className=''><span className='text-3xl lg:text-7xl font-bold'>This is Flavor Fusion.</span> <br /> <p className='text-xl font-semibold mt-3 ml-1 mr-12'>We are preparing chinese foods and dishes.Cooking can be a creative and enjoyable hobby, allowing you to experiment with new flavors and techniques..</p></h1>
                <button type="button" className="mt-8 px-8 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl py-4 text-center mr-2 mb-2"><p className='flex gap-3 items-center '>Learn More <AiOutlineArrowRight /></p> </button>
            </div>
            <div>
                <img src={logo} alt="" className='rounded-xl' />
            </div>
        </div>
    );
};

export default Banner;