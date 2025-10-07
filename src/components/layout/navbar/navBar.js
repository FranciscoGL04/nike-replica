import "../navbar/css/style.css"
import { Link } from "react-router-dom";
import heart from "../../../assets/Icons/heart.png";
import shoppingbag from "../../../assets//Icons/shopping-bag.png"
import logo from "../../../assets/Images/jordanLogo.png";
import searchIcon from "../../../assets/Icons/search.png";

function NavBar() {
    return(
      <div>
        <div id="topBar">
        <div id="topBarLogo">
            <Link>
            <img src={logo} 
            alt="jordanLogo"
            id="jordanLogo"
            />
            </Link>
        </div>
        <div id="topBarList">
            <ul id="topList">
              <li className="listItem"><Link className="listLink">Search store</Link></li>|
              <li className="listItem"><Link className="listLink">Help</Link></li>|
              <li className="listItem"><Link className="listLink">Be there</Link></li>|
              <li className="listItem"><Link className="listLink">Register</Link></li>
            </ul>
        </div>
        </div>
        
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" id="logo"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/new">New & Featured</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sale">Sale</Link></li>
            </ul>
          </div>

          {/* Search and Icons */}
          <div className="d-flex align-items-center ms-auto">
            <div className="search-box me-3">
              <img className="fas fa-search" src={searchIcon}/>
              <input type="text" placeholder="Search"/>
            </div>
            <div className="nav-icons">
              <Link to="/favorites">
                <img src={heart} alt="Favorites" className="icons"/>
              </Link>
              <Link to="/cart">
                <img src={shoppingbag} alt="Shopping Bag" className="icons"/>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      </div>
    ) 
}

export default NavBar;