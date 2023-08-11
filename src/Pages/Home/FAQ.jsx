import React from 'react';

const FAQ = () => {
    return (
        <div className='md:py-16 pt-[70px] pb-10 md:w-8/12 md:mx-auto mx-5'>
            <h1 className="text-3xl md:text-5xl font-semibold text-center">FREQUENTLY ASKED QUESTIONS <br />(FAQ)</h1>


            <div className='grid gap-5 py-10'>
                <div className="collapse collapse-arrow border-2 rounded-lg">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Question 1
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure quos illum officiis quo fugiat hic ratione rerum commodi vero?</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-2 rounded-lg">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Question 2
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure quos illum officiis quo fugiat hic ratione rerum commodi vero?</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-2 rounded-lg">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Question 3
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure quos illum officiis quo fugiat hic ratione rerum commodi vero?</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border-2 rounded-lg">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Question 4
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iure quos illum officiis quo fugiat hic ratione rerum commodi vero?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;