import "../body/css/style.css";
import fiftyOff from "./images/fiftyOff.png";
import men from "./images/men.png";
import women from "./images/women.png";
import kids from "./images/kids.png";

import Sale from "../sale/sale";
import Men from "../men/men";

function Body() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <iframe
              width="1500"
              height="720"
              src="https://www.youtube.com/embed/UM6OeVkZAd4?si=&autoplay=1&mute=1&controls=0&loop=1&playlist=UM6OeVkZAd4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="carousel-text">
        <h4 id="h4-text">
          The you that you know you can is 42.2 kilometers away.
        </h4>
        <h1 id="h1-text">JUST DO IT.</h1>
      </div>

      <div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">
            <div class="card w-75 mb-3">
              <div class="card-body">
                <a href="/sale">
                  <img class="cardsImages" src={fiftyOff} />
                </a>
                <p class="card-text">Check Our Articles On Sale!</p>
                <h5 class="card-title">Up to 50% Off!</h5>
                <a href="/sale" class="btn btn-primary">
                  Shop
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card w-75 mb-3">
              <div class="card-body">
                <a href="/men">
                  <img class="cardsImages" src={men} />
                </a>
                <p class="card-text">Our Picks For Men</p>
                <h5 class="card-title">Men's Collection</h5>
                <a href="/men" class="btn btn-primary">
                  Shop
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card w-75 mb-3">
              <div class="card-body">
                <a href="/women">
                <img class="cardsImages" src={women} />
                </a>
                <p class="card-text">Women's Top Picks Here</p>
                <h5 class="card-title">Women's Collection</h5>
                <a href="#" class="btn btn-primary">
                  Shop
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card w-75 mb-3">
              <div class="card-body">
                <a href="/kids">
                <img class="cardsImages" src={kids} />
                </a>
                <p class="card-text">The Best For Our Kids</p>
                <h5 class="card-title">Kids Collection</h5>
                <a href="#" class="btn btn-primary">
                  Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
