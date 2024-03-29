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
      className="flex flex-row gap-3 flex-auto justify-center items-center w-screen overflow-hidden my-[3.75rem]"
      id="anchor_about"
    >
      <div className="flex flex-col">
        <button
          className={`${currentAbout ? "about-true" : "about-false"}`}
          onClick={changeAbout}
        />
        <button
          className={`${currentAbout ? "about-false" : " about-true"}`}
          onClick={changeAbout}
        />
      </div>
      <div className="w-1 h-24 bg-gradient-to-bl from-[#5bb2d7] from-25% to-[#f7931e]" />
      <p
        className="text-[#dedede] text-lg leading-relaxed font-roboto tracking-wide w-10/12 h-fit"
        onClick={changeAbout}
      >
        {currentAbout
          ? "I am a Frontend developer that have experience with NextJS, Typescript, javascript."
          : "Saya juga tertarik dengan Backend terutama operasi CRUD"}
      </p>
    </section>
  );
};

export default About;
