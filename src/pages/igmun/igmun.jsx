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
import qr from "./assests/qr_code.png"
import schedule_igmun from "./assests/igmun_tt.jpg";


function scrollToRef(ref) {
  ref.current.scrollIntoView({ behavior: 'smooth' });
};


import agenda1 from "./assests/agenda1.png";
import agenda2 from "./assests/agenda2.png";
import agenda3 from "./assests/agenda3.png";
import agenda4 from "./assests/agenda4.png";
import image1 from "./assests/image1.png";
import image2 from "./assests/image2.png";


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

  document.title = "IGMUN 2026 | IIT Jodhpur";

  return (
    <div className="igmun_app">
      {/* /* Hero Section  */}
      <section className="igmun_section igmun_hero">
        <div className="igmun_hero-image">
          <img src={igmun_logo} className="igmun_hero_logo1" alt="IGMUN Logo" />
          <img src={iit_logo} className="igmun_hero_logo2" alt="IGMUN Logo" />
        </div>


        <div className="igmun_hero-text">
          <h1>IGMUN 2026</h1>
          <p>Experience diplomacy and debate like never before.</p>
        </div>
        <div className="igmun_eb-button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScRAcJcuS-nT0rwKN_09wAWw-CoKiBAWSr01a5ZT7yMls3iCw/viewform?usp=header" target="_blank" rel="noopener noreferrer">
            Apply for Executive Board
          </a>
        </div>
      </section>


      {/* /* Schedule Section  */}
      {/* <section className="igmun_section igmun_schedule">
        <h2>Schedule</h2>
        <img src={schedule_igmun} alt="IGMUN Schedule" className="igmun_schedule-image" />
      </section> */}

      {/* about us */}
      <section className="igmun_section igmun_about">
        <div className="igmun_about-content">
          <div className="igmun_about-image">
            <img src={igmun_logo} alt="IGMUN Logo" />
          </div>
          <div className="igmun_about-text">
            <h2>About Us</h2>
            <p>
              The Ignus Model United Nations (IGMUN) at IIT Jodhpur is a two-day conference where high school and college students debate and address global challenges.
              Guided by the theme "Melting Mosaic", it. celebrates the fusion of cultures and ideas, fostering collaboration in Jodhpur's vibrant desert setting.
            </p>
          </div>

        </div>
      </section>

      {/* /* Committee Intro Section  */}
      <section className="igmun_section igmun_committee_intro">
        <div className="igmun_committee_intro-center">
          <h2>The Model Committees</h2>
        </div>
        <div className="igmun_committee_intro-corners">
          <div className="igmun_committee_intro-corner top-left">
            <img src={uncsw} alt="UNCSW" className="igmun_committee_intro-image" />
            <p className="igmun_committee_intro-text">UNCSW</p>
          </div>
          <div className="igmun_committee_intro-corner top-right">
            <img src={unsc} alt="UNSC" className="igmun_committee_intro-image" />
            <p className="igmun_committee_intro-text">UNSC</p>
          </div>
          <div className="igmun_committee_intro-corner bottom-left">
            <img src={loksabha} alt="Lok Sabha" className="igmun_committee_intro-image" />
            <p className="igmun_committee_intro-text">Lok Sabha</p>
          </div>
          <div className="igmun_committee_intro-corner bottom-right">
            <img src={press} alt="Press Council" className="igmun_committee_intro-image" />
            <p className="igmun_committee_intro-text">Press Council</p>
          </div>
        </div>
      </section>

      <section className="igmun_section igmun_committees">
        <h2>Committees Agendas</h2>
        {committees.map((committee, index) => (
          <div
            key={index}
            className={`igmun_committee ${index % 2 === 0 ? "igmun_left" : "igmun_right"}`}
          // ref={committee.name === "UNGA" ? {ungaRef} : committee.name === "UNHRC" ? {unhrcRef} : committee.name === "DISEC" ? {disecRef} : {lokRef}}
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
                <a href={committee.pdf} target="_blank" rel="noopener noreferrer">
                  Coming soon ...
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

      {/* /* Sponsors Section  */}
      {/* <section className="igmun_section igmun_sponsors">
        <h2>Sponsors</h2>
        <p>We are grateful to our sponsors for their support.</p>
        <div className="igmun_sponsor-logos">
          <img src={sponser1} alt="Sponsor 1" className="igmun_sponsor-logo" />
          <img src={sponser2} alt="Sponsor 2" className="igmun_sponsor-logo" />
          <img src={sponser3} alt="Sponsor 3" className="igmun_sponsor-logo" />
        </div>
      </section> */}


      {/* /* Contact Section  */}
      {/* Registration Section */}
      {/* Registration Section */}
      <section className="igmun_section igmun_registration">
        <h1 className="igmun_registration-heading">Register Now</h1>
        <div className="igmun_registration-content">
          {/* Left Division: QR Code and Register Button */}
          <div className="igmun_registration-left">
            <img src={qr} alt="QR Code" className="igmun_qr-code" />
            <a
              href="https://forms.gle/z3fjxS9vbmh3Bmtr9"
              target="_blank"
              rel="noopener noreferrer"
              className="igmun_form-link"
            >
              Register Here
            </a>
          </div>

          {/* Right Division: Text and Contact Details */}
          <div className="igmun_registration-right">
            <p>
              For any queries, feel free to contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:igmun@iitj.ac.in">igmun@iitj.ac.in</a>
            </p>
            <p>
              <strong>Tejas Gupta:</strong> 9810126941
            </p>
            <p>
              <strong>Naman Sharma:</strong> 9763384173
            </p>
            <p><i>

              Be part of this transformative debate experience : where ideas meet action!
            </i>
            </p>
          </div>
        </div>
      </section>




    </div>
  );
};


export default Igmun;