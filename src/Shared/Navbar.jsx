import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const navlinks = <>
        <Link to='/' className='flex items-center gap-2 px-3 py-1 rounded cursor-pointer'>Home</Link>

        <Link to="about" className='flex items-center gap-2 px-3 py-1 rounded cursor-pointer'>About</Link>

        <Link to="contact" className='flex items-center gap-2 px-3 py-1 rounded cursor-pointer'>Contact</Link>
    </>

    return (
        <div className='bg-black'>
            <div className="navbar fixed z-10 md:px-16 px-5 bg-black shadow-md text-white">
                <div className="navbar-start w-full flex flex-row-reverse justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className='text-3xl' />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 mr-10 shadow bg-black text-center text-base w-52 -right-10">
                            {navlinks}
                            <div className="flex flex-col gap-4 pt-5">
                                <Link to='/subAdminLogin' className='bg-blue-600 hover:bg-transparent border-2 border-blue-600 text-white px-3 py-1 rounded font-bold cursor-pointer  hover:scale-105' style={{ transition: '.4s' }}>Sub Admin Login</Link>

                                <Link to='/subAdminLogin' className='bg-green-600 hover:bg-transparent border-2 border-green-600 text-white px-3 py-1 rounded font-bold cursor-pointer  hover:scale-105' style={{ transition: '.4s' }}>Admin Login</Link>
                            </div>
                        </ul>
                    </div>
                    <Link to='/' className='flex items-center'><img className='w-12 cursor-pointer' src={logo} alt="" />
                        <h1 className='text-2xl font-semibold hidden md:block' style={{ fontFamily: 'Signika Negative' }}>WebbdNet</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base ">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex gap-4">
                    <Link to='/subAdminLogin' className='bg-blue-600 hover:bg-transparent border-2 border-blue-600 text-white px-3 py-1 rounded font-bold cursor-pointer shadow hover:shadow-md shadow-slate-300 hover:shadow-slate-300  hover:scale-105' style={{ transition: '.4s' }}>Sub Admin Login</Link>

                    <Link to='/subAdminLogin' className='bg-green-600 hover:bg-transparent border-2 border-green-600 text-white px-3 py-1 rounded font-bold cursor-pointer shadow hover:shadow-md shadow-slate-300 hover:shadow-slate-300  hover:scale-105' style={{ transition: '.4s' }}>Admin Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;