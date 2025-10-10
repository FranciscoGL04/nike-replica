import { Link } from "react-router-dom";
import "./style/style.css";
import Header from "../../components/layout/navbar/navBar";
import VideoBanner from "../../components/ui/men/top banner/topBanner";
import Footer from "../../components/layout/footer/footer";

function Men() {
  return (
    <>
    <Header/>
    <VideoBanner/>
    <Footer/>
    </>
  );
}

export default Men;
