import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage.js";
import CabinetPage from "../pages/CabinetPage.js";
import { TestPage } from "../pages/TestPage.js";
import CabinetTestStat from "./cabinet/CabinetTestStat.js";

export const AppRouter = () => {
  return <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/cabinet" element={<CabinetPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/testStat" element={<CabinetTestStat />} />
    </Routes>;
};
