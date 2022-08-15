import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format"
function Subtotal(){
    return(
        <div className="Subtotal">
            <CurrencyFormat
                renderText ={(value)=>(
                    <>
                    <p>
                        Subtotal (0 items):<strong>$0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="text" />This order contains a gift
                    </small>
                    </>
                )}
                desimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator ={true}
             

            />
        </div>
    )
}
export default Subtotal;