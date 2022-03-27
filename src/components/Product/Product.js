import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, picture, price } = props.grocery;
  // console.log(picture);

  return (
    <div className="product">
      <img src={picture} alt="" />
      <div className="grocery-info">
        <h3>Name: {name}</h3>
        <h4>Price: {price}</h4>
      </div>
      <button
        className="btn-cart"
        onClick={() => props.clickHandler(props.grocery)}
      >
        <h3 className="button">
          <p>Add To Cart</p>
          <FontAwesomeIcon icon={faCartPlus} />
        </h3>
      </button>
    </div>
  );
};

export default Product;
