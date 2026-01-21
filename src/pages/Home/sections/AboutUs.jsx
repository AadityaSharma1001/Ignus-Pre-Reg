import React from "react";
import moon from "../assets/moon.svg";
import cloud from "../assets/cloud.png";
export default function AboutUs() {
  return (
    <section className="relative w-full py-16 flex justify-center overflow-hidden">

      {/* Cloud behind moon - full width */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-start">
        <img
          src={cloud}
          alt="clouds"
          className="w-full h-auto opacity-90"
        />
      </div>

      {/* Content layer */}
      <div className="relative flex flex-col items-center gap-6 max-w-4xl px-4 text-center">

        {/* Moon with glow effect */}
        <div className="relative">
          {/* Glow behind moon */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(135, 206, 250, 0.8) 0%, rgba(135, 206, 250, 0) 70%)',
              transform: 'scale(2)'
            }}
          />
          <img
            src={moon}
            alt="Moon"
            className="relative w-64 md:w-80 lg:w-96 h-auto"
            style={{ mixBlendMode: 'screen' }}
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF]">
          ABOUT US
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-[#FFFFFF]">
          IGNUS, the much anticipated annual socio-cultural fest of IIT Jodhpur, is now back, after three years.
          IGNUS celebrates art, culture and pluralism. It provides a stage for the creative and intellectual minds
          from across the country to showcase their incredible talent and creativity through art and culture.
        </p>

      </div>
    </section>
  );
}