import { Link } from "next-view-transitions";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const QuickLinks = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/", title: "About" },
  { id: 3, url: "/", title: "Work" },
  { id: 4, url: "/", title: "Contact" },
];

const SocialLinks = [
  {
    id: 1,
    url: "https://instagram.com",
    title: "Instagram",
  },
  {
    id: 2,
    url: "https://instagram.com",
    title: "Facebook",
  },
  {
    id: 3,
    url: "https://instagram.com",
    title: "Twitter",
  },
  {
    id: 4,
    url: "https://linkedin.com",
    title: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <section className='w-full h-fit pt-10 bg-black bg-[url("/FooterImg.webp")] bg-center bg-cover bg-no-repeat border-t border-white/10 flex flex-col items-center justify-center'>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start justify-between w-full h-full p-10 gap-10">
        {/* First Box Content */}
        <div className="w-full h-full flex flex-col justify-center gap-5">
          <Link href="/">
            <Image src="/Logo.svg" width={70} height={70} alt="Logo" />
          </Link>
          <h1 className="text-4xl text-white font-semibold">Loventor</h1>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, at. Odio sapiente architecto dolorum quaerat,
            perferendis voluptatem ipsa sed asperiores?
          </p>

          <Link
            href="/contact"
            className="bg-secondary w-fit shadow-2xl shadow-secondary/30 hover:bg-secondary/70 transition-all duration-300 px-5 py-4 rounded-lg"
          >
            Connect with Us
          </Link>
        </div>

        {/* Second Box Content */}
        <div className="w-full h-full flex flex-col items-start md:items-center justify-center">
          <div className="flex gap-5 flex-col">
            <h1 className="text-white text-2xl font-semibold">Quick Links</h1>
            <div className="flex flex-col w-fit item-start gap-1">
              {QuickLinks.map((item) => {
                return (
                  <div className="flex gap-2" key={item.id}>
                    <Link
                      key={item.id}
                      href={item.url}
                      className="text-[#5f5f62] hover:text-white transition-all duration-300"
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Third Box Content */}
        <div className="w-full h-full flex flex-col items-start md:items-center justify-center">
          <div className="flex gap-5 flex-col">
            <h1 className="text-white text-2xl font-semibold">
              Connect with us
            </h1>
            <div className="flex flex-col w-fit item-start gap-1">
              {SocialLinks.map((i) => {
                return (
                  <Link
                    key={i.id}
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#5f5f62] hover:text-white transition-all duration-300"
                  >
                    <span>{i.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight Bar */}
      <div className="w-full h-fit border-t border-white/20 flex items-center justify-between">
        <div className="flex flex-col items-center justify-center md:justify-between md:flex-row mx-auto max-w-7xl w-full p-5 ">
          <p className="text-gray-400">© 2026 Loventor Solution</p>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className=" text-gray-500 hover:text-gray-200 transition-all duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className=" text-gray-500 hover:text-gray-200 transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
