import React from "react";
import PageButton from "./PageButton";
import Button from "./Button";
import { Link } from "next-view-transitions";

const CtaSection = () => {
  return (
    <section className="flex items-center justify-center h-fit p-5 w-full md:pb-20">
      <div className="mx-auto max-w-4xl w-full h-100 rounded-4xl bg-[url('/ctaImg.webp')] bg-cover bg-center bg-no-repeat border border-gray-300/10 ">
        <div className="w-full h-full overflow-hidden bg-black/50 backdrop-blur-xl rounded-4xl flex flex-col items-center justify-center gap-3 ">
        
        <PageButton PageTitle={"Join Us Now"} />

          <h1 className="text-white text-2xl md:text-5xl w-150 md:w-200 text-center font-semibold">Each Project we Undertake<br></br><span className="text-gray">is a Unique Opportunity.</span></h1>

          <p className="text-gray w-80 md:w-120 text-center">Ready to take the next step? Join us now and start transforming your vision into reality with expert support.</p>

          <Link href="/contact" className="flex cursor-pointer text-white bg-primary shadow-2xl shadow-primary outline-accent hover:bg-blue-800  transition-colors duration-300 outline-2 px-4 py-2 rounded-xl">
            Book an Appointment
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;