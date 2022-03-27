import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const [grocerys, setgrocerys] = useState([]);
  useEffect(() => {
    fetch("grocery.json")
      .then((res) => res.json())
      .then((data) => setgrocerys(data));
  }, []);
  const clickHandler = (groceryDetail) => {
    if (cart.length > 3) {
      alert("Can't Select More Than 4");
    } else {
      let flag = 0;
      for (const grocery of cart) {
        if (grocery.id === groceryDetail.id) {
          flag = 1;
        }
      }
      if (flag === 0) {
        let newCart = [...cart, groceryDetail];
        setCart(newCart);
      } else {
        let newCart = [...cart];
        setCart(newCart);
        alert("Already Selected");
      }
    }
    // console.log(cart);
    // console.log(groceryDetail.id);
  };
  const clearList = () => {
    setCart([]);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {grocerys.map((grocery) => (
          <Product
            key={grocery.id}
            grocery={grocery}
            clickHandler={clickHandler}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearList={clearList}></Cart>
      </div>
    </div>
  );
};

export default Shop;
