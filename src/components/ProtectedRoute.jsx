import React from "react";
import { Navigate } from "react-router-dom";

/* -------- helper to read cookie -------- */
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

export default function ProtectedRoute({ children }) {
  const isLoggedIn = getCookie("LoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}