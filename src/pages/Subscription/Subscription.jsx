/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import extra1 from '../../assets/extra.jfif'
import extra2 from '../../assets/extra2.webp'
import extra3 from '../../assets/extra3.jfif'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export default class Subscription extends Component {
    render() {
        return (
            <div>
                <h1 className='text-xl lg:text-5xl font-semibold mt-10 mb-10 text-center'>Visitors , Subscription and Customers</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 mb-5 mx-2 lg:mx-10 gap-5'>
                    <div className='border rounded-xl text-center py-10'>
                        <div className='px-8 py-2 '>
                            <img className='transition duration-300 ease-in-out hover:scale-110  w-44 h-44 rounded-full mx-auto mb-5' src={extra1} alt="" />
                            <p className='text-2xl font-bold mb-2'>Subscription</p>
                            <p>1000 people</p>
                            <p>Rating: 4.50</p></div>
                        <Rating style={{ maxWidth: 100 }} className='mx-auto' value={4.50} readOnly />
                    </div>
                    <div className='border rounded-xl text-center py-10'>
                        <div className='px-8 py-2'>
                            <img className='transition duration-300 ease-in-out hover:scale-110  w-44 h-44 rounded-full mx-auto mb-5' src={extra2} alt="" />
                            <p className='text-2xl font-bold mb-2'>Visitors</p>
                            <p>2000 people</p>
                            <p>Rating: 4.70</p>
                            <Rating style={{ maxWidth: 100 }} className='mx-auto mt-2' value={4.70} readOnly />
                        </div>
                    </div>
                    <div className='border rounded-xl text-center py-10'>
                        <div className='px-8 py-2'>
                            <img className='transition duration-300 ease-in-out hover:scale-110  w-44 h-44 rounded-full mx-auto mb-5' src={extra3} alt="" />
                            <p className='text-2xl font-bold mb-2' >Customer</p>
                            <p>1200 people</p>
                            <p>Rating: 4.00</p></div>
                        <Rating style={{ maxWidth: 100 }} className='mx-auto' value={4.00} readOnly />
                    </div>
                </div>
            </div>
        )
    }
}
