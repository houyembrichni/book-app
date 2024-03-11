import React from "react";
import "./Footer.css";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <div className="contact-container">
        <p style={{width:"250px"}}>
          <h3> StoryRoom</h3>
          <br />
          Beyond the Page, Beyond the Imagination: Your Book Collection
          Adventure Awaits.
        </p>
        <div className="contact-section">
          <h3> Contact Information</h3>
          <p>
            Phone: <a href="tel:(+216)  97 427 288 "> (+216) 97 427 288 </a>{" "}
          </p>
          <p>
            Or <a href=" tel : (+216) 20 121  449 "> (+216) 20 121 449</a>
          </p>

          <p>
            Email: brichnihouyem908@gmail.com
            <br />
            erigeouni2645@gmail.com
          </p>
        </div>

        <div className="follow-us-section" style={{width: '250px'}}>
          <h3 style={{textAlign:"center"}}>Follow Us</h3>
          <ul>
            <li className="facebook">
              <a
                href="http://www.facebook.com/houyem.brichni/ "
                target="_blank"
                rel="noopener"
                id="facebook"
              >
                <SiFacebook />
              </a>
            </li>
            <li className=" instagram">
              <a
                href="http://www.instagram.com/ouni_ariij/ "
                target="_blank"
                rel="noopener"
                id="insta"
              >
                <SiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/97427288"
                target="_blank"
                rel=""
                id="whatsapp"
              >
                <SiWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h4 className="footer-name">
        @ 2024 Book Searching <br />& Study literature
      </h4>
    </div>
  );
}
export default Footer;
