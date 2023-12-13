import React from 'react';
import heropic from '../assets/img/profilepic.jpg'

const Hero = () => {
    const social_media = [
        'logo-instagram',
        'logo-facebook',
        'logo-linkedin',
        'logo-twitter',
    ]
    return (
        <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
            <div className='flex-1 flex items-center justify-center h-full mt-10'>
                <img src={heropic} alt="" className='md:w-11/12 h-full object-cover' />
            </div>
            <div className='flex-1'>
                <div className='md:text-left text-center mt-5'>
                    <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
                        <span className='text-cyan-600 md:text-6xl text-5xl'>
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Maruf</span>
                    </h1>
                    <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300'>Font-End Developer</h4>
                    <button className='btn-primary mt-8'>Contact Me</button>
                    <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
                        {
                            social_media?.map((icon) => (
                                <div key={icon} className='text-gray-600 hover:text-white cursor-pointer'>
                                    <a href="https://www.facebook.com/iskmaruf/" target='_blank'>
                                        <ion-icon name={icon}></ion-icon>
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;