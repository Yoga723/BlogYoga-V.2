"use client";
import React, { useState } from "react";
import ProjectCard from "./Component-child/ProjectCard";
import { projectList } from "@/utils/index";

const Projects = () => {
  const [active, setActive] = useState(-1);
  return (
    <section className="flex flex-col gap-5 w-screen justify-center items-center px-4">
      <h2 className="text-[2rem] tracking-widest font-burtons font-extrabold text-[#ffffff]">
        Other Projects
      </h2>
      <div className="flex flex-row overflow-x-auto w-full min-h-[35vh] lg:min-h-[70vh] max-lg:gap-5 gap-7 lg:overflow-hidden">
        {projectList.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;