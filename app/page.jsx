import { About } from "@/components/About";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen w-full flex-col">
      <Hero />
      <About />
      <HowWeWork />
    </main>
  );
};

export default page;
