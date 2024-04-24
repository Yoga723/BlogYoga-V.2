"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { fadeIn } from "@/utils/index";

interface projectCardProp {
  id: number;
  projectTitle: string;
  projectLink: string;
  index: number;
  img: string;
  active: number;
  setActive: any;
}

const ProjectCard = ({
  id,
  projectTitle,
  projectLink,
  index,
  img,
  active,
  setActive,
}: projectCardProp) => {
  // handleActive = () => {};

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      onClick={() => {
        setActive(id);
      }}
      className={`relative flex text-gray-300 items-center justify-center lg:h-[700px] min-w-[170px] p-2 rounded-lg transition-all duration-[0.7s] ease-out-flex cursor-pointer border border-sky-300  ${
        id === active
          ? "bg-gradient-to-br from-sky-800 via-sky-600 to-[#00FFFF] lg:flex-[3.5] flex-[10]"
          : "lg:flex-[0.5] flex-2 "
      } `}
    >
      {id === active ? "" : <div className=" absolute z-10 w-full h-full" />}
      <Link
        href={""}
        // target="_blank"
        key={id}
        className="border-gray-300 border-b-2 w-10/12 h-fit"
      >
        <p className="text-center">{projectTitle}</p>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
