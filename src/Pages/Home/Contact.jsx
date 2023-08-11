import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhoneVolume, FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-300 to-blue-500 md:py-16 py-10 pb-10'>
            <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">CONTACT DETAILS</h1>

            <div className='md:w-10/12 md:mx-auto mx-3 grid md:grid-cols-12 justify-between gap-5 pt-10'>
                <div className=' md:col-start-1 md:col-end-5 bg-white p-5 rounded-lg space-y-3'>
                    <h1 className="text-xl font-bold">Get in Touch</h1>
                    <h1 className="text-base font-semibold">Feel free to reach out to us with any questions or inquiries.</h1>
                    <h1 className="text-base flex items-center gap-2"><FaLocationArrow className='text-green-600' /> Chandana Chowrasta</h1>
                    <h1 className="text-base flex items-center gap-2"><FaLocationArrow className='text-green-600' />Gazipur, Dhaka</h1>
                    <h1 className="text-base flex items-center gap-2"><FaEnvelope className='text-green-600' /> webbdnetelearningplatform@gmail.com</h1>
                    <h1 className="text-base flex items-center gap-2"><FaPhoneVolume className='text-green-600' /> +8801789461395</h1>
                </div>

                <div className=' md:col-start-5 md:col-end-13'>
                    <iframe className='w-full h-full rounded-lg border-8 border-white' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.182054858141!2d90.37938102421546!3d23.989347479563204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dbc89b572e73%3A0xccfb3d81baaa9434!2sGazipur%20Chowrasta%20-%20Rent%20a%20Car!5e0!3m2!1sen!2sus!4v1691736384146!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;