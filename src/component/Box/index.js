import React from "react";
import { mac, icon } from "../../assets";
import "./box.css";

const Box = (props) => {
  return (
    <div className="container portfolios">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <img src={mac} height="31%" alt="icon mac os" />
          </div>
        </div>
      </div>
      <div className="bio-info">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="titles">{props.title}</h3>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Box;
