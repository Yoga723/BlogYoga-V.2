import {
  FaWhatsapp as WhatsApp,
  FaLinkedin as LinkedIn,
  FaGithub as Github,
} from "react-icons/fa";
import { SiGmail as Mail } from "react-icons/si";
import hoobank from "@/public/hoobankLanding.png";
import calculator from "@/public/calculator.png";
import cardDetails from "@/public/cardDetails.png";
import thread from "@/public/thread.png";
import NextJs from "@/public/nextjs.svg";
import ReactJs from "@/public/react.svg";
import Tailwind from "@/public/tailwind.svg";
import Vite from "@/public/vite.svg";
import Typescript from "@/public/typescript.svg";

export const projectList = [
  {
    id: 0,
    projectTitle: "Interactive card details",
    projectLink: "https://interactive-card-details-psi.vercel.app/",
    img: cardDetails,
    logo_1: NextJs,
    logo_2: ReactJs,
    logo_3: Tailwind,
    logo_4: "",
  },
  {
    id: 1,
    projectTitle: "Age Calculator",
    projectLink: "https://age-calculator-w-next-js.vercel.app/",
    img: calculator,
    logo_1: NextJs,
    logo_2: ReactJs,
    logo_3: Tailwind,
    logo_4: Typescript,
  },
  {
    id: 2,
    projectTitle: "Landing page, Hoobank",
    projectLink: "https://firstreactlandingpage.000webhostapp.com/",
    img: hoobank,
    logo_1: ReactJs,
    logo_2: Vite,
    logo_3: Tailwind,
    logo_4: Typescript,
  },
  {
    id: 3,
    projectTitle: "Thread Clones",
    projectLink: "https://thread-clone-self.vercel.app/",
    img: thread,
    logo_1: NextJs,
    logo_2: ReactJs,
    logo_3: Tailwind,
    logo_4: Typescript,
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
export const fadeIn = (direction, type, delay, duration) => ({
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
