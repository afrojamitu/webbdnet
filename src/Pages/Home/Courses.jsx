import React, { useEffect, useState } from 'react';
import header from '../../assets/popular-course.svg'
import { FaArrowRight } from 'react-icons/fa';

const Courses = () => {
    const [courses, setCourses] = useState();

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                console.log(data);
            })
    }, [])


    return (
        <div className='bg-gradient-to-r from-cyan-300 to-blue-500 md:py-16 pt-[1700px]'>

            <div className='flex flex-col items-center justify-center pb-10 text-white'>
                <img className='w-80' src={header} />
                <h1 className="text-5xl font-semibold">POPULAR COURSES</h1>
                <h1 className="text-lg font-semibold md:w-8/12 md:mx-auto mx-5 text-center text-slate-200">THERE ARE COURSES IN A WIDE VARIETY OF SUBJECTS, FROM COSMETOLOGY TO ENGINEERING, FOOD AND BEVERAGE STUDIES TO LAW AND REGULATIONS, BIOLOGY TO FASHION.</h1>
            </div>

            <div className='md:w-10/12 md:mx-auto mx-5 grid md:grid-cols-3 gap-10 items-center justify-center'>
                {
                    courses?.map(course => <div key={course.id} className='bg-white bg-opacity-90 hover:bg-green-600 hover:text-white rounded-md' style={{ transition: '.3s' }}>
                        <img className='w-full h-52 rounded-t-md' src={course.image} alt="" />
                        <div className='p-5'>
                            <h1 className="text-2xl font-bold">{course.title}</h1>
                            <h1 className="text-lg font-semibold">{course.detail}</h1>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center pt-10'>
                <button className='bg-white border-2 border-white px-6 py-2 rounded font-bold cursor-pointer shadow hover:shadow-md shadow-slate-300 hover:shadow-green-300 flex items-center gap-2 hover:scale-105' style={{ transition: '.4s' }}>See More<FaArrowRight></FaArrowRight> </button>
            </div>
        </div>
    );
};

export default Courses;