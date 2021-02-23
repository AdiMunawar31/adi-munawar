import React, { useEffect } from "react";
import "./pre.css";
import $ from "jquery";
import { icon } from "../../assets";

const Preloader = () => {
  return (
    <div>
      <div className="loading-wrapper">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={icon} height="80" className="p-3" />
      </div>
    </div>
  );
};

export default Preloader;
