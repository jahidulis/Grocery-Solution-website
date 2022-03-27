import React from "react";
import "./Cartitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";

const Cartitem = (props) => {
  console.log(props);
  const { name, picture } = props.grocery;
  console.log(props);
  return (
    <div className="cart-item">
      <img src={picture} alt="" />
      <p>{name}</p>
      <FontAwesomeIcon icon={faCancel}></FontAwesomeIcon>
    </div>
  );
};

export default Cartitem;
