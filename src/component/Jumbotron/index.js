import React from "react";
import { NavLink } from "react-router-dom";
import "./jumbo.css";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron text-white pt-5 text-center">
        <div className="container">
          <h1 className="display-4 mt-5">I Am Adi Munawar!</h1>
          <p className="lead mt-5">
            Hello there, my full name is Adi Munawar, and people who's know me
            call me Adi (19). For now, I live in Kuningan, Jawa Barat. Wanna
            know about me? click this button below
          </p>
          <hr className="my-4" />
          <p>
            <i>"Experience Is The Best Teacher"</i>
          </p>
          <NavLink className="tombol" to="/about" role="button">
            About Me
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
