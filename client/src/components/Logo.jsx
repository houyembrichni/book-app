import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import "./NavBarStyle.css";
import image from '../assets/image.png'
function Logo() {
  return ( 
    <NavLink to="/" className="navbar-logo">
      <img src={image} alt="" />
    </NavLink>
  );
}

export default Logo;
