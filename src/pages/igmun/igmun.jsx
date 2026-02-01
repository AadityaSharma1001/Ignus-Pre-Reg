import React from "react";
import "./igmun.css";
import igmun_logo from "./assests/igmun_logo.png";
import uncsw from "./assests/uncsw.png";
import unsc from "./assests/unsc.png";
import loksabha from "./assests/lok1.png";
import press from "./assests/press.jpeg";
import iit_logo from "./assests/iitj_logo3.png";
import sponser1 from "./assests/sponser_1.jpg";
import sponser2 from "./assests/sponser_2.png";
import sponser3 from "./assests/sponser_3.jpg";
import qr from "./assests/qr_code.png";
import schedule_igmun from "./assests/igmun_tt.jpg";
import usePageTitle from "../../hooks/usePageTitle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, isProfileComplete } from "../../utils/cookies";
import image_02 from "./assests/image_02.jpeg";

// Diplomatic background images
import heroBg from "./assests/image_01.jpg";
import flagsBg from "./assests/download (1).jpeg";
import unBuildingBg from "./assests/download.jpeg";
import unEmblem from "./assests/image_02.jpeg";

import agenda1 from "./assests/agenda1.png";
import agenda2 from "./assests/agenda2.png";
import agenda3 from "./assests/agenda3.png";
import agenda4 from "./assests/agenda4.png";
import image1 from "./assests/image1.png";
import image2 from "./assests/image2.png";

function scrollToRef(ref) {
  ref.current.scrollIntoView({ behavior: "smooth" });
}

const committees = [
  {
    name: "LOK SABHA",
    description:
      "The Lok Sabha committee will deliberate on the Digital Personal Data Protection (Amendment) Bill, 2026, focusing on strengthening privacy laws, regulating data usage, and ensuring accountability in the digital ecosystem.",
    image: image2,
    caption:
      "Discussion on the Digital Personal Data Protection (Amendment) Bill, 2026.",
    pdf: "#",
  },
  {
    name: "UNCSW - United Nations Commission on Status of Women",
    description:
      "The UNCSW committee will deliberate on Women Reproductive Health and the formulation of a Universal Reproductive Health & Rights Framework, 2026, addressing global healthcare equity, rights-based policies, and gender justice.",
    image: agenda2,
    caption:
      "Deliberation on Women Reproductive Health and formulation of a Universal Reproductive Health & Rights Framework, 2026.",
    pdf: "#",
  },
  {
    name: "UNSC - United Nations Security Council",
    description:
      "The UNSC committee will hold an emergency session on the Venezuela Crisis, assessing the legality of foreign military intervention and exploring solutions to maintain international peace and sovereignty.",
    image: agenda1,
    caption:
      "Emergency session of the UNSC on Venezuela Crisis and Assessing the Legality of Foreign Military Intervention in Venezuela.",
    pdf: "#",
  },
  {
    name: "Press Council of India",
    description:
      "The Press Council of India committee will discuss the role of media in Viksit Bharat 2047, examining whether neutral and factual journalism can act as the ultimate catalyst for a developed and progressive India.",
    image: image1,
    caption:
      "The Role of Media in Viksit Bharat 2047: Is Neutral and Factual Journalism the Ultimate Catalyst for a Developed India?",
    pdf: "#",
  },
];

