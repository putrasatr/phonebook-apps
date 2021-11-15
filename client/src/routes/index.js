import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/container";
import PhoneBookBox from "../components/PhoneBookBox";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PhoneBookBox />} />
      <Route path="/welcome" element={<Auth />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
