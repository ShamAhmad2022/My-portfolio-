"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

function Project({ project, index }) {
  const eachProjectAnimationVariants = {
    initial: {
      opacity: 0,
    },
    animate: (index) => {
      return {
        opacity: 1,
        transition: {
          delay: 0.25 * index,
        },
      };
    },
  };

  return (
    <motion.div
      className="last:hidden sm:last:block rounded-lg relative group border border-black/40"
      variants={eachProjectAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="relative transition-all group-hover:transition-all rounded-lg h-[11rem] sm:h-[14rem] w-[20rem] md:w-[22rem] lg:w-[25rem] border border-black/5 flex justify-center items-center gap-10 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-110 group-hover:brightness-50"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
      </div>
      <div className="hidden group-hover:flex absolute gap-9 -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
        <Link
          href={project.url}
          className="text-[#ac8c31] h-16 w-16 rounded-full bg-white bg-opacity-70 hover:text-[#dac24a] hover:bg-opacity-100 text-3xl flex justify-center items-center transition-all dark:text-[#ae7c26] dark:hover:text-[#c79e55] duration-300"
          target="_blank"
        >
          <FaExternalLinkAlt />
        </Link>
        <Link
          href={`/allprojects/${project.name}`}
          className="text-[#ac8c31] h-16 w-16 rounded-full bg-white bg-opacity-70 hover:text-[#dac24a] hover:bg-opacity-100 text-4xl flex justify-center items-center dark:text-[#ae7c26] dark:hover:text-[#c79e55] transition-all duration-300"
        >
          <IoMdInformationCircle />
        </Link>
      </div>
    </motion.div>
  );
}

export default Project;
