import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import flashDramaImg from "../../pages/Events/images/flash_drama_img.webp";
import "./FlashDramaPopup.css";

const FLASH_DRAMA = {
  name: "FLASHDRAMA",
  venue: "Online",
  date: "7th March",
  image: flashDramaImg,
  link: "https://docs.google.com/forms/d/e/1FAIpQLSf-0qkv3vvsYqYZlcQyhB2AXbXQSwkWeEtz-80FvSyrCR4h2A/viewform?usp=send_form",
  sponsor: {
    name: "Kuku TV",
    logo: "/images/logo_kuku.png",
  },
};

function FlashDramaPopup() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  // Only show on homepage
  if (location.pathname !== "/") return null;
  if (!isOpen) return null;

  return (
    <div className="flash-popup-overlay" onClick={() => setIsOpen(false)}>
      <div className="flash-popup-modal" onClick={(e) => e.stopPropagation()}>
        <button className="flash-popup-close" onClick={() => setIsOpen(false)}>
          ✕
        </button>

        <div className="flash-popup-content">
          {/* LEFT — EVENT IMAGE */}
          <div className="flash-popup-left">
            <img src={FLASH_DRAMA.image} alt="Flash Drama" />
          </div>

          {/* RIGHT — DETAILS */}
          <div className="flash-popup-right">
            <h2>{FLASH_DRAMA.name}</h2>

            <p>
              <strong>Venue:</strong> {FLASH_DRAMA.venue}
            </p>
            <p>
              <strong>Submission Deadline:</strong> {FLASH_DRAMA.date}
            </p>

            <div className="flash-popup-buttons">
              <a
                href={FLASH_DRAMA.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flash-popup-register-btn"
              >
                Submission Form
              </a>
              <a
                href="https://drive.google.com/file/d/1cQ7R3Lwu8KannwIWUKmb5fgbCOMNKJYD/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flash-popup-rulebook-btn"
              >
                Rulebook
              </a>
            </div>

            <div className="flash-popup-prize">
              🏆 <span>Prize Pool:</span> <strong>₹25,000</strong>
            </div>
            <div className="flash-popup-sponsor">
              <span>Powered by</span>
              <img src={FLASH_DRAMA.sponsor.logo} alt={FLASH_DRAMA.sponsor.name} />
              <span className="sponsor-name">{FLASH_DRAMA.sponsor.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashDramaPopup;
