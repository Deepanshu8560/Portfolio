'use client';
import { delay, motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Car Rental Website',
    title: "Car Rental Website",
    description: "A simple car rental website built using HTML, CSS, and JavaScript, featuring an interactive booking system, vehicle listings, and a responsive design for seamless user experience across devices.",
    stack: [{name:"Html 5"}, {name:"Css 3"}, {name:"JavaScript"}],
    Image: '/images/cars.png',
    live: '',
    github: "https://github.com/Deepanshu8560/Car-Rental-Website",
  },
  {
    num: '02',
    category: 'E-Commerce Website',
    title: "E-Commerce Website",
    description: "An e-commerce website built using HTML, CSS, JavaScript, and Vite, offering a responsive design, product catalog, shopping cart functionality, and dynamic user interactions using Vanilla JS for a fast and seamless shopping experience.",
    stack: [{name:"Html5"}, {name:"Css3"}, {name:"JavaScript"}, {name:"Node.js"}, {name:"Vite"},{name:"API"} ],
    Image: '/images/ecom1.png',
    live: '',
    github: "https://github.com/Deepanshu8560/ShopShere-Ecommerce-Website",
  },
  {
    num: '03',
    category: 'Movie Recommendation System',
    title: "Movie Recommendation System",
    description: "A movie recommendation system built with Streamlit offers an interactive web application that suggests films based on user preferences and viewing history. Utilizing machine learning algorithms, it analyzes data to provide personalized recommendations, enhancing the movie-watching experience.",
    stack: [{name:"Python"}, {name:"Streamlit"}, {name:"API"} ],
    Image: '/images/mov1.png',
    live: '',
    github: "https://github.com/Deepanshu8560/Movie-Recommender-System",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    
    const currentIndex = swiper.activeIndex;
    
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration: 0.4, ease: "easeIn"}, }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div></div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[25px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">{item.name} 
                    {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github} target="Blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index)=> {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.Image} fill className={"object-cover "} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns conatinerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
