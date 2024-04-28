"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { fadeIn } from "@/utils/index";
import Image from "next/image";

interface projectCardProp {
  id: number;
  projectTitle: string;
  projectLink: string;
  index: number;
  img: any;
  logo_1: any;
  logo_2: any;
  logo_3: any;
  logo_4: any;
  active: number;
  setActive: any;
}

const ProjectCard = ({
  id,
  projectTitle,
  projectLink,
  index,
  img,
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  active,
  setActive,
}: projectCardProp) => {
  // handleActive = () => {};

  return (
    <motion.div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      onClick={() => {
        setActive(id);
      }}
      className={`relative flex text-gray-300 justify-center h-[300px] min-w-[350px] lg:h-[500px] lg:min-w-[170px] p-2 rounded-lg transition-all duration-[0.7s] ease-out-flex cursor-pointer border border-sky-300 overflow-clip ${
        id === active
          ? "bg-gradient-to-br from-sky-800 via-sky-600 to-[#00FFFF] lg:flex-[3.5] "
          : "lg:flex-[0.5]"
      } `}
    >
      {id === active ? "" : <div className=" absolute z-10 w-full h-full" />}

      <Link
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        key={id}
        className="w-full h-full object-contain"
      >
        <div className=" w-full h-auto rounded ">
          <Image
            src={img}
            alt="image"
            className={`w-full h-auto object-contain md:object-cover m-auto md:absolute rounded-md`}
            fill
            style={{ objectPosition: "top left" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-fit lg:h-auto p-2 text-[16px]">
          <h2 className={`font-semibold text-white h-10 truncate`}>
            {projectTitle}
          </h2>
          <div className="flex gap-2">
            <Image
              src={logo_1}
              alt="Logo 1"
              width={25}
              height={25}
            />
            <Image
              src={logo_2}
              alt="Logo 2"
              width={25}
              height={25}
            />
            <Image
              src={logo_3}
              alt="Logo 3"
              width={25}
              height={25}
            />
            {logo_4 && (
              <Image
                src={logo_4}
                alt="Logo 4"
                width={25}
                height={25}
              />
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
