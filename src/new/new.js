import { Link } from "react-router-dom";

function New() {
    return(
        <div>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" id="logo"/>
      </Link>

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
            <i class="far fa-heart"></i>
            <i class="fas fa-shopping-bag"></i>
            <i class="far fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>

            New articles in
        </div>
    )
} 

export default New;