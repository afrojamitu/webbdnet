import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/login-bg.png'
import logo from '../../assets/logo.png'
import { Helmet } from 'react-helmet';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Helmet>
                <title>WebbdNet | Login</title>
            </Helmet>
            <div className='md:flex justify-between shadow-2xl shadow-blue-400 mx-5 md:w-6/12 md:mx-auto my-20'>
                <div className='relative'>
                    <img className='h-[450px] w-[450px]' src={bg} alt="" />
                    <div className='absolute text-white p-5 top-[25%]'>
                        <div className='flex items-center justify-center pb-10 absolute -top-24'>
                            <img className='w-8' src={logo} alt="" />
                            <h1 className="text-xl font-bold">Login</h1>
                        </div>
                        <h1 className="text-3xl font-bold">Welcome to WebbdNet</h1>
                        <h1 className="text-sm font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias impedit laboriosam nihil quidem fugit temporibus recusandae.</h1>
                    </div>
                </div>

                <form onSubmit={handleLogin} className='space-y-4 grid w-full md:w-[60%] p-10'>
                    <input className='border-b-2 rounded-md border-blue-500 py-1 px-4 focus:outline-none focus:border-green-500 focus:ring-blue-500' type="text" name='name' placeholder='Full Name' required />

                    <input className='border-b-2 rounded-md border-blue-500 py-1 px-4 focus:outline-none focus:border-green-500 focus:ring-blue-500' type="email" name='email' placeholder='Email' required />

                    <input className='border-b-2 rounded-md border-blue-500 py-1 px-4 focus:outline-none focus:border-green-500 focus:ring-blue-500' type="password" name='password' placeholder='Password' required />

                    <div className='flex justify-center pt-4'>
                        <input type="submit" value="Login" className='w-full rounded-full py-2 md:py-1 cursor-pointer bg-blue-500 hover:bg-blue-900 shadow-xl hover:shadow-lg hover:shadow-slate-300 text-white font-bold' style={{ transition: '.4s' }} />
                    </div>

                    <p className='text-center text-sm'>New to WebbdNet? <Link to='/signup' className='text-green-500 hover:underline'>Sign Up</Link></p>


                </form>
            </div>
        </div>
    );
};

export default Login;