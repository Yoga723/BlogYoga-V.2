import { About, Profile, Projects, Skills } from "@/components/index";
import { TwinkleStars } from "@/components/index";
import Image from "next/image";

export default function Home() {
  // Alternate background color blue-darkblue-blue : bg-gradient-to-bl from-[#1992c1] from-5% via-[#106080] to-[#1992c1] to-98%

  return (
    <main className="flex min-h-screen w-full flex-col m-0 items-center justify-between p-12 bg-[#152029] overflow-hidden relative homescreen scroll-auto">
      <div className=" absolute max-lg:w-48 max-lg:h-48 w-80 h-80 rounded-full  max-lg:-left-36 -left-60  -z-1 blur-3xl bg-gradient-to-br  from-sky-900 to-sky-600 " />
      {/* <div className=" absolute w-48 h-48 rounded-full max-lg:bottom-48 max-lg:-right-36 z-0 blur-3xl bg-gradient-to-br from-amber-800 to-amber-600 animate-starAnimation" /> */}

      {/* Coba ubah jadi SVG atau gambar lah meh performana ningkat/ te ngalag */}
      <div className="relative top-[50rem] -right-36 -z-1 lg:hidden animate-starAnimation">
        <div className=" absolute w-96 h-64 opacity-20 rounded-[50%] rotate-[120deg] blur-3xl -top-36 bg-[#7AEBFB]" />
        <div className=" absolute w-48 h-52 opacity-40 rounded-[50%] rotate-[190deg] blur-3xl top-10 bg-[#ef8105]" />
      </div>

      <TwinkleStars/>
      <Profile />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
