import React, { useEffect } from "react";
import { a, as, b, c } from "../../assets";
import "./banner.css";
import $ from "jquery";
import anime from "animejs/lib/anime.es.js";
import { useHistory } from "react-router-dom";

const Banner = () => {
  // useEffect(() => {
  //   for (let i = 0; i <= 100; i++) {
  //     const blocks = document.createElement("div");
  //     blocks.classList.add("block");
  //     $(".containers").prepend(blocks);
  //   }

  //   function animationRef() {
  //     anime({
  //       targets: ".block",
  //       translateX: function () {
  //         return anime.random(-700, 700);
  //       },
  //       translateY: function () {
  //         return anime.random(-500, 500);
  //       },
  //       scale: function () {
  //         return anime.random(1, 5);
  //       },
  //       easing: "linear",
  //       duration: 3000,
  //       delay: anime.stagger(0.1),
  //       complete: animationRef,
  //     });
  //   }
  //   animationRef();
  // }, []);

  return (
    <div className="body">
      <div className="containers">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center">
            <h2>
              Hi, I Am Adi Munawar 👋
              <span>
                Hello there, my full name is Adi Munawar, and people who's know
                me call me Adi (19). For now, I live in Kuningan, Jawa Barat.
                Wanna know about me? click this button below
              </span>
              <span>
                <p className="btn btn-outline-info">About Me</p>
              </span>
            </h2>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
