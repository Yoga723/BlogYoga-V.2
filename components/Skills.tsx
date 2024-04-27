"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

// Masih bingung

const Skills = () => {
  //  text-transparent bg-clip-text bg-gradient-to-r from-[#0bd7f5] to-[#ba1e68]
  // const referensi = useRef();
  // let getTextValue = document.querySelector("h2");
  // let textValue = "Skills";
  // useEffect(() => {
  //   const letters = "abcdefghijklmnopqrstuvwxyz";
  //   const length = textValue.length;
  //   let iteration = 0;

  //   console.log(referensi.current);

  //   const interval = setInterval(() => {
  //     const rand = getTextValue?.innerText
  //       .split("")
  //       .map((letter, index) => {
  //         iteration += 1;
  //         if (index < iteration) {
  //           return textValue[index];
  //         } else {
  //           return letters[Math.floor(Math.random() * 26)];
  //         }
  //       })
  //       .join("");
  //     rand;
  //     // setTitle(rand);
  //   }, 100);

  //   if (iteration >= textValue.length) clearInterval(interval);
  // }, []);

  return (
    <section className="flex flex-col gap-1 w-screen justify-center items-center ">
      <h2 className="text-[3.25rem] tracking-widest font-burtons font-extrabold text-[#ffffff]">
        Skills
      </h2>
      <div className="flex flex-row  justify-center gap-16 p-8 w-screen ">
        <div className="skills-container">
          <div className="skills-wrapper">
            <SiTypescript className="skills-box" />
            <p className="skills-text">TypeScript</p>
          </div>
          <div className="skills-wrapper">
            <FaReact className="skills-box" />
            <p className="skills-text">React</p>
          </div>
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
