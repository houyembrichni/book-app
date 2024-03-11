import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function MainNavBar() {
  const [toggle,setToggle]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>400){
        setToggle(true)
      }
      else{
        setToggle(false)
      }
    })
  })
  return (
    <div className={!toggle?"header-box":'header-box-active'}>
      <Logo />
      <nav className="NavBar">
        <div className="Navlinks">
          <Link to="/"> Home </Link>
          <Link to="/books"> Books </Link>
          <Link to="/bestsellers"> BestSellers</Link>
          <Link to="/audiobooks"> AudioBooks</Link>
          <Link className="Log" to="/login">
            Connection
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNavBar;
