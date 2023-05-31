/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setSuccess("Login done");
                event.target.reset();
                setError("");
                navigate('/');
            })
            .catch(error => {
                // console.log(error);
                setError(error.message);
            })
    }
    const handleLoginWithGoogle = () => {
        googleLogin()
        setError("");
        navigate('/');
            // .then(result => {
            //     const loggedInUser = result.user;
            //     console.log(loggedInUser);
            //     setError('');
            // })
            // .catch(error => {
            //     console.log(error.message);
            // })
    }
    const handleGithubLogin = () =>{
        githubLogin()
        setError("");
        navigate('/');
        // .then(result => {
        //     const loggedInUser = result.user;
        //     console.log(loggedInUser);
        //     setError('');
            
        // })
        // .catch(error => {
        //     console.log(error.message);
        // })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-92">
                    <h1 className='text-2xl'>Please login !!!!</h1>
                    <div className="card flex-shrink-0 mb-10 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleForm} className="card-body mb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                    name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover"></a>
                                </label>
                                <Link to='/register' className='btn btn-link'>Do not have an account?</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className='text-center mt-2'>Or login with</p>
                            </div>
                        </form>
                        <div className='flex gap-8 justify-center -mt-4 mb-10'>
                            <button onClick={handleLoginWithGoogle}><FcGoogle className='text-2xl' /></button>
                            <button onClick={handleGithubLogin}><AiFillGithub className='text-2xl' /></button>
                        </div>
                        {
                            error ? <p className='text-red-600 text-center mb-8 -mt-5'>{error}</p> : <p className='text-green-600 text-center mb-8 -mt-5'>{success}</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;