import React from "react";
import { icon } from "../../assets";
import "./card.css";

const Card = ({ style, img, name }) => {
  return (
    <div className="col-lg-3 d-flex justify-content-center">
      <div
        className="boxs"
        style={{
          border: "2px solid " + style,
          boxShadow: "0 0 5px #03e9f4, 0 0 25px " + style,
        }}
      >
        <div className="glass"></div>
        <div className="contents">
          <img src={img} height="170" width="170" />
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
