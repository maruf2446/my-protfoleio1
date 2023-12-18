import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../assets/img/constakshon.jpg"
import project2 from "../assets/img/game.jpg"
import project3 from "../assets/img/resturent.jpg"
import project4 from "../assets/img/ema-johan.png"
import project5 from "../assets/img/tea.png"
import project6 from "../assets/img/grow-widh.png"
import project7 from "../assets/img/eStady.png"
import project8 from "../assets/img/abba-bank.png"
import project9 from "../assets/img/bike.png"
import project10 from "../assets/img/insta-sohor.png"
import project11 from "../assets/img/tripfix.png"
import project_peerson from "../assets/img/pic.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Project = () => {
    const projects = [
        {
            img: project1,
            name: 'Construction',
            github_link: "https://github.com/maruf2446/Rupantor-js",
            live_link: "https://rupantor-design-construction.netlify.app/",
        },
        {
            img: project2,
            name: 'Games App',
            github_link: "https://github.com/maruf2446/Games-react-js-api-tailwind",
            live_link: "https://prismatic-marigold-356ea6.netlify.app/",
        },
        {
            img: project3,
            name: 'Rustent',
            github_link: "https://github.com/maruf2446/Rustent-reactjs-Tailwind",
            live_link: "https://golden-unicorn-166d5b.netlify.app/",
        },
        {
            img: project4,
            name: 'Ema-john',
            github_link: "https://github.com/maruf2446/ema-john-simple",
            live_link: "https://magical-mermaid-d4a34b.netlify.app/",
        },
        {
            img: project5,
            name: 'Tea',
            github_link: "https://github.com/maruf2446/tea",
            live_link: "https://ephemeral-fenglisu-593ddf.netlify.app/",
        },
        {
            img: project6,
            name: 'Grow with',
            github_link: "https://github.com/maruf2446/reactjs-tailwind-esy-projkect",
            live_link: "https://benevolent-meringue-790c51.netlify.app/",
        },
        {
            img: project7,
            name: 'eStudy',
            github_link: "https://github.com/maruf2446/cours-talwind-reactjs",
            live_link: "https://mellow-torte-87dc6c.netlify.app/",
        },
        {
            img: project8,
            name: 'abba-bank',
            github_link: "https://github.com/maruf2446/Abba-Bank",
            live_link: "https://wondrous-gnome-23393a.netlify.app/",
        },
        {
            img: project9,
            name: 'Baiker Zone',
            github_link: "https://github.com/maruf2446/biker-zoon",
            live_link: "https://willowy-flan-610df2.netlify.app/",
        },
        {
            img: project10,
            name: 'Insta-Sohor',
            github_link: "https://github.com/maruf2446/insta-shohor",
            live_link: "https://fanciful-sundae-354d3b.netlify.app/",
        },
        {
            img: project11,
            name: 'Travel',
            github_link: "https://github.com/maruf2446/Travel-vite-reactjs-tailwind",
            live_link: "https://tangerine-pie-a834df.netlify.app/",
        },
    ]
    return (
        <section id='projects' className='py-10 text-white'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>
                    My <span className='text-cyan-600'>Projects</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
            </div>
            <br />
            <div className='flex max-w-6xl px-5 mx-auto items-center relative lg:gap-10'>
                <div className='lg:w-2/3 w-full'>
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {
                            projects.map((project_info, i) => (
                                <SwiperSlide key={i}>
                                    <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                                        <img src={project_info.img} alt="" className='rounded-xl h-48' />
                                        <h3 className='text-xl my-4'>{project_info.name}</h3>
                                        <div className='flex gap-4'>
                                            <a href={project_info.github_link} target='_blank' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg'>Github</a>
                                            <a href={project_info.live_link} target='_blank' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg'>Live Demo</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='lg:block hidden'>
                    <img src={project_peerson} alt="" className='h-96 rounded-lg' />
                </div>
            </div>
        </section>
    );
};

export default Project;