import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage.js";
import CabinetPage from "../pages/CabinetPage.js";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/cabinet" element={<CabinetPage />} />
    </Routes>
  );
};
