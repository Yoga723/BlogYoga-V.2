"use client";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  const [currentAbout, setCurrentAbout] = useState(true);
  const changeAbout = (e: any) => {
    e.preventDefault();
    setCurrentAbout(!currentAbout);
  };
  return (
    <section
      className="flex flex-row gap-3 flex-auto justify-center items-center w-screen overflow-hidden"
      id="anchor_about"
    >
      <div className="flex flex-col">
        <button className={`${currentAbout ? "about-true" : "about-false"}`} />
        <button className={`${currentAbout ? "about-false" : " about-true"}`} />
      </div>
      <hr className="w-1 h-24 bg-red-600" />
      <p
        className="text-[#dedede] text-lg leading-relaxed font-roboto w-10/12 h-fit"
        onClick={changeAbout}
      >
        I am a Frontend developer that have experience with NextJS, Typescript,
        javascript.
      </p>
    </section>
  );
};

export default About;
