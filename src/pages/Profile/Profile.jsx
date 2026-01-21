import React from "react";
import profileBg from "./assets/profile.png";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <img src={profileBg} alt="Profile Background" className="profile-bg" />
    </div>

  );
}


