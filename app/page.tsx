import Image from "next/image";
import { About, Profile, Projects } from "@/components/index";

export default function Home() {
  // Alternate background color blue-darkblue-blue : bg-gradient-to-bl from-[#1992c1] from-5% via-[#106080] to-[#1992c1] to-98%


  return (
    <main className="flex min-h-screen w-screen flex-col m-0 items-center justify-between p-12 bg-[#18181A] overflow-hidden relative homescreen">
      <div className=" absolute max-lg:w-48 max-lg:h-48 w-80 h-80 rounded-full  max-lg:-left-36 -left-60  z-0 blur-3xl bg-gradient-to-br  from-sky-900 to-sky-600" />
      <div className=" absolute w-48 h-52 opacity-30 rounded-full max-lg:top-40 max-sm:hidden z-0 blur-lg backdrop-blur-md bg-[#3E8586]" />
      <div className=" absolute w-48 h-48 rounded-full max-lg:bottom-48 max-lg:-right-36 z-0 blur-3xl bg-gradient-to-br from-amber-800 to-amber-600" />
      <Profile />
      <About />
      <Projects />
    </main>
  );
}
