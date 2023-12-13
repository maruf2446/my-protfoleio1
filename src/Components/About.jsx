import React from 'react';
import cv from "../assets/cv/Iqbal Shahiar Khan Maruf_CV (1).pdf"
import aboutPic from "../assets/img/1.jpg"

const About = () => {
    const info = [
        { text: "Years experience", count: "1" },
        { text: "Completed Projects", count: "30" },
        { text: "Companies Work", count: "0" },
    ]
    return (
        <section id='about' className='py-10 text-white'>
            <div className='text-center mt-8'>
                <h3 className='text-4xl font-semibold'>
                    About <span className='text-cyan-600'>Me</span>
                </h3>
                <p className='text-gray-400 my-3 text-lg'>My introduction</p>
                <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                    <div className='p-2'>
                        <div className='text-gray-400 my-3'>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid fugit rerum, tempora aliquam nobis corporis voluptate blanditiis obcaecati perspiciatis, ut doloremque minus recusandae deserunt incidunt nemo! Quia nihil mollitia quos, animi debitis, expedita ipsa nesciunt impedit atque, minima nisi.
                            </p>

                            <div className='flex mt-10 items-center gap-7'>
                                {
                                    info.map(content => (
                                        <div key={content.text}>
                                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>{content.count}
                                                <span className='text-cyan-600'> +</span>{" "}
                                            </h3>
                                            <span className='md:text-base text-sm'>{content.text}</span>
                                        </div>
                                    ))}
                            </div>
                            <br />
                            <br />
                            <a href={cv} target='_blank' download>
                                <button className='btn-primary'>Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
                        <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutPic'>
                            <img src={aboutPic} alt=""  className='w-full object-cover bg-cyan-600 rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;