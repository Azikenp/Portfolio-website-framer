"use client";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto harum placeat necessitatibus.",
  info: [
    { field: "Name", fieldValue: "Aziken Precious" },
    { field: "Phone ", fieldValue: "(+234) 81 473 018 04" },
    { field: "Experience", fieldValue: "2+ years" },
    { field: "Skype", fieldValue: "aziken.01" },
    { field: "Nationality", fieldValue: "Nigerian" },
    { field: "Email", fieldValue: "azikenp26@gmail.com" },
    { field: "Freelance", fieldValue: "Available" },
    { field: "Langauges", fieldValue: "English, Igbo, Yoruba" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto harum placeat necessitatibus.",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - present",
    },
    {
      company: "Ecommerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Web design studio",
      position: "Frontend Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "Ecommerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Ecommerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Ecommerce startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto harum placeat necessitatibus.",
  items: [
    {
      institution: "TOnline Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "TOnline Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "TOnline Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "TOnline Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "TOnline Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "TOnline Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto harum placeat necessitatibus.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >resume</motion.div>
  );
};

export default Resume;
