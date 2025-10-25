import { About } from "@/components/About";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen w-full flex-col">
      <Hero />
      <About />
    </main>
  );
};

export default page;
