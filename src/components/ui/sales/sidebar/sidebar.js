import { Link } from "react-router-dom";
import "./css/style.css";

function Sidebar() {
    return (
        <div id="sidebar-container">
            <ul>
            <li><h6>Shoes</h6></li>
            <li><h6>Clothing</h6></li>
            <li><h6>Accesories & Equipment</h6></li>
            </ul>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Product Discounts</h6></option>
            <option value="1">Up to 20% discount</option>
            <option value="2">20-30% discount</option>
            <option value="3">30-40% discount</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Gender</h6></option>
            <option value="1">Men</option>
            <option value="2">Women</option>
            <option value="3">Unisex</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Children</h6></option>
            <option value="1">boys</option>
            <option value="2">girls</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Show by price</h6></option>
            <option value="1">CHF 0 - CHF 65</option>
            <option value="2">CHF 65 - CHF 130</option>
            <option value="3">CHF 130 - CHF 190</option>
            <option value="3">CHF 190+</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Sale and offers</h6></option>
            <option value="1">Sale</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Color</h6></option>
            <option value="1">Purple</option>
            <option value="2">Black</option>
            <option value="3">Red</option>
            <option value="3">Orange</option>
            <option value="3">Blue</option>
            <option value="3">White</option>
            <option value="3">Brown</option>
            <option value="3">Green</option>
            <option value="3">Yellow</option>
            <option value="3">Multi-Color</option>
            <option value="3">Gray</option>
            <option value="3">Pink</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>brand</h6></option>
            <option value="1">Nike Sportswear</option>
            <option value="2">Jordan</option>
            <option value="3">NikeLab</option>
            <option value="3">ACG</option>
            <option value="3">Nike Pro</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Fit</h6></option>
            <option value="1">Far</option>
            <option value="2">Extra large</option>
            <option value="3">Narrow</option>
            <option value="3">Standard</option>
            <option value="3">With structure</option>
            <option value="3">Closely</option>
            <option value="3">Without structure</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Fleece</h6></option>
            <option value="1">Tech Fleece</option>
            <option value="2">Club Fleece</option>
            <option value="3">Phoenix Fleece</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>technology</h6></option>
            <option value="1">Nike ReactX</option>
            <option value="2">All Conditions Control</option>
            <option value="3">Nike Anti-Clog</option>
            <option value="3">Dri-FIT</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>insulation</h6></option>
            <option value="1">Down filling</option>
            <option value="2">Synthetic filling</option>
        </select>
        </div>
    )
}

export default Sidebar;