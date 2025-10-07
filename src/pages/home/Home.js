import NavBar from "../../components/layout/navbar/navBar";
import HomeVideo from "../../components/ui/home/Video/homeVideo";
import HomeCards from "../../components/ui/home/Cards/homeCards";
import HomeBanner from "../../components/ui/home/Banner/homeBanner";
import Footer from "../../components/layout/footer/footer";
import HomeCarousel from "../../components/ui/home/Carousel/homeCarousel"
function Home() {
    return(
        <div>
            <NavBar/>
            <HomeVideo/>
            <HomeCards/>
            <HomeBanner/>
            <HomeCarousel/>
            <Footer/>
        </div>
    )
}

export default Home;