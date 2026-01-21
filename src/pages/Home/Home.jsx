import React from "react";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Navbar from "../../components/navbar/Navbar";
import Stats from "./sections/Stats";
import Footer from "../../components/ui/Footer";
import InitiativePrakriti from "./sections/InitiativePrakriti";
import MascotSection from "./sections/MascotSection";
import MidnightCarnival from "./sections/MidnightCarnival";
import ContactUs from "./sections/ContactUs";

export default function Home() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main>
        {/* First gradient zone: Navbar to MidnightCarnival */}
        <div 
          className="relative pt-16"
          style={{
            background: 'linear-gradient(to bottom, #000120 10%, #311C7B 86%, #7F56D3 100%)'
          }}
        >
          <Hero />
          <AboutUs />
          <Stats />
          <MidnightCarnival />
        </div>

        {/* Second gradient zone: InitiativePrakriti to Footer */}
        <div 
          className="relative"
          style={{
            background: 'linear-gradient(to bottom, #370068 0%, #FFE0A8 35%, #FFFFFF 48%, #FFFFFF 86%, #FFE0A8 100%)'
          }}
        >
          <InitiativePrakriti />
          <MascotSection />
          <ContactUs />
          <Footer />
        </div>
      </main>
    </>
  );
}

