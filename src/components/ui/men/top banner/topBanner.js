import "./css/style.css"
import menBannerVideo from "./video/8533110-uhd_3840_2160_25fps.mp4"

function VideoBanner() {
    return(<div>
      {/* Hero Video Section */}
      <div className="video-section">
        <div className="video-container">
          <video
            src={menBannerVideo} 
            className="banner-video"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="banner-text">
          <h1 className="banner-title">BOOST YOUR RUN</h1>
        </div>
      </div>
    </div>
    );
}

export default VideoBanner