/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../../ChefCard/ChefCard';
import Reservation from '../Reservation/Reservation';
import { AuthContext } from '../../../providers/AuthProvider';
import Subscription from '../../Subscription/Subscription';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chief-website-assignment-server-faisal-samir.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error.message))
    }, [])
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className='text-center mt-2 mb-2' > <progress className="progress w-56"></progress></div >
    }
    return (
        <div>
            <Banner></Banner>
            <h1 className='mt-10 mb-4 text-5xl font-bold text-center'>Chef Section</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-10 gap-5 mt-10 mb-10'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
            <Subscription></Subscription>
            <Reservation></Reservation>
        </div>
    );
};

export default Home;