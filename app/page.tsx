import { About, Profile, Projects, Skills } from "@/components/index";
import { TwinkleStars } from "@/components/index";

export default function Home() {
  // Alternate background color blue-darkblue-blue : bg-gradient-to-bl from-[#1992c1] from-5% via-[#106080] to-[#1992c1] to-98%

  return (
    <main className="flex min-h-screen w-screen flex-col m-0 items-center justify-between p-12 bg-[#152029] overflow-hidden relative homescreen">
      <div className=" absolute max-lg:w-48 max-lg:h-48 w-80 h-80 rounded-full  max-lg:-left-36 -left-60  -z-1 blur-3xl bg-gradient-to-br  from-sky-900 to-sky-600 " />
      <div className=" absolute w-48 h-52 opacity-30 rounded-full max-lg:top-40 max-sm:hidden z-0 blur-lg backdrop-blur-md bg-[#3E8586]" />
      {/* <div className=" absolute w-48 h-48 rounded-full max-lg:bottom-48 max-lg:-right-36 z-0 blur-3xl bg-gradient-to-br from-amber-800 to-amber-600 animate-starAnimation" /> */}

      <div className=" absolute w-96 h-52 opacity-25 rounded-[50%] top-[38rem] -left-20 -z-1 rotate-[120deg] blur-2xl backdrop-blur-md bg-[#9542E859] " />
      <div className="relative top-[50rem] -right-36 -z-1 animate-starAnimation">
        <div className=" absolute w-96 h-64 opacity-40 rounded-[50%] rotate-[120deg] blur-3xl -top-36 bg-[#7AEBFB]" />
        <div className=" absolute w-48 h-52 opacity-40 rounded-[50%] rotate-[120deg] blur-3xl top-10 bg-[#d97706]" />
        <div className=" absolute w-36 h-28 opacity-40 rounded-[50%] rotate-[120deg] blur-3xl top-15 bg-[#2565E1]" />
        <div className=" absolute w-52 h-44 opacity-40 rounded-[50%] rotate-[120deg] blur-3xl top-20 bg-[#CFECFD]" />
      </div>

      {/* <TwinkleStars/> */}
      <Profile />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
