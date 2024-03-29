"use client";
import Image from "next/image";
import React from "react";
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  //  text-transparent bg-clip-text bg-gradient-to-r from-[#0bd7f5] to-[#ba1e68]
  return (
    <section className="flex flex-col gap-1 w-screen justify-center items-center ">
      <h2 className="text-[3.25rem] tracking-widest font-burtons font-extrabold text-[#ffffff]">
        Skills
      </h2>
      <div className="flex flex-row justify-center gap-16 p-8 w-screen ">
        <div className="skills-container">
          <div className="skills-wrapper">
            <SiTypescript className="skills-box" />
            <p className="skills-text">TypeScript</p>
          </div>
          <div className="skills-wrapper">
            <FaReact className="skills-box" />
            <p className="skills-text">React</p>
          </div>
        </div>
        <div className="skills-container">
          <div className="skills-wrapper">
            <SiJavascript className="skills-box" />
            <p className="skills-text">Javascript</p>
          </div>
          <div className="skills-wrapper">
            <SiNextdotjs className="skills-box" />
            <p className="skills-text">Next JS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
