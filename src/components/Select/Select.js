import React from "react";
import "./select.css";

const Select = (props) => {
  console.log(props.one);
  const one = props.one[0];
  return (
    <div>
      <div className="select-item">
        <img src={one.picture} alt="" />
        <p>{one.name}</p>
      </div>
      <p>
        <small> Selected this one for you</small>
      </p>
    </div>
  );
};

export default Select;
