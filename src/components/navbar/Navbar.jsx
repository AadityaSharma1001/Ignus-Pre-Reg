import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "./navLinks";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.svg";
import { isLoggedIn, isProfileComplete, clearAuthCookies } from "../../utils/cookies";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // ✅ login state from cookie

  const handleLogout = async () => {
    setProfileDropdownOpen(false);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/account/logout/`, {
        method: "POST",
        credentials: "include",
      });
      console.log("Logout response:", response.status);
    } catch (error) {
      console.error("Logout error:", error);
    }
    // Clear cookies on frontend as fallback
    clearAuthCookies();
    window.location.href = "/login";
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full px-6 py-2 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex items-center gap-2 relative">
            <div className="absolute inset-0 bg-white/30 blur-xl rounded-full scale-150" />
            <Link to="/">
              <img
                src={logo}
                alt="Ignus"
                className="h-12 md:h-14 w-auto relative z-10 invert"
              />
            </Link>
          </div>

          {/* Desktop Links (Centered) */}
          <ul className="hidden lg:flex gap-10 text-white items-center absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-rosiana text-base md:text-lg tracking-wide ease-out hover:text-purple-300 transition-all duration-200 hover:scale-[1.1] inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn() && isProfileComplete() ? (
              <div className="relative" ref={dropdownRef}>
                {/* Profile Image Button */}
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="relative group focus:outline-none"
                  aria-label="Profile menu"
                  aria-expanded={profileDropdownOpen}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-purple-500/40 rounded-full blur-md group-hover:bg-purple-400/60 transition-all duration-300" />
                    {/* Profile image container */}
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-purple-400/50 group-hover:border-purple-300 transition-all duration-300 group-hover:scale-105">
                      <img
                        src={profile}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-gray-900" />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 origin-top-right">
                    {/* Dropdown arrow */}
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-800/95 rotate-45 border-l border-t border-purple-500/30" />

                    {/* Dropdown content */}
                    <div className="relative bg-gray-800/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-xl shadow-purple-900/20 overflow-hidden">
                      {/* Gradient accent */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />

                      <div className="py-2">
                        {/* Profile Option */}
                        <Link
                          to="/profile"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-purple-500/20 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm">My Profile</span>
                        </Link>

                        {/* Divider */}
                        <div className="mx-4 my-1 border-t border-gray-700/50" />

                        {/* Logout Option */}
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-red-500/20 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm text-red-400 group-hover:text-red-300">Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
              >
                Login / Register
              </Link>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block w-7 h-0.5 bg-white mb-1.5" />
            <span className="block w-7 h-0.5 bg-white mb-1.5" />
            <span className="block w-7 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm">
            <ul className="flex flex-col gap-4 px-6 py-6 text-white">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-rosiana text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Mobile Auth Section */}
              {isLoggedIn() && isProfileComplete() ? (
                <>
                  <li>
                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 py-2 font-rosiana text-lg"
                    >
                      <img
                        src={profile}
                        alt="Profile"
                        className="h-6 w-6"
                      />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left py-2 font-rosiana text-lg text-purple-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="py-2 font-rosiana text-lg text-purple-300"
                  >
                    Login / Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}