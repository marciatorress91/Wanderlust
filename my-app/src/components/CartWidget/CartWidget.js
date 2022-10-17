import './CartWidget.css'
import {useContext} from "react"
import {CartContext} from "../contexts/CartContext"

const CartWidget = () => {
    const {totalItems}=useContext(CartContext)
    
    return(
        <div className="cartWidget">
            <div>
                <i className="bi bi-cart-check"></i>
            </div>
        { totalItems == 0 ?
            <div></div> :
            <div className="numero">
              {totalItems() || ""}
            </div>}
        </div>
    )
}

export default CartWidget;