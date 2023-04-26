import React from 'react';
import './Cart.css'

const Cart = ({carts}) => {

    let total =0;
    let totalShipping =0;
    for(const cart of carts ){
        total =parseFloat(total + cart.price)
        totalShipping =(totalShipping + cart.shipping)
    }



    
    const  totalTax = parseFloat(total *.20).toFixed(2)
    const grandTotal = ( total + totalShipping + parseFloat(totalTax) )
   

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Items Added : {carts.length}</p>
           <p>Total Price : ${total}</p>
             <p>Total Shipping : ${totalShipping}</p>
              <p>Tax : ${totalTax}</p>
            <h3>Grand Total : ${grandTotal}</h3> 
        </div>
    );
};
export default Cart;