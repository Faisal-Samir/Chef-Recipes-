/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useContext(AuthContext);

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError("Password must be greater than 6");
            return;
        }
        console.log(name, email, password,photo);
        signUp(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                event.target.reset();
                setSuccess("Registration done successfully");
                setError("");
                profile(result.user,name,photo);
                
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
        
        const profile =(user,name,photo) =>{
            updateProfile(user,{
                displayName: name,
                photoURL: photo
            })
            .then(()=>{
                console.log('updated');
            })
            .catch(error => {
                console.log(error.message);
            })
        }
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-92">
                    <h1 className='text-2xl'>Registration</h1>
                    <form onSubmit={handleForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name"
                                    name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="photo url"
                                    name='photo' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                    name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover"></a>
                                </label>
                                <Link to='/login' className='btn btn-link'>Already have an account?</Link>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                error ? <p className='text-red-600 text-center'>{error}</p> : <p className='text-green-600 text-center'>{success}</p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;