function Igmun() {
  usePageTitle("IGMUN");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Auth guards
    if (!isLoggedIn()) {
      toast.info("Please login to register for IGMUN");
      setTimeout(() => navigate("/login"), 1200);
      return;
    }

    if (!isProfileComplete()) {
      toast.info("Please complete your profile first");
      setTimeout(() => navigate("/login"), 1200);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/register/`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_name: "IGMUN",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.Message || data || "Registration failed");
        return;
      }

      toast.success(data.Message || "IGMUN registered successfully 🎉");
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again later");
    }
  };

  return (
    <div className="igmun_app">
      {/* ===== HERO SECTION ===== */}
      <section
        className="igmun_section igmun_hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Floating particles */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        {/* Decorative gold corners */}
        <div className="igmun_gold-corner top-left"></div>
        <div className="igmun_gold-corner top-right"></div>
        <div className="igmun_gold-corner bottom-left"></div>
        <div className="igmun_gold-corner bottom-right"></div>

        <div className="igmun_hero-content">
          <div className="igmun_hero-image">
            <img
              src={igmun_logo}
              className="igmun_hero_logo1"
              alt="IGMUN Logo"
            />
            <img
              src={iit_logo}
              className="igmun_hero_logo2"
              alt="IIT Jodhpur Logo"
            />
          </div>

          <div className="igmun_hero-text">
            <h1>IGMUN 2026</h1>
            <p>Experience diplomacy and debate like never before</p>
            <span className="igmun_hero-subtitle">
              "The Midnight Carnival" — Where Ideas Unite Nations
            </span>
          </div>

          <div className="igmun_eb-button">
            <button onClick={handleRegister}>
              {!isLoggedIn()
                ? "LOGIN TO REGISTER"
                : !isProfileComplete()
                  ? "COMPLETE PROFILE TO REGISTER"
                  : "REGISTER NOW"}
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section
        className="igmun_section igmun_about"
        style={{ backgroundImage: `url(${unEmblem})` }}
      >
        <div className="igmun_about-content">
          <div className="igmun_about-image">
            <img src={image_02} alt="IGMUN Logo" />
          </div>
          <div className="igmun_about-text">
            <h2>About IGMUN</h2>
            <p>
              The{" "}
              <span className="highlight">
                Ignus Model United Nations (IGMUN)
              </span>{" "}
              at IIT Jodhpur is a prestigious two-day conference where high
              school and college students come together to debate and address
              pressing global challenges.
            </p>
            <p>
              Guided by the theme{" "}
              <span className="highlight">"The Midnight Carnival"</span>, the
              conference celebrates the fusion of diverse cultures and
              perspectives, fostering collaboration and diplomatic dialogue in
              the vibrant desert setting of Jodhpur.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COMMITTEE INTRO SECTION ===== */}
      <section
        className="igmun_section igmun_committee_intro"
        style={{ backgroundImage: `url(${flagsBg})` }}
      >
        <div className="igmun_committee_intro-center">
          <h2>The Model Committees</h2>
        </div>
        <div className="igmun_committee_intro-corners">
          <div className="igmun_committee_intro-corner top-left">
            <img
              src={uncsw}
              alt="UNCSW"
              className="igmun_committee_intro-image"
            />
            <p className="igmun_committee_intro-text">UNCSW</p>
          </div>
          <div className="igmun_committee_intro-corner top-right">
            <img src={unsc} alt="UNSC" className="igmun_committee_intro-image" />
            <p className="igmun_committee_intro-text">UNSC</p>
          </div>
          <div className="igmun_committee_intro-corner bottom-left">
            <img
              src={loksabha}
              alt="Lok Sabha"
              className="igmun_committee_intro-image"
            />
            <p className="igmun_committee_intro-text">Lok Sabha</p>
          </div>
          <div className="igmun_committee_intro-corner bottom-right">
            <img
              src={press}
              alt="Press Council"
              className="igmun_committee_intro-image"
            />
            <p className="igmun_committee_intro-text">Press Council</p>
          </div>
        </div>
      </section>

      {/* ===== COMMITTEES AGENDAS SECTION ===== */}
      <section
        className="igmun_section igmun_committees"
        style={{ backgroundImage: `url(${unBuildingBg})` }}
      >
        <h2>Committee Agendas</h2>
        {committees.map((committee, index) => (
          <div
            key={index}
            className={`igmun_committee ${index % 2 === 0 ? "igmun_left" : "igmun_right"
              }`}
          >
            <div className="igmun_committee-content">
              <img
                src={committee.image}
                alt={committee.name}
                className="igmun_committee-image"
              />
              <div className="igmun_committee-caption">
                <h4>{committee.caption}</h4>
              </div>
              <div className="igmun_committee-button">
                <a
                  href={committee.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coming Soon
                </a>
              </div>
            </div>
            <div className="igmun_committee-text">
              <h3>{committee.name}</h3>
              <p>{committee.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ===== REGISTRATION SECTION ===== */}
      <section
        className="igmun_section igmun_registration"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="igmun_registration-heading">Register Now</h1>
        <div className="igmun_registration-content">
          {/* Left Division: QR Code and Register Button */}
          <div className="igmun_registration-left">
            <img src={qr} alt="QR Code" className="igmun_qr-code" />
            <div className="igmun_eb-button">
              <button onClick={handleRegister}>
                {!isLoggedIn()
                  ? "LOGIN TO REGISTER"
                  : !isProfileComplete()
                    ? "COMPLETE PROFILE TO REGISTER"
                    : "REGISTER NOW"}
              </button>
            </div>
          </div>

          {/* Right Division: Contact Details */}
          <div className="igmun_registration-right">
            <p>For any queries, feel free to contact us at:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:igmun@iitj.ac.in">igmun@iitj.ac.in</a>
            </p>
            <p>
              <strong>Raditya Saraf:</strong> 9623044888
            </p>
            <p>
              <strong>Surmit:</strong> 9748630772
            </p>
            <p>
              <i>
                Be part of this transformative debate experience — where ideas
                meet action!
              </i>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Igmun;