import Image from "next/image";
import { About, Profile, Projects } from "@/components/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-bl from-[#137297] to-[#1992c1] ">
      <Profile />
      <About />
      <Projects />
    </main>
  );
}


