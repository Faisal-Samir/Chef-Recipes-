/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="flex justify-between navbar bg-slate-200 text-black">
                <div className=''>
                    <h2 className="text-2xl lg:ml-52 font-bold">Flavor Fusion</h2>
                </div>
                <div className='flex gap-2 lg:gap-10 mr-10 lg:mr-10'>
                    <ActiveLink to=''>Home</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                    {
                        user ? <>
                            <img className='w-12 h-12 rounded-full' title={user.displayName} src={user.photoURL} alt="" />
                            <button onClick={handleLogout} className='btn btn-outline'>Logout</button>
                        </> : <>
                            <ActiveLink to='/register'>Registration</ActiveLink>
                            <ActiveLink to='/login'>Login</ActiveLink>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;