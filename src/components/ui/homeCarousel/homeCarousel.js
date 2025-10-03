import "./css/style.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";

function HomeCarousel() {

        const products = [
            { id: 0, name: "Air Force 1", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/7c80f963-1714-4b22-b640-57533c9eb321/nike-just-do-it.png"},
            { id: 1, name: "Air Max", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/451c0c77-2fab-4f84-8d6b-86c3552bb85e/nike-just-do-it.png"},
            { id: 2, name: "P-6000", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/ef3f4554-3346-4e2e-b996-32acb060697e/nike-just-do-it.png"},
            { id: 3, name: "Shox", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/413e32f4-0dec-4087-9326-a69ad0271571/nike-just-do-it.png"},
            { id: 4, name: "Air Jordan", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/061b2dd0-db9e-48fc-b339-f79432f985ed/nike-just-do-it.png"},
            { id: 5, name: "Pegasus", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/6ec7342a-03ea-4393-b07b-f612a0c466f5/nike-just-do-it.png"},
            { id: 6, name: "Vomero", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/e58ab30a-47ab-4d1c-9cc8-6bf2adfb1efc/nike-just-do-it.png"},
            { id: 7, name: "Metcon", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/4b606f0a-fee6-476a-a853-0c5173ab0a6f/nike-just-do-it.png"},
            { id: 8, name: "Mercurial", image:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_577,c_limit/f0edf594-4287-4578-ae21-332bd3fa231c/nike-just-do-it.png"},
        ]


    return (
        <div className="container">
         <Swiper
            modules={[Navigation, Scrollbar]}
            navigation
            scrollbar={
                {   draggable: true,
                    hide: true
                }}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
                0: {slidesPerView: 1},
                600: {slidesPerView: 2},
                992:{slidesPerView: 3},
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
        
        
        {products.map((product) => ( 
            <SwiperSlide key={product.id}>
                <div className="card" orientation="portrait">
                    <img 
                    class="card-img"
                    src={product.image}
                    alt={product.name}/>
                    <button class="card-btn">{product.name}</button>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    );
};


export default HomeCarousel;