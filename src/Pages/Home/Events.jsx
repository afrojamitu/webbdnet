import React from 'react';
import eventBg from '../../assets/EventHeader.png'

const Events = () => {
    return (
        <div className='md:py-16 pt-[70px] pb-10 md:w-10/12 md:mx-auto mx-5'>
            <div className='flex flex-col justify-center items-center md:w-9/12 md:mx-auto mx-5 font-semibold'>
                <img className='w-56' src={eventBg} alt="" />
                <h1 className="text-5xl">UPCOMING EVENTS</h1>
                <h1 className="text-lg text-center text-slate-500">WEBBDNET E-LEARNING PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND HELPFULL DIGITAL MARKETING COMMUNITY</h1>
            </div>

            <div className='grid md:grid-cols-2 gap-10 py-10'>
                <div className='flex items-center gap-3 shadow-xl p-4 rounded-lg'>
                    <h1 className="text-4xl font-bold text-blue-900 border-r-4 pr-3 border-green-500">
                        19<br/>
                        FEB
                    </h1>
                    <p className='text-2xl font-semibold'>WE HELD FREE TRAINING FOR DIGITAL MARKETING</p>
                </div>
                <div className='flex items-center gap-3 shadow-xl p-4 rounded-lg'>
                    <h1 className="text-4xl font-bold text-blue-900 border-r-4 pr-3 border-green-500">
                        19<br/>
                        FEB
                    </h1>
                    <p className='text-2xl font-semibold'>WE HELD FREE TRAINING FOR DIGITAL MARKETING</p>
                </div>
                <div className='flex items-center gap-3 shadow-xl p-4 rounded-lg'>
                    <h1 className="text-4xl font-bold text-blue-900 border-r-4 pr-3 border-green-500">
                        19<br/>
                        FEB
                    </h1>
                    <p className='text-2xl font-semibold'>WE HELD FREE TRAINING FOR DIGITAL MARKETING</p>
                </div>
                <div className='flex items-center gap-3 shadow-xl p-4 rounded-lg'>
                    <h1 className="text-4xl font-bold text-blue-900 border-r-4 pr-3 border-green-500">
                        19<br/>
                        FEB
                    </h1>
                    <p className='text-2xl font-semibold'>WE HELD FREE TRAINING FOR DIGITAL MARKETING</p>
                </div>
            </div>
        </div>
    );
};

export default Events;