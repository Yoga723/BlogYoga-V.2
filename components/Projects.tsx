import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectCard } from ".";

const Projects = () => {
  return (
    <section className="flex flex-col max-md:gap-6 w-screen p-4 justify-center items-center ">
      <h2 className="text-[2rem] tracking-widest font-burtons font-extrabold text-[#ffffff]">
        Other Projects
      </h2>
      <ProjectCard />
    </section>
  );
};

export default Projects;

// flex flex-col justify-center items-center gap-16 p-8
{
  /* <div className="flex flex-col gap-2 text-[#dedede]">
          <Link target="_blank" href={"https://firstreactlandingpage.000webhostapp.com/"}>
            <h4>1. Website landing page, Hoobank</h4>
            <Image
              src={""}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#dedede]">
          <Link target="_blank" href={"https://interactive-card-details-psi.vercel.app/"}>
            <h4>2. Interactive card details</h4>
            <Image
              src={""}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#dedede]">
          <Link target="_blank" href={"https://thread-clone-self.vercel.app/search"}>
            <h4>3. Thread Clones </h4>
            <Image
              src={""}
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-[#dedede]">
          <Link target="_blank" href={"https://age-calculator-w-next-js.vercel.app/"}>
            <h4>4. Age Calculator</h4>
            <Image
              src={""}
              alt=""
            />
          </Link>
        </div> */
}
