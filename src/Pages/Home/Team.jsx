import React from 'react';
import team1 from '../../assets/teamMember1.jpg'
import team2 from '../../assets/teamMember2.jpg'
import team3 from '../../assets/teamMember3.jpg'
import './Home.css'
import teambg from '../../assets/teambg.png'

const Team = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-cyan-300 md:py-16 pt-[1700px] pb-10 text-white'>
            <div className='md:w-7/12 md:mx-auto mx-5'>
                <div className='flex flex-col justify-center items-center md:w-9/12 md:mx-auto mx-5 font-semibold'>
                    <h1 className="text-5xl">OUR TEAM</h1>
                    <h1 className="text-lg md:text-center">WEBBDNET E-LEARNING PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND HELPFULL DIGITAL MARKETING COMMUNITY</h1>
                </div>

                <div className='grid md:grid-cols-3 gap-10 py-10'>
                    <div className='bg-white text-black flex flex-col items-center py-12 px-3 rounded-lg shadow-xl relative'>
                        <div>
                            <img src={teambg} alt="" />
                        </div>
                        <div className='border w-36 h-36 rounded-full flex items-center justify-center absolute top-[93px]'>
                            <img className='w-28 h-28 rounded-full' src={team1} />
                        </div>
                        <h1 className="text-xl font-semibold">John Doe</h1>
                        <h1 className="text-base">CEO</h1>
                    </div>

                    <div className='bg-white text-black flex flex-col items-center py-12 px-3 rounded-lg shadow-xl relative'>
                        <div>
                            <img src={teambg} alt="" />
                        </div>
                        <div className='border w-36 h-36 rounded-full flex items-center justify-center absolute top-[93px]'>
                            <img className='w-28 h-28 rounded-full' src={team2} />
                        </div>
                        <h1 className="text-xl font-semibold">Jane Smith</h1>
                        <h1 className="text-base">Designer</h1>
                    </div>

                    <div className='bg-white text-black flex flex-col items-center py-12 px-3 rounded-lg shadow-xl relative'>
                        <div>
                            <img src={teambg} alt="" />
                        </div>
                        <div className='border w-36 h-36 rounded-full flex items-center justify-center absolute top-[93px]'>
                            <img className='w-28 h-28 rounded-full' src={team3} />
                        </div>
                        <h1 className="text-xl font-semibold">Mike Johnson</h1>
                        <h1 className="text-base">Developer</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;