import React from "react";
import { a, b, c, d, e, f, g, h, icon } from "../../assets";
import "./sw.css";

const index = () => {
  return (
    <div className="jumbotron">
      <div className="accordian">
        <ul>
          <li>
            <div className="image_title">
              <a href="#">KungFu Panda</a>
            </div>
            <a href="#">
              <img src={a} />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="#">Toy Story 2</a>
            </div>
            <a href="#">
              <img src={b} />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="#">Wall-E</a>
            </div>
            <a href="#">
              <img src={c} />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="#">Wall-E</a>
            </div>
            <a href="#">
              <img src={d} />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="#">Up</a>
            </div>
            <a href="#">
              <img src={e} />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="#">Up</a>
            </div>
            <a href="#">
              <img src={f} />
            </a>
          </li>
          <li>
            <div className="image_title">
              <a href="#">Cars 2</a>
            </div>
            <a href="#">
              <img src={g} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
