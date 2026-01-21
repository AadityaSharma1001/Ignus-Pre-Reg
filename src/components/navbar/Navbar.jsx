import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.svg";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="relative mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Ignus"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-8 text-sm text-white list-none items-center">
            {navLinks.map((link) => (
              <li key={link.label}
              className="text-[#FCFCFC] cursor-pointer transition-opacity hover:opacity-80"
              >
                <a
                  href={link.href}
                  className="hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Profile Icon */}
            <li className="text-[#FCFCFC] cursor-pointer transition-opacity hover:opacity-80">
              <Link to="/profile">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-6 w-6"
                />
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-gray-200">
                <ul className="flex flex-col gap-4 px-4 py-4 text-black list-none">
                {navLinks.map((link) => (
                    <li key={link.label}>
                    <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-2"
                    >
                        {link.label}
                    </a>
                    </li>
                ))}
                {/* Profile Link in Mobile */}
                <li>
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2"
                  >
                    <img
                      src={profile}
                      alt="Profile"
                      className="h-5 w-5"
                    />
                    Profile
                  </Link>
                </li>
                </ul>
            </div>
            )}
      </nav>
    </header>
  );
}