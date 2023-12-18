import React from 'react';
import heropic from '../assets/img/profilepic.jpg'

const Hero = () => {
    // const social_media = [
    //     'logo-instagram',
    //     'logo-facebook',
    //     'logo-linkedin',
    //     'logo-twitter',
    // ]
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
                    <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300'>Front-End Developer</h4>
                    <button className='btn-primary mt-8'>Contact Me</button>
                    <div className='mt-8 text-3xl flex items-center md:justify-start justify-center'>
                        {/* {
                            social_media?.map((icon) => (
                                <div key={icon} className='text-gray-600 hover:text-white cursor-pointer'>
                                    <a href="https://www.facebook.com/iskmaruf/" target='_blank'>
                                        <ion-icon name={icon}></ion-icon>
                                    </a>
                                </div>
                            ))} */}
                        <div className='space-x-5'>
                            <a href="https://github.com/maruf2446" target='_blank' className='text-gray-600 hover:text-white cursor-pointer'>
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                            <a href="https://www.facebook.com/iskmaruf/" target='_blank' className='text-gray-600 hover:text-white cursor-pointer'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="https://www.linkedin.com/in/isk-maruf-7b2986180/" target='_blank' className='text-gray-600 hover:text-white cursor-pointer'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                            <a href="https://wa.me/+8801720438804" target='_blank' className='text-gray-600 hover:text-white cursor-pointer whatsapp_float' rel="noopener noreferrer">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                            <a href="https://join.skype.com/invite/vItjPXcCX4fk?chat" target='_blank' className='text-gray-600 hover:text-white cursor-pointer whatsapp_float' rel="noopener noreferrer">
                            <ion-icon name="logo-skype"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;