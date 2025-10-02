import NavBar from "../../components/layout/navbar/navBar";
import HomeVideo from "../../components/ui/homeVideo/homeVideo";
import HomeCards from "../../components/ui/homeCards/homeCards";
import HomeBanner from "../../components/ui/homeBanner/homeBanner";
import Footer from "../../components/layout/footer/footer";
function Home() {
    return(
        <div>
            <NavBar/>
            <HomeVideo/>
            <HomeCards/>
            <HomeBanner/>
            <Footer/>
        </div>
    )
}

export default Home;