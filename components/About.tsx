"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [currentAbout, setCurrentAbout] = useState(true);

  const changeAbout = (e: any) => {
    e.preventDefault();
    setCurrentAbout(!currentAbout);
  };

  const slideIn = {
    hidden: { opacity: 0, x: "-100vh" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2, // tidak berfungsi ?
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { opacity: 0, x: "-100vh" },
  };

  return (
    <section
      className="flex flex-row gap-3 justify-center items-center w-screen overflow-hidden my-[3.75rem] h-48 max-md:overflow-y-scroll"
      id="anchor_about"
    >
      {/* <div className="flex flex-col">
        <button
          className={`${currentAbout ? "about-true" : "about-false"}`}
          onClick={changeAbout}
        />
        <button
          className={`${currentAbout ? "about-false" : " about-true"}`}
          onClick={changeAbout}
        />
      </div> */}

      <div className="w-1 h-56 bg-[#5bb2d7]" />
      {/* Beri animasi untuk animatenya */}
      {currentAbout ? (
        <AnimatePresence mode="wait">
          <motion.p
            className="about-content"
            onClick={changeAbout}
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            I am a passionate web developer who love create modern, interactive,
            and responsive web application. <br />I have experience using HTML,
            CSS, Javascript, ReactJS/NextJS and convert design to live web
            application while ensuring high quality and perform optimally across
            platform and devices.
          </motion.p>
        </AnimatePresence>
      ) : (
        <motion.p
          className="about-content"
          onClick={changeAbout}
          variants={slideIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Saya juga tertarik dengan Backend, berpengalaman dengan NodeJS dan
          MongoDB
        </motion.p>
      )}
    </section>
  );
};

export default About;
