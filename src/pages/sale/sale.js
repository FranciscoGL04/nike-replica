import { Link } from "react-router-dom";
import Header from "../../components/layout/navbar/navBar";
import Sidebar from "../../components/ui/sales/sidebar/sidebar";
import Footer from "../../components/layout/footer/footer";
import SaleCards from "../../components/ui/sales/saleCards/saleCards";
import "./css/style.css"
function Sale() {
    return(
        <>
            <Header/>
            <div className="content-body">
                <Sidebar/>
                <SaleCards/>
            </div>
            <Footer/>
        </>
    )
}

export default Sale;