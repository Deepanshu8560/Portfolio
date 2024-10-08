'use client';
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'I offer professional web development services, specializing in creating responsive, user-friendly websites using HTML, CSS, and JavaScript. From front-end design to back-end development, I build customized solutions tailored to your business needs.',
    href: "",
  },
  {
    num: '02',
    title: 'UI/UX',
    description: 'A great digital experience starts with intuitive and visually compelling design. I specialize in UI/UX design that not only looks beautiful but also enhances usability, ensuring users can easily navigate and engage with your website or application.',
    href: "",
  },
  {
    num: '03',
    title: 'Digital Marketing',
    description: 'In an increasingly competitive digital landscape, an effective marketing strategy can make all the difference in reaching your target audience and growing your business. I offer a range of digital marketing services designed to boost your online presence, drive engagement, and generate leads.',
    href: "",
  },

];

import { motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto ">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"},
        
      }}className="grid grid-cols-1 md:grid-cols-2 gap=[50px]">
        {services.map((service, index)=> {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-8 group">
              <div className="w-[90%] flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500" >{service.num}</div>
                <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ">
                <BsArrowDownRight className="text-primary text-2xl " />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60  ">{service.description}</p>
              <div className="border-b border-white/20 w-[90%]"></div>
            </div>
          );
        })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
