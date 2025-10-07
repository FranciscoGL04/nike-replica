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
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Size</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Gender</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Children</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Show by price</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Sale and offers</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Color</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>brand</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Fit</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>Fleece</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>technology</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select className="sidebar-menu" defaultValue="">
            <option value="" disabled hidden><h6>insulation</h6></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        </div>
    )
}

export default Sidebar;