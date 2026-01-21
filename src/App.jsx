import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import { Desktop } from "./screens/Desktop";
import React from "react";
import SEO from "./SEO";

function App() {
  return (
    <div className="main-page">
      <SEO />    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Desktop />} />
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
