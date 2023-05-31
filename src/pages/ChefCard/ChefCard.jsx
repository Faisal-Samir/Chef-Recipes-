/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FcLike } from 'react-icons/fc';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, image_link, experience_years, num_recipes, likes } = chef;
    const navigator = useNavigate();
    const btnClick = () => {
        navigator(`/viewRecipes/${id}`);
    }
    return (
        <div>
            <div className="card w-full glass">
                <div className='py-5'>
                    <LazyLoad>
                        <figure><img src={image_link} className='h-48 w-48 rounded-full' alt="car!" /></figure>
                    </LazyLoad>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-cyan-600">{name}</h2>
                        <p className='text-lg'>Years of experience: {experience_years} years</p>
                        <p>Numbers of recipes: {num_recipes}</p>
                        <p className='text-xl'><span className='flex gap-3 items-center'>{likes} <FcLike /></span></p>
                        <div className="card-actions justify-end">
                            <button onClick={btnClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span className="relative px-5 py-3 text-xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    View Recipes
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;