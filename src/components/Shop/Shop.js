import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';

const Shop = () => {
  const first10products = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10products);
  const [cart, setCart] = useState([])

  const handleAddProduct = (product) =>  {
    //console.log('clicked it ',product)
    const newCart = [...cart , product]
    setCart(newCart)
}

  return (
    <div className="shop-container">
      <div className="product-container">       
          {products.map((product) => (
            <Product product={product} key={product.key} handleAddProduct={handleAddProduct}></Product>
          ))}
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
