import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Desktop } from "./screens/Desktop";

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <Desktop />
    </StrictMode>,
);
