import "./css/style.css";
import { Link } from "react-router-dom";
import bannerImg from "./images/homeBannerImg.png"

function HomeBanner() {
  return (
    <div>
      
      <div id="banner-container">
        <Link href="#" className="banner-link">
        <img id="bannerImage" src={bannerImg} alt="nike-lego-banner"/>
        <div className="banner-overlay">
                  <p className="banner-text">Dunk Low x Lego Collection</p>
                  <h5 className="banner-title">Striking Lines</h5>
                  <button className="banner-btn">Discover now</button>
                </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeBanner;