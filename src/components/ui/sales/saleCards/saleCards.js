import { use, useState } from "react"
import productsOnSale from "./saleProducts.json"
import "../saleCards/css/style.css"

function SaleCards() {
    const [saleProducts, setSaleProducts] = useState(productsOnSale);

    return(
        <div className="sale-cards-container">
            {saleProducts.map((item)=>(
                <div key={item.id} className="saleCard">
                    <img
                    className="cardImg"
                    src={item.image}
                    alt={item.name}
                    />
                    <div className="card-info">
                    <h6 className="item-name">{item.name}</h6>
                    <span className="item-category">{item.category}'s shoes</span>
                    <div className="card-price-info">
                    <h6 className="item-price">{item.price}</h6>
                    <span className="item-previous-price">{item.previousprice}</span>
                    <span className="item-discount">{item.discount}</span>
                    </div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default SaleCards

