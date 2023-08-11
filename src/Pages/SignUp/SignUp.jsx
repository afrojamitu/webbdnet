import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import bg from '../../assets/login-bg.png'
import logo from '../../assets/logo.png'
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                navigate('/login')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Helmet>
                <title>WebbdNet | Sign Up</title>
            </Helmet>
            <div className='md:flex justify-between shadow-2xl shadow-blue-400 mx-5 md:w-6/12 md:mx-auto my-20'>
                <div className='relative'>
                    <img className='h-[450px] w-[450px]' src={bg} alt="" />
                    <div className='absolute text-white p-5 top-[25%]'>
                        <div className='flex items-center justify-center pb-10 absolute -top-24'>
                        <img className='w-8' src={logo} alt="" />
                        <h1 className="text-xl font-bold">Sign Up</h1>
                        </div>
                        <h1 className="text-3xl font-bold">Welcome to WebbdNet</h1>
                        <h1 className="text-sm font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias impedit laboriosam nihil quidem fugit temporibus recusandae.</h1>
                    </div>
                </div>

                <form onSubmit={handleSignUp} className='space-y-4 grid w-full md:w-[60%] p-10'>
                    <input className='border-b-2 rounded-md border-blue-500 py-1 px-4 focus:outline-none focus:border-green-500 focus:ring-blue-500' type="text" name='name' placeholder='Full Name' required />

                    <input className='border-b-2 rounded-md border-blue-500 py-1 px-4 focus:outline-none focus:border-green-500 focus:ring-blue-500' type="email" name='email' placeholder='Email' required />

                    <input className='border-b-2 rounded-md border-blue-500 py-1 px-4 focus:outline-none focus:border-green-500 focus:ring-blue-500' type="password" name='password' placeholder='Password' required />

                    <select className='border-b-2 rounded-md text-slate-400 border-blue-500 py-1 px-3 focus:outline-none focus:border-green-500 focus:ring-blue-500' >
                        <option value="Select a Language">Select a Language</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                    </select>

                    <div className='flex justify-center pt-4'>
                        <input type="submit" value="Sign Up" className='w-full rounded-full py-2 md:py-1 cursor-pointer bg-blue-500 hover:bg-blue-900 shadow-xl hover:shadow-lg hover:shadow-slate-300 text-white font-bold' style={{ transition: '.4s' }} />
                    </div>

                    <p className='text-center text-sm'>Have an account? <Link to='/login' className='text-green-500 hover:underline'>Login</Link></p>


                </form>
            </div>
        </div>
    );
};

export default SignUp;