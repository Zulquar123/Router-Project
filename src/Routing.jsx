import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
