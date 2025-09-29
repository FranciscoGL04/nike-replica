import "../header/css/style.css"
import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import shoppingbag from "../assets/shopping-bag.png"

function Header() {
    return(
      <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" id="logo"/>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><Link class="nav-link" to="/new">New</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/men">Men</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/women">Women</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/kids">Kids</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/sport">Sport</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/sale">Sale</Link></li>
        </ul>

        <div class="d-flex align-items-center ms-auto">
          <div class="search-box me-3">
            <input type="text" placeholder="Search"/>
            <i class="fas fa-search"></i>
          </div>
          <div class="nav-icons">
            <i>
            <a><img src={heart} alt="heartIcon" class="icons"/></a>
            </i>
            <i class="fas fa-shopping-bag">
            <a><img src={shoppingbag} alt="heartIcon" class="icons"/></a>
            </i>
          </div>
        </div>
      </div>
    </div>
  </nav>
    ) 
}

export default Header;