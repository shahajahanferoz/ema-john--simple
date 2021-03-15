import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total,orderProduct) => total = total+orderProduct.price,0)
    // let total = 0;
    // for(let i=0; i<cart.length; i++){  
    //     total=total+ cart[i].price;
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 20.12
    }
    else if(total > 12){
        shipping = 10.12
    }
    else if (total >0){
        shipping = 4.12
    }

    const tax = (total/10).toFixed(2);
    const grandTotal= total + shipping + Number(tax); 

    const formatNumber = (num) =>{
        return Number(num).toFixed(2)
    }

    console.log(props)
    return (
        <div className='cart'>
            <h1>Order summary </h1>
            <p>item order {cart.length}</p>
            <p>price { total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p><strong>Total cost: {formatNumber(grandTotal) }</strong></p>

        </div>
    );
};

export default Cart;