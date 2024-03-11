import "./Hero.css";
import video from "../assets/video/bg.mp4";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="Hero">
      <h1>
        Today's research,
        <br />
        tomorrow's innovation
      </h1>
      <div className="Hero-container">
        <h2> Hi, we're StoryRoom. </h2>
        <h4> The world's largest storytelling community </h4>
        <p>
          Home to 97 million people who spend more than 26 billion minutes a
          month on original stories, StoryRoom has democratized storytelling for
          a new generation.
        </p>
        <Link to="/books">
          <button className="btn"> Get Start with Books </button>
        </Link>
      </div>
      <div className="videoback"></div>
      <video loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
