import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LpIndex from "@/pages/LpIndex";
import LpIndexB from "@/pages/LpIndexB";
import LpIndexC from "@/pages/LpIndexC";
import LpIndexD from "@/pages/LpIndexD";
import LpIndexE from "@/pages/LpIndexE";
import LpObrigado from "@/pages/LpObrigado";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LpIndex />} />
        <Route path="/b" element={<LpIndexB />} />
        <Route path="/c" element={<LpIndexC />} />
        <Route path="/d" element={<LpIndexD />} />
        <Route path="/e" element={<LpIndexE />} />
        <Route path="/obrigado" element={<LpObrigado />} />
        <Route path="*" element={<LpIndex />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
