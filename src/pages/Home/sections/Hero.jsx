import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import maskedimg from "../assets/masked_image.svg";
import ignusLogo from "../assets/ignus_logo.svg";


export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex justify-center"
    >
      <Navbar />
      <div className="relative w-full max-w-7xl px-4 py-24 flex flex-col items-center">

        {/* IGNUS LOGO */}
        <img
          src={ignusLogo}
          alt="Ignus 2026"
          className="w-full max-w-5xl h-auto"
        />

        {/* CTA ROW */}
        <div className="mt-12 flex items-center gap-6 group">

          {/* Left Decorative Image */}
          <img
            src={maskedimg}
            alt=""
            className="w-6 sm:w-8 md:w-26 h-auto 
            transition-transform duration-300 
            group-hover:-rotate-30 ease-out"
          />

          {/* Register Button */}
          <Link
            to="/auth"
            className="
              px-10 py-2
              rounded-full
              border
              border-[#FFCD7A]
              text-[#FFCD7A]
              bg-black
              font-medium
              transition-all duration-300
              hover:bg-[#FFCD7A]
              hover:text-black
              hover:px-14
            "
          >
            Register
          </Link>

          {/* Right Decorative Image */}
          <img
            src={maskedimg}
            alt=""
            className="w-6 sm:w-8 md:w-26 h-auto 
            transition-transform duration-300 
            group-hover:rotate-30 ease-out"
          />
        </div>

      </div>
    </section>
  );
}