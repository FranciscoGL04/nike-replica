import "./css/style.css";
import { Link } from "react-router-dom";

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
                <img className="card-image" src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/57f0dbe3-00ce-4881-88e5-d72d1c3c7bdc/nike-just-do-it.png" alt="Sale" />
                <div className="card-overlay">
                  <p className="card-text">Check Our Articles On Sale!</p>
                  <h5 className="card-title">Up to 30% Off!</h5>
                  <button className="card-btn">Discover now</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Men Card */}
          <div className="card-wrapper">
            <div className="product-card">
              <Link to="/men" className="card-link">
                <img className="card-image" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_710,c_limit/c13fdbdd-d099-4a1c-99a9-c9b879034d0e/schuhe-bekleidung-accessoires-f%C3%BCr-herren.png" alt="Men's Collection" />
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
                <img className="card-image" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_517,c_limit/6438ad70-9c00-4c7b-812d-88f4b5e6c232/damen-schuhe-bekleidung-mehr.png" alt="Women's Collection" />
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
                <img className="card-image" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1017,c_limit/c37cb09d-e19f-43ca-ba97-1a3721a9515c/nike-produkte-f%C3%BCr-kinder.png" alt="Kids Collection" />
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