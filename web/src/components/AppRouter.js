import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage.js";
import CabinetPage from "../pages/CabinetPage.js";
import { TestPage } from "../pages/TestPage.js";

export const AppRouter = () => {
  return <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/cabinet" element={<CabinetPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>;
};
