import React from "react";
import ProfilePic from "@/public/foto data diri2.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord as Discord,
  FaWhatsapp as WhatsApp,
  FaLinkedin as LinkedIn,
  FaGithub as GitHub,
} from "react-icons/fa";
import { SiGmail as Mail } from "react-icons/si";

const Profile = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-full ">
      <p
        className={`text-[3.13rem] md:text-[3.75rem] text-center text-white font-burtons`}
      >
        Yoga pangestu
      </p>
      <p className=" text-gray-800 text-center text-[1.56rem] md:text-[1.88rem] p-2 pb-4 font-merriweather">
        Junior Front-end Developer
      </p>

      <div className="relative  border-[#5bc0c2] border-2 bg-[#3E8586] rounded-full overflow-hidden w-80 h-80 max-md:w-40 max-md:h-40">
        <Image
          src={ProfilePic}
          alt="Profile Picture"
          objectFit="cover"
        />
      </div>
      {/* First Contact Row */}
      <div className="max-md max-md">
        <div className="flex flex-row w-full justify-between my-[2.18rem]">
          <Link
            href={""}
            className="contact-Box"
          >
            <WhatsApp />
          </Link>
          <Link
            href={""}
            className="contact-Box mx-[3.75rem]"
          >
            <Mail />
          </Link>
          <Link
            href={""}
            className="contact-Box"
          >
            <LinkedIn />
          </Link>
        </div>

        {/* Second Contact Row */}
        <div className="flex flex-row w-full justify-start my-[2.18rem]">
          <Link
            href={""}
            className="contact-Box ml-[3.50rem] mr-[3.75rem]"
          >
            <GitHub />
          </Link>
          <Link
            href={""}
            className="contact-Box "
          >
            <Discord />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
