import "./css/style.css";
import { Link } from "react-router-dom";
import fiftyOff from "./images/fiftyOff.png";
import men from "./images/men.png";
import women from "./images/women.png";
import kids from "./images/kids.png";

function HomeCards() {
  return (
    <div>
      {/* Cards Section */}
      <div className="container">
        <div className="cards-grid">
          {/* Sale Card */}
          <div className="card-wrapper">
            <div className="product-card">
              <Link to="/sale" className="card-link">
                <img className="card-image" src={fiftyOff} alt="Sale" />
                <div className="card-overlay">
                  <p className="card-text">Check Our Articles On Sale!</p>
                  <h5 className="card-title">Up to 50% Off!</h5>
                  <button className="card-btn">Discover now</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Men Card */}
          <div className="card-wrapper">
            <div className="product-card">
              <Link to="/men" className="card-link">
                <img className="card-image" src={men} alt="Men's Collection" />
                <div className="card-overlay">
                  <p className="card-text">Our Picks For Men</p>
                  <h5 className="card-title">Men's Collection</h5>
                  <button className="card-btn">Discover now</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Women Card */}
          <div className="card-wrapper">
            <div className="product-card">
              <Link to="/women" className="card-link">
                <img className="card-image" src={women} alt="Women's Collection" />
                <div className="card-overlay">
                  <p className="card-text">Women's Top Picks Here</p>
                  <h5 className="card-title">Women's Collection</h5>
                  <button className="card-btn">Discover now</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Kids Card */}
          <div className="card-wrapper">
            <div className="product-card">
              <Link to="/kids" className="card-link">
                <img className="card-image" src={kids} alt="Kids Collection" />
                <div className="card-overlay">
                  <p className="card-text">The Best For Our Kids</p>
                  <h5 className="card-title">Kids Collection</h5>
                  <button className="card-btn">Discover now</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;