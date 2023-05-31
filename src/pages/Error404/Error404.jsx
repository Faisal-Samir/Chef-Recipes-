/* eslint-disable no-unused-vars */
import React from 'react';
import error from "../../assets/error.jpg"
const Error404 = () => {
    return (
        <div className='mb-10'>
            <img className='mx-auto' src={error} alt="" />
            <h1 className='text-center text-5xl'>Page Not Found</h1>
        </div>
    );
};

export default Error404;