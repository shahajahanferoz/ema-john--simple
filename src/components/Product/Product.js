import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,seller,stock,price}=props.product;
    // console.log(props)
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
            <h4 className='product-name'>{name}</h4>
            <p><small>by: {seller}</small></p>
            <h4>${price}</h4>
            <p><small>only {stock} left in stock-Order Quickly</small></p>
            <button className='cart-button' onClick={ ()=> props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faCartArrowDown} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;