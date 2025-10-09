import { Link } from "react-router-dom";
import Header from "../../components/layout/navbar/navBar";
import Sidebar from "../../components/ui/sales/sidebar/sidebar";
import Footer from "../../components/layout/footer/footer";
function Sale() {
    return(
        <div>
            <Header/>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default Sale;