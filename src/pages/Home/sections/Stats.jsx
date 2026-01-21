import React from "react";
import icon_college from "../assets/icon_college.svg";
import icon_eyeball from "../assets/icon_eyeball.svg";
import icon_govt from "../assets/icon_govt.svg";
import icon_footfall from "../assets/icon_footfall.svg";
import icon_corporate from "../assets/icon_corporate.svg";
import icon_events from "../assets/icon_events.svg";
export default function Stats() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="grid grid-cols-3 gap-y-10 gap-x-8 max-w-5xl px-6">

        <Stat value="200+" label="COLLEGES" img={icon_college}/>
        <Stat value="200k+" label="EYEBALLS" img={icon_eyeball}/>
        <Stat value="30+" label="GOVT. ORG" img={icon_govt}/>

        <Stat value="80k+" label="FOOTFALLS" img={icon_footfall}/>
        <Stat value="75+" label="CORPORATES" img={icon_corporate}/>
        <Stat value="50+" label="EVENTS" img={icon_events}/>

      </div>
    </section>
  );
}

function Stat({ value, label,img }) {
  return (
    <div className="flex items-center gap-3">

      {/* Icon */}
      <img
        src={img}
        alt=""
        className="w-6 h-6"
      />

      {/* Text */}
      <div className="flex flex-col text-[#DAB8FF]">
        <span className="text-lg font-bold font-white">
          {value}
        </span>
        <span className="text-xs tracking-wide">
          {label}
        </span>
      </div>

    </div>
  );
}