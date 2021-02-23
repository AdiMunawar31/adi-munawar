import React, { useEffect } from "react";
import "./post.css";
import $ from "jquery";

const Post = ({ img, lang, title, tool, desc, href }) => {
  //   useEffect(() => {
  //     $(document).load(function () {
  //       $(".post-module").hover(function () {
  //         $(this).find(".description").stop().animate(
  //           {
  //             height: "toggle",
  //             opacity: "toggle",
  //           },
  //           300
  //         );
  //       });
  //     });
  //   }, []);
  return (
    <div className="col-lg-5 pt-5 d-flex justify-content-start">
      <div className="con">
        <div className="column">
          {/* Post*/}
          <div className="post-module">
            {/* Thumbnail*/}
            <div className="thumbnail">
              <div className="date" id="date">
                <h3>
                  <i className="fab fa-github"></i>
                </h3>
              </div>
              <img src={img} height="300" widtth="400" />
            </div>
            {/* Post Content*/}
            <div className="post-content">
              <div className="category">{lang}</div>
              <h1 className="title">{title}</h1>
              <h2 className="sub_title">{tool}</h2>
              <p className="description">{desc}</p>
              <p className="text-secondary cp">©Copyright ~ Adi Munawar</p>
              <a href={href} target="_blank" className="btn tmb btn-block">
                Visit Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
