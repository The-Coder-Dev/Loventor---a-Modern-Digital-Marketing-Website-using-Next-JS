"use client"
import React from "react";
import Infotip from "./Infotip";
import { Link } from "next-view-transitions";


const Hero = () => {

  return (
    <section className="w-full h-screen relative ">
      <div className="flex flex-col items-center justify-center mx-auto max-w-7xl  h-full px-10 ">
        <video
          src="/mainbg.mp4"
          poster="/poster.png"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" 
          className="absolute inset-0 w-full h-screen object-cover -z-10    "
        ></video>
        <div className="flex flex-col gap-4 ">
          <Infotip boxContent={"Best"} text={" Agency in Mathura"}/>

          <h1 className="text-white  text-6xl md:text-8xl uppercase font-bold">
            Elevate your brand transform your experience
          </h1>
          <p className="text-white/80 tracking-wide md:w-150 ">
            We specialize in crafting unique digital presence that help
            businesses grow and stand out in their industries.
          </p>

          <div className="flex gap-5">
            <Link href="/contact" className="bg-secondary hover:bg-secondary/70 transition-all duration-300 px-5 py-4 rounded-lg">
              Connect with Us
            </Link>

            <Link href="/about" className="bg-secondary/20 border-[1px] border-white/20 hover:bg-secondary/10 transition-all duration-300 text-white px-5 py-4 rounded-lg backdrop-blur-2xl">
              What is Loventor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
