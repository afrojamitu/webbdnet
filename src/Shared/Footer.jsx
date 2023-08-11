import React from 'react';
import logo from '../assets/logo.png'
import playStore from '../assets/google-play.png'
import appStore from '../assets/app-store.png'

const Footer = () => {
    return (
        <div className='bg-black w-full'>
            <footer className="footer py-10 md:px-20 px-5 text-white text-base">
                <div>
                    <img className='w-16' src={logo} alt="" />
                    <span className="text-2xl font-bold">WebbdNet</span>
                    <p>Mere tranquil existence, that I neglect my <br/>talents. I should be incapable of drawing<br/>a single stroke at the present</p>
                    <div className='flex items-center gap-3 pt-3'>
                        <img className='w-28' src={playStore} alt="" />
                        <img className='w-28' src={appStore} alt="" />
                    </div>
                </div>
                <div className='pt-16'>
                    <span className="text-2xl font-bold">Company</span>
                    <a className="link link-hover hover:text-blue-600">Courses</a>
                    <a className="link link-hover hover:text-blue-600">About Us</a>
                    <a className="link link-hover hover:text-blue-600">Contact Us</a>
                    <a className="link link-hover hover:text-blue-600">Blogs</a>
                </div>
                <div className='pt-16'>
                    <span className="text-2xl font-bold">Legal Info</span>
                    <a className="link link-hover hover:text-blue-600">Privacy And Policy</a>
                    <a className="link link-hover hover:text-blue-600">Cookie Policy</a>
                    <a className="link link-hover hover:text-blue-600">Terms And Condition</a>
                    <a className="link link-hover hover:text-blue-600">FAQs</a>
                </div>
                <div className='pt-16'>
                    <span className="text-2xl font-bold">Contact Info</span>
                    <a className="link link-hover">Address: Chandana <br/>Chowrasta,Gazipur,Dhaka</a>
                    <a className="link link-hover">Phone: +8801789461395</a>
                    <a className="link link-hover">Email: <br/>webbdnetelearningplatform@gmail.com</a>
                </div>
            </footer>
            <p className='text-center px-5 text-white py-5 md:py-10 border-t-2'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
    );
};

export default Footer;