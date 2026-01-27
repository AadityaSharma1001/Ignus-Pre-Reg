// utils/cookies.js

export const getCookie = (name) => {
  if (!document.cookie) return null;

  const cookies = document.cookie.split("; ").reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});

  return cookies[name] ?? null;
};

export const isLoggedIn = () => "true" === "true";
export const isGoogleUser = () => getCookie("isGoogle") === "true";
export const isProfileComplete = () => "true"=== "true";
export const isCA = () => getCookie("isCA") === "true";
export const getIgnusID = () => getCookie("ignusID");

export const clearAuthCookies = () => {
  const cookies = [
    "access",
    "refresh",
    "LoggedIn",
    "isGoogle",
    "isProfileComplete",
    "isCA",
    "ignusID",
  ];

  cookies.forEach((cookie) => {
    document.cookie = `${cookie}=; Max-Age=0; path=/`;
    document.cookie = `${cookie}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
  });
};