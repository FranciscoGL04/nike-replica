import "./css/style.css";
import { Link } from "react-router-dom";
import video from "./images/video1280version.mp4";

function HomeVideo() {
  return (
    <div>
      {/* Hero Video Section */}
      <div className="hero-section">
        <div className="video-container">
          <video
            src={video} 
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="hero-text">
          <h4 className="hero-subtitle">
            The can-do self is 42.2 km ahead of you.
          </h4>
          <h1 className="hero-title">JUST DO IT.</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo;