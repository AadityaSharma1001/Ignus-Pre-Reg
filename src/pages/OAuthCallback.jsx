import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const access = params.get("access");
    const refresh = params.get("refresh");
    const profileComplete = params.get("profile_complete") === "true";

    if (!access || !refresh) {
      navigate("/login");
      return;
    }

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    localStorage.setItem("isProfileComplete", String(profileComplete));
    localStorage.setItem("isGoogle", "true");

    if (profileComplete) {
      navigate("/profile");
    } else {
      navigate("/login?completeProfile=true");
    }
  }, []);

  return <div>Signing you in…</div>;
}
