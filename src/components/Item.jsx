import React from "react"
import Textbtn from "./Textbtn";
import apple from "../assets/img/apple.png"
import veg from "../assets/img/veg.png"

const Item = (props) => {
  return (
    <div className="cart-item">
      <div className="img-box">
        <img src={apple} alt="apple juice" />
      </div>
      <div className="about">
        <h2>Apple Juice</h2>
        <h4>250ml</h4>
        <img src={veg} alt="" className="icon"/>
      </div>
      <div className="counter">
        <div className="btn-increase">
            +
        </div>
        <div className="counter-value">
            2
        </div>
        <div className="btn-decrease">
            -
        </div>
      </div>
      <div className="price">
            <h2>$2.99</h2>
            <Textbtn name={'Save for later'} type={'save'} />
            <Textbtn name={'Remove'} type={'remove'} />
        </div>
    </div>
  )
};

export default Item;
