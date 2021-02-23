import React from "react";
// import "./foot.css";

const Footer = () => {
  return (
    <div className="text-center text-light">
      <footer
        className=" text-center text-lg-start"
        style={{
          backgroundColor: "#101c4c",
        }}
      >
        <div className="container p-4 pb-0">
          <form action>
            <div className="row">
              <div className="col-sm-12 col-lg-4 mb-4 mb-md-0">
                <p className="pt-2">
                  <strong className="d-flex">
                    <h3 className="mt-2">Follow Me : </h3>
                    <a
                      exact
                      className="nav-link text-light"
                      target="_blank"
                      href="/about"
                    >
                      <h3>
                        <i class="fab fa-twitter"></i>
                      </h3>
                    </a>
                    <a
                      exact
                      className="nav-link text-light"
                      target="_blank"
                      href="/about"
                    >
                      <h3>
                        <i class="fab fa-facebook-square"></i>
                      </h3>
                    </a>
                    <a
                      exact
                      className="nav-link text-light"
                      target="_blank"
                      href="/about"
                    >
                      <h3>
                        <i class="fab fa-github"></i>
                      </h3>
                    </a>
                  </strong>
                </p>
              </div>

              <div className="col-sm-12 col-lg-5 mb-4 mb-md-0 mt-3 d-block">
                {/* Email input */}
                <div
                  className="form-outline mb-4 ml-5"
                  style={{
                    marginRight: -80,
                  }}
                >
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control bg-dark text-light"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-lg-2 mb-4 mb-md-0 mt-3 d-flex justify-content-end">
                {/* Submit button */}
                <button type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        >
          © 2021 Copyright Adi Munawar :
          <a
            className="text-primary text-decoration-none"
            href="https://github.com/AdiMunawar31"
            target="_blank"
          >
            - Visit My Github Account -
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
