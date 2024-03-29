"use client";
import React from "react";
import { projectList } from "@/utils/index";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" w-screen flex flex-col items-center justify-center md:gap-24 gap-4 text-gray-300"
      >
        {projectList.map((project) => {
          return (
            <div
              className="border-gray-300 border-b-2 w-10/12"
              key={project.id}
            >
              <p className="text-center">{project.projectTitle}</p>
            </div>
          );
        })}
      </motion.div>
  );
};

export default ProjectCard;
