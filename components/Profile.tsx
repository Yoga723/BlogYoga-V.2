"use client";
import ProfilePic from "@/public/foto data diri2.png";
import Image from "next/image";
import Link from "next/link";
import { contactList } from "@/utils";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-full overflow-hidden "
      id="anchor_profile"
    >
      <h1
        className={`text-[3.13rem] md:text-[3.75rem] text-center font-extrabold text-[#ffffff] font-burtons animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white `}
      >
        Yoga <span className="text-transparent font-outline-2">pangestu</span>
      </h1>
      <h3 className=" text-center text-[1.56rem] text-[#CCCCCC] md:text-[1.88rem] p-2 pb-4  font-merriweather">
        Junior Front-end
      </h3>

      <div className="relative bg-[#3E8586] rounded-full overflow-hidden w-80 h-80 max-md:w-40 max-md:h-40">
        <Image
          src={ProfilePic}
          alt="Profile Picture"
          objectFit="cover"
        />
      </div>

      <div className="flex justify-center items-center flex-col w-full ">
        <div className="flex flex-row w-full justify-between mt-[2.18rem] gap-8">
          {contactList.map((Contact) => {
            return (
              <Link
                href={Contact.contactLink}
                className="contact-box"
                target="_blank"
              >
                <motion.div
                  className="contact-wrapper"
                  key={Contact.id}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5 }}
                >
                  <motion.p
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Contact.icon />
                  </motion.p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;
