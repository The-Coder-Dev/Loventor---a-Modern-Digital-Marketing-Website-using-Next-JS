import Image from "next/image";
import React from "react";
import { Link } from "next-view-transitions";
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import PageButton from "./PageButton";

export const About = () => {
  return (
    <section className="flex items-center justify-center w-full  bg-black overflow-hidden  md:pt-0">
      <div className="mx-auto max-w-7xl px-10 w-full h-full md:flex md:items-center md:flex-row flex-col gap-10 pt-20 pb-20 ">
        <div className="w-full h-[300px] md:h-[500px] relative flex items-center justify-center ">
          <Image
            src="/aboutImg.webp"
            alt="about"
            fill
            className="object-cover rounded-xl outline-6 outline-gray-300/7 shadow-2xl shadow-primary/20"
          />
        </div>

        <div className="w-full h-full flex flex-col justify-center gap-5  pt-10">
          <PageButton PageTitle={"About Loventor"} />
          <h1 className="text-white text-4xl md:text-6xl">
            Building Stronger Brands{" "}
            <span className="text-[#999999]">Creating Impressions!</span>
          </h1>
          <p className="font-medium  w-80 tracking-wide md:w-120 text-gray">
            Delivering high-quality, on-demand designs with precision. Elevate
            your brand effortlessly, one snap at a time.
          </p>

          <div className="flex items-start flex-col gap-10">
            <div className="flex flex-col items-start gap-4">
              <div className="flex gap-2 items-center rounded-full">
                <FaCheck
                  size={20}
                  className="text-white bg-primary rounded-full p-1"
                />
                <p className="text-gray">From $0 to $500,000 in revenue.</p>
              </div>
              <div className="flex gap-2 items-center rounded-full">
                <FaCheck
                  size={20}
                  className="text-white bg-primary rounded-full p-1"
                />
                <p className="text-gray">47% growth in new customers.</p>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-start gap-6 w-full">
              <Link
                href="/about"
                className="flex cursor-pointer text-white bg-primary shadow-2xl shadow-primary outline-accent hover:bg-blue-800 transition-colors duration-300 outline-2 px-4 py-2 rounded-xl w-full md:w-fit"
              >
                About Loventor
              </Link>
              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <FaStar className="text-yellow-500" size={15} />
                  <FaStar className="text-yellow-500" size={15} />
                  <FaStar className="text-yellow-500" size={15} />
                  <FaStar className="text-yellow-500" size={15} />
                  <FaStar className="text-yellow-500" size={15} />
                </div>
                <p className="text-gray">200+ Agencies Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
