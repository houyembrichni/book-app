import React from "react";
import "./NavBarStyle.css";

import Main from "./MainNavBar";
import Logo from "./Logo";
function NavBar() {
  return (
    <>
      <div className="navbar-container">
        {/* <Logo/>   */}
        <div className="group-search">
          <div className="navbar-genre">
            <div className="label">
              <label for="catalog-select"> Search the :</label>
            </div>
            <div className="selection">
              <select name="catalog" id="catalog-select">
                <option value=""> Catalog:Genre</option>
                <option value="Classic">Classic </option>
                <option value="Tragedy"> Tragedy</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value=" Action and Adventure">
                  Action and Adventure
                </option>
                <option value="Crime & Mystery">Crime & Mystery</option>
                <option value=" Romance"> Romance</option>
                <option value="Humor and Satire">Humor and Satire</option>
                <option value="Horror"> Horror</option>
                <option value=" Comics"> Comics</option>
                <option value="Comedy"> Comedy</option>
              </select>
            </div>
          </div>

          <div className="navbar-keyword">
            <div className=" label ">
              <label for="keyword-select"> By :</label>
            </div>
            <div className="selection">
              <select name=" keyword " id="keyword-select">
                <option value=" "> keyword</option>
                <option value=" Title">Title </option>
                <option value=" Description"> Description</option>
                <option value=" Price"> Price</option>
                <option value=" Rating"> Rating</option>
                <option value="Pages Number "> Pages Number</option>
                <option value=" Auther"> Auther</option>
                <option value=" Release"> Release</option>
              </select>
            </div>
          </div>
          <div className="Search">
            <input type="Search:" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={17}
                height={17}
                fill="white"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
