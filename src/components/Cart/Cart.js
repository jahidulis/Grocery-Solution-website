import { useEffect, useState } from "react";
import Cartitem from "../CartItem/Cartitem";
import Select from "../Select/Select";
import "./Cart.css";

const Cart = (props) => {
  const [one, setOne] = useState([]);
  let cartItems = props.cart;
  console.log(cartItems);

  const selectOne = () => {
    if (cartItems.length > 0) {
      let rand = Math.floor(Math.random() * cartItems.length);
      console.log(rand);
      console.log(cartItems);
      setOne([cartItems[rand]]);
      console.log(one);
    } else {
      alert("Please Select one");
    }
  };
  //   useEffect(() => {
  //     setOne(cartItems[rand]);
  //   }, []);

  return (
    <div>
      <h2>Selected Items : {cartItems.length}</h2>
      {cartItems.map((grocery) => (
        <Cartitem grocery={grocery} key={grocery.id}></Cartitem>
      ))}
      <button className="Select" onClick={() => selectOne()}>
        <p>Select One</p>
      </button>
      {console.log(cartItems.length)}
      <button className="Select" onClick={() => props.clearList()}>
        <p>Select Again</p>
      </button>
      {one.length > 0 && <Select one={one}></Select>}
    </div>
  );
};

export default Cart;
