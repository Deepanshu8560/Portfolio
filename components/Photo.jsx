'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, 
        transition: {delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        >
            <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute ">
                <Image 
                src="/images/image.png" 
                priority quality={100}
                fill 
                alt="" className="object-contain" />
            </motion.div>
            <motion.svg className="w-[280px] xl:w-[490px] h-[280px] xl:h-[490px] "
            fill="transparent"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="230" cy="230" r="235" stroke="#00ff99" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" initial={{strokeDasharray: "24 10 0 0"}}
              animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate:[120,360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse ",
              }} />
            </motion.svg>
        </motion.div>
    </div>
  );
};

export default Photo;
