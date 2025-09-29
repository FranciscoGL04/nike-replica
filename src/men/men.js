import { Link } from "react-router-dom";
import "./style/style.css";

function Men() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Logo"
              id="logo"
            />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/new">
                  New
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/men">
                  Men
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/women">
                  Women
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/kids">
                  Kids
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/sport">
                  Sport
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/sale">
                  Sale
                </Link>
              </li>
            </ul>

            <div class="d-flex align-items-center ms-auto">
              <div class="search-box me-3">
                <input type="text" placeholder="Search" />
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
    <div id="cards-container">
      <div class="card">
        <img
          src="https://www.incorio.com/img/p/4/6/3/2/4632-large_default.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
          Blue / beige suede - Recycled canvas just testing
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://www.incorio.com/img/p/5/9/3/9/5939-large_default.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">

          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://www.incorio.com/img/p/5/9/8/8/5988-large_default.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://www.incorio.com/img/p/5/9/1/8/5918-large_default.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://www.incorio.com/img/p/4/6/3/9/4639-large_default.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://www.incorio.com/img/p/4/5/7/0/4570-large_default.webp"
          class="card-img"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Men;
