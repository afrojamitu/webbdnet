import React from 'react';
import bg from '../../assets/service-bg.jpg'
import serviceBG from '../../assets/ServiceHeader.svg'
import file from '../../assets/file.png'

const Services = () => {
    return (
        <div className='w-full bg-fixed px-5 md:px-12 py-28' style={{ backgroundImage: `url("${bg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            <div className='bg-slate-100 p-3 md:p-5'>
                <div className='flex flex-col justify-center items-center md:w-9/12 md:mx-auto mx-5 font-semibold'>
                    <img className='w-60' src={serviceBG} alt="" />
                    <h1 className="text-3xl md:text-5xl">OUR SERVICES</h1>
                    <h1 className="text-lg md:text-center">WEBBDNET E-LEARNING PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND HELPFULL DIGITAL MARKETING COMMUNITY</h1>
                </div>

                <div className='grid md:grid-cols-3 gap-8 p-8'>
                    <div className='bg-gradient-to-b from-green-500 to-blue-500 shadow-xl shadow-slate-300 relative rounded-lg'>
                        <p className='bg-blue-500 w-20 h-20 border-8 border-slate-100 rounded-full flex items-center justify-center text-5xl text-white pb-3 absolute -top-5 -left-5'>+</p>

                        <div className='text-white text-center py-10'>
                            <h1 className="text-3xl font-bold">Service 1</h1>
                            <h1 className="text-lg text-slate-200 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula vel velit pretium auctor eu in elit.</h1>
                        </div>
                    </div>

                    <div className='bg-blue-500 relative rounded-lg'>
                        <span className='bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center absolute -top-5 -left-5 border-8 border-slate-100 p-4'>
                            <img src={file} className='' />
                        </span>

                        <div className='text-white text-center py-10'>
                            <h1 className="text-3xl font-bold">Service 2</h1>
                            <h1 className="text-lg text-slate-200 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula vel velit pretium auctor eu in elit.</h1>
                        </div>
                    </div>


                    <div className='bg-gradient-to-b from-green-500 to-blue-500 shadow-xl shadow-slate-300 relative rounded-lg'>
                        <p className='bg-blue-500 w-20 h-20 border-8 border-slate-100 rounded-full flex items-center justify-center text-5xl text-white pb-3 absolute -top-5 -left-5'>+</p>

                        <div className='text-white text-center py-10'>
                            <h1 className="text-3xl font-bold">Service 3</h1>
                            <h1 className="text-lg text-slate-200 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula vel velit pretium auctor eu in elit.</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;