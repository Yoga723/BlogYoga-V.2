"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [currentAbout, setCurrentAbout] = useState(true);

  const changeAbout = (e: any) => {
    e.preventDefault();
    setCurrentAbout(!currentAbout);

    switch (currentAbout) {
      case true:
        console.log("current About is True");
      case false:
        console.log("current About is false");
    }
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
      className="flex flex-row gap-3 flex-auto justify-center items-center w-screen overflow-hidden my-[3.75rem]"
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

      <div className="w-1 h-24 bg-[#5bb2d7]" />
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
            I am a Frontend developer that have experience with ReactJS,
            Typescript, javascript.
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
