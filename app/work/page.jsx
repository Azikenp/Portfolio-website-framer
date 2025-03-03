"use client";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At animi nostrum cum omnis.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At animi nostrum cum omnis.",
    stack: [{ name: "Next Js" }, { name: "Tailwind Css" }, { name: "Node Js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At animi nostrum cum omnis.",
    stack: [{ name: "Next JS" }, { name: "Tailwind Css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none group">
            {/* ouline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, i) => (
                <li key={i} className="text-xl text-accent">
                  {item.name}
                  {i !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20" />
            <div>
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight />
                    </TooltipTrigger>
                    <TooltipContent><p>Live project</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          <div className="w-full xl:w-[50%] ">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
