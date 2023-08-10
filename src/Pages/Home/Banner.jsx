import React from 'react';
import './home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
import mobileBanner from '../../assets/mobile-banner.png'
import icon1 from '../../assets/courses.svg'
import icon2 from '../../assets/trainer.svg'
import icon3 from '../../assets/timer.svg'
import dotBG from '../../assets/dot-bg.png'
import hat from '../../assets/hat.png'

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Earning', 'Learning'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 200
    })
    return (
        <div>
            <div className='relative'>
                <div className='hidden md:block'>
                    <img className='w-full hidden md:block' src="https://www.etd.com/wp-content/uploads/2019/01/5-Simple-Ways-Improve-Phone-Etiquette_ETD-1901.jpg" />
                </div>
                <div>
                    <div className='absolute w-full md:top-52 md:left-20 bg-blue-500 p-10 md:w-[600px] text-white rounded-lg shadow-xl shadow-blue-300 md:bg-opacity-70 '>
                        <div className='md:hidden w-60 pt-20 flex items-center justify-center'>
                            <img src={mobileBanner} alt="" />
                        </div>
                        <h1 className="text-3xl md:text-7xl font-bold uppercase">WEBBDNET E-<br />
                            <span className='text-yellow-400'>{text}</span>
                            <span><Cursor /></span><br />Platform</h1>
                        <p className='text-lg'>It is a learning and earning process by using your valuable free time at home through your smart phone only. It is a very easy process and you can learn this process in your own mother tongue and earn from our community by selling courses, services, or goods.</p>
                        <div className='pt-5 flex gap-5 items-center'>
                            <Link to='/login' className='bg-green-600 border-2 border-green-600 text-white px-4 py-2 rounded font-bold cursor-pointer shadow-md hover:shadow-lg shadow-slate-300 hover:shadow-slate-300  hover:scale-105' style={{ transition: '.4s' }}>Login</Link>

                            <Link to='/signup' className='bg-blue-600 border-2 border-blue-600 text-white px-4 py-2 rounded font-bold cursor-pointer shadow-md hover:shadow-lg shadow-slate-300 hover:shadow-slate-300  hover:scale-105' style={{ transition: '.4s' }}>Sign Up</Link>
                        </div>
                    </div>
                </div>

            </div>


            {/* bg with different shapes */}
            <div className='relative'>
                <img className='hidden md:block' src={dotBG} alt="" />

                <div id='triangle-up' className='hidden md:block absolute bottom-0'>
                    {/* triangle */}
                </div>

                <div id='triangle-right' className='hidden md:block absolute left-0 top-0'>
                    {/* triangle left */}
                </div>

                <div id='diamond' className='hidden md:block absolute -left-7 top-36 bg-yellow-500 w-32 h-32 rotate-45'>
                    {/* diamond */}
                </div>

                <div className='md:w-8/12 md:mx-auto mx-5 flex flex-col items-center absolute md:top-32 top-[760px] md:left-[17%]'>
                    <img className='w-28' src={hat} alt="" />
                    <h1 className="text-xl md:text-3xl font-bold text-center text-slate-600">The Main objective of this setup is how to develop Skill's on digital marketing And how to generate revenue on it</h1>
                </div>

            </div>

            <div className='md:w-9/12 md:mx-auto mx-5 pt-52 md:pt-0 grid md:flex items-center gap-16 md:gap-8 absolute top-[800px] md:left-[13%]'>
                <div className='h-[180px] w-full bg-gradient-to-b from-cyan-400 to-blue-500 text-white text-center rounded-lg relative shadow-xl shadow-slate-300'>
                    <div className='bg-white p-5 w-24 h-24 rounded-full absolute -top-10 left-[36%] flex justify-center items-center hover:scale-110' style={{ boxShadow: 'inset 0 0 7px 0 black', transition: '.4s' }}>
                        <img className='' src={icon1} alt="" />
                    </div>
                    <div className='pt-20 px-5'>
                        <h1 className="text-3xl font-bold">12+ COURSES</h1>
                        <p className='text-base font-extrabold text-slate-200'>Check Out The List Of Courses</p>
                    </div>
                </div>

                <div className='h-[180px] w-full bg-gradient-to-b from-green-600 to-blue-500 text-white text-center rounded-lg relative shadow-xl shadow-slate-300'>
                    <div className='bg-white p-5 w-24 h-24 rounded-full absolute -top-10 left-[36%] flex justify-center items-center hover:scale-110' style={{ boxShadow: 'inset 0 0 7px 0 black', transition: '.4s' }}>
                        <img className='w-20' src={icon2} alt="" />
                    </div>
                    <div className='pt-20 px-5'>
                        <h1 className="text-3xl font-bold">EXPERT TRAINER</h1>
                        <p className='text-base font-extrabold text-slate-200'>Provide Support And Development In One Or More</p>
                    </div>
                </div>

                <div className='h-[180px] w-full bg-gradient-to-b from-cyan-400 to-blue-500 text-white text-center rounded-lg relative shadow-xl shadow-slate-300'>
                    <div className='bg-white p-5 w-24 h-24 rounded-full absolute -top-10 left-[36%] flex justify-center items-center hover:scale-110' style={{ boxShadow: 'inset 0 0 7px 0 black', transition: '.4s' }}>
                        <img className='w-8' src={icon3} alt="" />
                    </div>
                    <div className='pt-20 px-5'>
                        <h1 className="text-3xl font-bold">LIFETIME ACCESS</h1>
                        <p className='text-base font-extrabold text-slate-200'>You Can Easily Access Courses</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;