import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import mascot_video from "../assets/video_mascot.mp4";
export default function MascotSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 flex justify-center overflow-hidden"
    >
      {/* Radial glow behind mascot */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-white
          opacity-40
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative w-full max-w-6xl px-4 flex flex-col items-center text-center">

        {/* Mascot Video */}
        <video
          ref={videoRef}
          src={mascot_video}
          muted
          playsInline
          className="w-80 sm:w-96 md:w-[500px] h-auto"
        />

        {/* Tagline */}
        <p className="mt-6 text-sm italic font-bold font-rosiana text-[#370068]">
          “Step In. Stay Awake. The Carnival Has Begun.”
        </p>

        {/* Register Button */}
        <Link to="/auth" className="mt-4 px-8 py-2 rounded-full bg-black text-[#FFD966]">
          Register
        </Link>

        
      </div>
    </section>
  );
}