import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </>
  );
}
