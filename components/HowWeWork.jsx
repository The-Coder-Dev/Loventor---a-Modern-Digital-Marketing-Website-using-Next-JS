import React from "react";
import Image from "next/image";

const HowWeWork = () => {
  return (
   <section className="w-full min-h-screen bg-black text-white flex items-start justify-center py-20 px-10">
  {/* Left Side — Scrollable Text */}
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SCROLL CONTENT */}
        <div className="space-y-24">
          <div className="h-screen flex items-center">
            <h2 className="text-3xl font-semibold">Creative Web Experiences</h2>
            <p className="text-gray-300 leading-relaxed">
              I design and build modern, responsive websites using Next.js and WordPress.
              Each project is tailored to the brand’s personality and user goals.
            </p>
          </div>

          <div className="h-screen flex items-center">
            <h2 className="text-3xl font-semibold">Smooth Performance</h2>
            <p className="text-gray-300 leading-relaxed">
              Lenis smooth scrolling ensures a buttery experience and improves perception of speed
              without compromising performance.
            </p>
          </div>

          <div className="h-screen flex items-center">
            <h2 className="text-3xl font-semibold">Clean Code</h2>
            <p className="text-gray-300 leading-relaxed">
              All components are optimized for maintainability and scalability — ensuring your website
              grows with your brand.
            </p>
          </div>
        </div>
    </div>

  {/* Right Side — Sticky Image */}
  <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
    <img
      src="/aboutImg.webp"
      alt="Sticky Visual"
      className="w-3/4 h-auto object-cover rounded-xl"
    />
  </div>
</section>

  );
};

export default HowWeWork;
