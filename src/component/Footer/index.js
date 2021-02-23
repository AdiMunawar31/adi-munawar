import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { icon } from "../../assets";
import "./footer.css";
import $ from "jquery";

const Footer = () => {
  useEffect(() => {
    var $backToTop = $(".back-to-top");
    $backToTop.hide();
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
      } else {
        $backToTop.fadeOut();
      }
    });

    $backToTop.on("click", function (e) {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  }, []);
  return (
    <div>
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4" style={{ marginLeft: -10 }}>
              <div className="dk-footer-box-info">
                <a href="index.html" className="footer-logo">
                  <img src={icon} height="150" alt="footer_logo" />
                </a>
                <div className="footer-info-text">
                  <i>
                    "No one can change a person, but a person can be the reason
                    someone changes"
                  </i>
                </div>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Social link */}
              </div>
              {/* End Footer info */}
              <div className="footer-awarad">
                <img src="images/icon/best.png" alt="" />
                <p>AdiMunawar31</p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-7">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true" />
                    </div>
                    {/* End contact Icon */}
                    <div className="contact-info sm-pt-5">
                      <h3>Adi Munawar</h3>
                      <p>
                        <a href="instagram.com/munhawar31">@mhunawar31</a>
                      </p>
                    </div>
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
                <div className="col-md-5">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      />
                    </div>
                    {/* End contact Icon */}
                    <div className="contact-info sm-ml-5">
                      <h4>
                        <strong>+62815 - 6375 - 4507</strong>
                      </h4>
                      <p>Give us a call</p>
                    </div>
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
              </div>
              {/* End Contact Row */}
              <div className="row">
                <div className="col-md-12 col-lg-6 text ml-5">
                  <div className="footer-widget footer-left-widget m-5">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About Me</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Accomplishments</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Covid Info</NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* End Footer Widget */}
                </div>
                {/* End col */}
                <div className="col-md-12 col-lg-6 p-sm-5">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3 className="subs">Subscribe Youtube</h3>
                      <span className="animate-borders border-black" />
                    </div>
                    <p>Please Subscribe My Youtube Channel D2Y GAMING</p>
                    <form action="#">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <button type="submit">
                            <i className="fas fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* End form */}
                  </div>
                  {/* End footer widget */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Widget Row */}
        </div>
        {/* End Contact Container */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <span>Copyright © 2021, All Right Reserved | Adi Munawar</span>
              </div>
              {/* End Col */}
              <div className="col-md-6 col-sm-12">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Copyright Container */}
        </div>
        {/* End Copyright */}
        {/* Back to top */}
        <div id="back-to-top" className="back-to-top">
          <button
            className="btn btn-dark"
            title="Back to Top"
            style={{ display: "block" }}
          >
            <i className="fa fa-angle-up" />
          </button>
        </div>
        {/* End Back to top */}
      </footer>
    </div>
  );
};

export default Footer;
