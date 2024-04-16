import {
  FaWhatsapp as WhatsApp,
  FaLinkedin as LinkedIn,
  FaGithub as Github,
} from "react-icons/fa";
import { SiGmail as Mail } from "react-icons/si";

export const projectList = [
  {
    id: 0,
    projectTitle: "Website landing page, Hoobank",
    projectLink: "https://firstreactlandingpage.000webhostapp.com/",
    img: "",
  },
  {
    id: 1,
    projectTitle: "Interactive card details",
    projectLink: "https://interactive-card-details-psi.vercel.app/",
    img: "",
  },
  {
    id: 2,
    projectTitle: "Thread Clones",
    projectLink: "https://thread-clone-self.vercel.app/search",
    img: "",
  },
  {
    id: 3,
    projectTitle: "Age Calculator",
    projectLink: "https://age-calculator-w-next-js.vercel.app/",
    img: "",
  },
];

export const contactList = [
  {
    id: 1,
    contactTitle: "WhatsApp",
    contactLink: "https://firstreactlandingpage.000webhostapp.com/",
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
    contactLink: "yogapangestu16@gmail.com",
    icon: Mail,
  },
];


// Motion Variables
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
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
      ease: 'easeOut',
    },
  },
});