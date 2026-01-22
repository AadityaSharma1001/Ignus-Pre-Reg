import React from "react";
import prakriti_circle from "../assets/prakriti_circle.svg";
export default function InitiativePrakriti() {
  return (
    <section className="w-full py-20 flex justify-center">
      <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 md:items-center gap-8">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">

          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-rosiana uppercase text-[#000000] leading-tight tracking-wider">
              Initiative
            </h2>
            <h2 className="text-4xl md:text-5xl uppercase text-[#000000] font-rosiana leading-tight tracking-wider">
              Prakriti
            </h2>
          </div>

          <p className="text-lg md:text-xl leading-relaxed max-w-md font-caudex text-[#333]">
            Prakriti is the social wing of IGNUS. The sense of social upliftment
            boosts our efforts to bring a change in society through our social
            drive. We profess what we follow.
          </p>

          <button className="w-fit px-6 py-2 border border-[#370068] rounded font-rosiana text-[#370068] hover:bg-[#370068] hover:text-white transition-colors">
            View More
          </button>

        </div>

        {/* RIGHT DECORATIVE CIRCLE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={prakriti_circle}
            alt="Prakriti Decorative Circle"
            className="w-48 sm:w-56 md:w-72 lg:w-80 h-auto"
          />
        </div>

      </div>
    </section>
  );
}