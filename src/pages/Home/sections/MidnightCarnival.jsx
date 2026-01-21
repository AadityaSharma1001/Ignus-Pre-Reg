import React from "react";
import ferrisWheel from "../assets/ferris_wheel.svg";
import carnival_1 from "../assets/carnival_1.svg";
export default function MidnightCarnival() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-0 flex flex-col items-center">
      
      {/* CSS for wheel rotation */}
      <style>
        {`
          @keyframes rotateCounterClockwise {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }
          .rotate-wheel {
            animation: rotateCounterClockwise 30s linear infinite;
          }
        `}
      </style>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center relative z-20 text-[#FFFFFF] mb-6">
        The Midnight Carnival
      </h2>

      {/* Visual scene - full width */}
      <div className="relative w-full">

        {/* FERRIS WHEEL - positioned at top-right of skyline with rotation */}
        <img
          src={ferrisWheel}
          alt="Ferris Wheel"
          className="absolute -top-[30%] right-[5%] w-[35%] md:w-[30%] h-auto opacity-40 z-0 rotate-wheel"
        />

        {/* FOREGROUND SKYLINE - full width edge to edge */}
        <img
          src={carnival_1}
          alt="Carnival Skyline"
          className="relative z-10 w-full h-auto"
        />

      </div>
    </section>
  );
}