import React from "react"
import "./Checkout.css"
import CheckoutProduct from"./CheckoutProduct.js"
import Subtotal from './Subtotal'
function Checkout(){
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src="" alt="" className="checkout__ad" />
                <div className="">
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <CheckoutProduct/>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout