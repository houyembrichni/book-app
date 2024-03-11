import React from "react";
import "./aboutus.css";

import Slider from "./components/slider";

function Aboutus() {
  return (
    <div className="aboutus">
      <h2>Our purpose</h2>
      <p>
        My library is a place Where books and sources of information are stored.
        They make it easier for people to get access to them for various
        purposes . The purpose of the Library is to support teaching, learning
        and research In the University, This is a growing collection of
        contemporary open access e-books. The books in this collection cover a
        wide range of subjects, including history, music, poetry, technology,
        and works of fiction. Most of the books in this collection were
        published in English. All of the books may be read online or downloaded
        as a PDF. Libraries are very helpful and economical too. They include
        books, AudioBooks , and more. In other words, they are an
        all-encompassing source of information.
      </p>
      <Slider />
    </div>
  );
}
export default Aboutus;
