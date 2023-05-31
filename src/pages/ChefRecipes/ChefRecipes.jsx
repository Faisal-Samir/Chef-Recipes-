/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazyload';

const ChefRecipes = () => {
    const chefRecipes = useLoaderData();
    const [disabled, setDisabled] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);

    const btnClick_1 = () => {
        toast('Add to favorite section');
        setDisabled(true);
    }
    const btnClick_2 = () => {
        toast('Add to favorite section');
        setDisabled2(true);
    }
    const btnClick_3 = () => {
        toast('Add to favorite section');
        setDisabled3(true);
    }
    return (
        <div>
            <div className='grid grid-cols-2 mt-10 mb-10 gap-5'>
                <div>
                    <LazyLoad>
                        <img className='rounded-xl mx-auto w-1/2 h-full' src={chefRecipes.image_link} alt="" />
                    </LazyLoad>
                </div>
                <div className=' py-5 px-20 my-auto'>
                    <p className='text-2xl font-semibold'>Name: {chefRecipes.name}</p>
                    <p className=' font-bold font-serif mt-2 text-lg text-justify mb-3 text-slate-400'>{chefRecipes.description}</p>
                    <p className='text-lg mt-1 mb-1'>Years of experience: {chefRecipes.experience_years} years</p>
                    <p>Numbers Of Recipes: {chefRecipes.num_recipes}</p>
                    <p className='text-2xl mt-2 mb-2'><span className='flex gap-2 items-center'>Likes: {chefRecipes.likes} <FcLike /></span> </p>
                </div>
            </div>
            {/* recipe list */}
            <h1 className='text-center text-5xl font-bold mb-10'>Chefs Recipes</h1>
            <div className='mt-10 mb-10 mx-20 grid grid-cols-3 gap-5'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{chefRecipes.recipe_1.recipe_name}</h2>
                        <p className='text-cyan-600 text-xl'>Ingredients:</p>
                        <ul>
                            {chefRecipes.recipe_1.Ingredients.map((n, id) => <li key={n.id}>{n}</li>)}
                        </ul>
                        <p className='text-cyan-600 text-xl'>Cooking Method</p>
                        <p>{chefRecipes.recipe_1.Cooking_method}</p>
                        <p className='text-xl'>Rating: {chefRecipes.recipe_1.rating}</p>
                    </div>
                    <button onClick={btnClick_1} className='btn btn-outline text-2xl mb-4' disabled={disabled}>Favorite</button>
                    <ToastContainer />
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{chefRecipes.recipe_2.recipe_name}</h2>
                        <p className='text-cyan-600 text-xl'>Ingredients:</p>
                        <ul>
                            {chefRecipes.recipe_2.Ingredients.map((n, id) => <li key={n.id}>{n}</li>)}
                        </ul>
                        <p className='text-cyan-600 text-xl'>Cooking Method</p>
                        <p>{chefRecipes.recipe_2.Cooking_method}</p>
                        <p className='text-xl'>Rating: {chefRecipes.recipe_2.rating}</p>
                    </div>
                    <button onClick={btnClick_2} className='btn btn-outline text-2xl mb-4' disabled={disabled2}>Favorite</button>
                    {/* <ToastContainer /> */}
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{chefRecipes.recipe_3.recipe_name}</h2>
                        <p className='text-cyan-600 text-xl'>Ingredients:</p>
                        <ul>
                            {chefRecipes.recipe_3.Ingredients.map((n, id) => <li key={n.id}>{n}</li>)}
                        </ul>
                        <p className='text-cyan-600 text-xl'>Cooking Method</p>
                        <p>{chefRecipes.recipe_3.Cooking_method}</p>
                        <p className='text-xl'>Rating: {chefRecipes.recipe_3.rating}</p>
                    </div>
                    <button onClick={btnClick_3} className='btn btn-outline text-2xl mb-4' disabled={disabled3}>Favorite</button>
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;