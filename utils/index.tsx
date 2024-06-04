import {
  FaWhatsapp as WhatsApp,
  FaLinkedin as LinkedIn,
  FaGithub as Github,
} from "react-icons/fa";
import { SiGmail as Mail } from "react-icons/si";
import hoobank from "@/public/images/hoobankLanding.png";
import calculator from "@/public/images/calculator.png";
import to_do_list from "@/public/images/To-Do-List.png";
import cardDetails from "@/public/images/cardDetails.png";
import thread from "@/public/images/thread.png";
import NextJs from "@/public/icons-svg/nextjs.svg";
import ReactJs from "@/public/icons-svg/react.svg";
import Tailwind from "@/public/icons-svg/tailwind.svg";
import Mongodb from "@/public/icons-svg/mongodb.svg";
import Typescript from "@/public/icons-svg/typescript.svg";

export interface projectCardProp {
  id: number;
  projectTitle: string;
  projectLink: string;
  index: number;
  img: any;
  logos: string[];
  active: number;
  setActive: any;
}

export const projectList = [
  {
    id: 4,
    projectTitle: "Todo List with Next.js and MongoDB",
    projectLink: "https://todoapp-nextjs-theta.vercel.app",
    img: to_do_list,
    logos: [NextJs, ReactJs, Tailwind, Typescript, Mongodb],
  },
  {
    id: 3,
    projectTitle: "Thread Clones",
    projectLink: "https://thread-clone-self.vercel.app/",
    img: thread,
    logos: [NextJs, ReactJs, Tailwind, Typescript, Mongodb],
  },
  {
    id: 2,
    projectTitle: "Landing page, Hoobank",
    projectLink: "https://react-hoobank-mu.vercel.app/",
    img: hoobank,
    logos: [NextJs, ReactJs, Tailwind, Typescript],
  },
  {
    id: 1,
    projectTitle: "Age Calculator",
    projectLink: "https://age-calculator-w-next-js.vercel.app/",
    img: calculator,
    logos: [NextJs, ReactJs, Tailwind, Typescript],
  },
  {
    id: 0,
    projectTitle: "Interactive card details",
    projectLink: "https://interactive-card-details-psi.vercel.app/",
    img: cardDetails,
    logos: [NextJs, ReactJs, Tailwind],
  },
];

export const contactList = [
  {
    id: 1,
    contactTitle: "WhatsApp",
    contactLink: "https://wa.me/082225035259",
    icon: WhatsApp,
  },
  {
    id: 2,
    contactTitle: "LinkedIn",
    contactLink: "https://www.linkedin.com/in/yoga-pangestu-395b682b3/",
    icon: LinkedIn,
  },
  {
    id: 3,
    contactTitle: "Github",
    contactLink: "https://github.com/Yoga723",
    icon: Github,
  },
  {
    id: 4,
    contactTitle: "Mail",
    contactLink: "mailto:yogapangestu16@gmail.com",
    icon: Mail,
  },
];

// Motion Variables
export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
