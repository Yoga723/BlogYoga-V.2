"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { projectCardProp } from "@/utils";

const ProjectCard = ({
  id,
  projectTitle,
  projectLink,
  index,
  img,
  logos,
  active,
  setActive,
}: projectCardProp) => {
  // handleActive = () => {};

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
            {logos.map((logo, index) => {
              return (
                <Image
                  key={index}
                  src={logo}
                  alt={logo}
                  width={25}
                  height={25}
                />
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
