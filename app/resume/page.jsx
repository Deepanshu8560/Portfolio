'use client';
import Link from "next/link";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about ={
  title: 'About Me',
  description: "Hi my name is Deepanshu Gupta and i am from Ramganjmandi, Rajasthan. I have Done my Primary schooling from my native in rajsthan and i have done my +2 from Lal Bahadur Shastri School kota Rajasthan.I hold a B.tech degree in Computer Science from Alliance University.My current areas of interest are Web develoment and Digital Marketing.I love to play sports like badminton, football and chess.",
  info:[
    {
      fieldname: "Name",
      fieldValue: "Deepanshu Gupta",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+91)8560 836 906",
    },
    {
      fieldname: "Experience",
      fieldValue: "Internship",
    },
    {
      fieldname: "Email",
      fieldValue: "deepanshuwoerp@gmail.com",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Avialable",
    },
    {
      fieldname: "Languages",
      fieldValue: "English, Hindi ",
    },
    
  ]
};

const experience = {
  icon: "/",
  title: "My experience",
  description: "During my internship at Internship Studio as a Web Design and Development Intern, I developed responsive websites using HTML, CSS, and JavaScript. I worked on both front-end and back-end tasks, including server-side logic and databases. I also collaborated on UI/UX design, creating wireframes and mockups. This experience sharpened my development and design skills.",
  items:[
    {
      company: "Internship Studio",
      position: "Wed Design and Development Intern",
      Duration: "Jul-2024 - Aug-2024",
    }
  ],
};

const education = {
  icon: "/",
  title: "My Education",
  items:[
    {
      Institution: "St. Mary's Convent School",
      degree: "Primary and Secondary Education",
      Duration: "2007-2016",
    },
    {
      Institution: "LBS School",
      degree: "Senior Secondary Education",
      Duration: "2019-2020",
    },
    {
      Institution: "Alliance University",
      degree: "B.Tech - Computer Science",
      Duration: "2020-2024",
    },
  ],
};

const certifications = {
  icon: "/",
  title: "Certifications",
  
  items:[
    {
      Institution: "Meta",
      Course: "Front-end Development",
      Duration: "Apr 2024- june 2024",
    },
    {
      Institution: "Duke University",
      Course: "Programming Foundations",
      Duration: "Apr 2024 - June 2024",
    },
    {
      Institution: "Learn Quest",
      Course: "Core Java",
      Duration: "May 2024 - jul 2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "",
  SkillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2.4, Duration: 0.4, ease: "easeIn"    } }} 
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-centre xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index)=> {
                      return (
                        <li key="index" className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-centre xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index)=> {
                      return (
                        <li key="index" className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                {skills.SkillList.map((skill, index)=> {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
              </div>
            </TabsContent>
            <TabsContent value="certifications" className="w-full">
            <div className="flex flex-col gap-[30px] text-centre xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certifications.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {certifications.items.map((item, index)=> {
                      return (
                        <li key="index" className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Course}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
