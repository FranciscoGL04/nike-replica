import { Link } from "react-router-dom";
import "./style/style.css";
import Header from "../../components/layout/navbar/navBar";
import Footer from "../../components/layout/footer/footer";

function Men() {
  return (
    <>
      
    <Header/>

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
      <Footer/>
    </>
  );
}

export default Men;
