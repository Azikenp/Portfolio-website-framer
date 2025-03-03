"use client";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
  ],
};

const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;
