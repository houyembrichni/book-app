import React from "react";
import Hero from "../components/Hero";
import Aboutus from "../Aboutus";


function Home() {
  return (
    <div>
      {/* <MainNavBar /> */}
      <Hero />
      {<Aboutus /> }
    </div>
  );
}

export default Home;
