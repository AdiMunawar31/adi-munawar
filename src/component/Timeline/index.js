import React from "react";
import "./timeline.css";

const Timeline = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 text-center text-light">
            <h3>MY EDUCATION</h3>
          </div>
          <div className="col-md-12">
            <div className="main-timeline5">
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">NOW</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">UNIVERSITY</h3>
                  <p className="description">STMIK IKMI CIREBON - CIREBON</p>
                  <br />
                  <p className="description">(2019 - PRESENT)</p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2019</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">SENIOR HIGH SCHOOL</h3>
                  <p className="description">
                    MA PEMBANGUNAN MANDIRANCAN - KUNINGAN
                  </p>
                  <p className="description">(2016 - 2019)</p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2016</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">JUNIOR HIGH SCHO0L</h3>
                  <p className="description">
                    MTS PEMBANGUNAN MANDIRANCAN - KUNINGAN
                  </p>
                  <p className="description">(2007 - 2013)</p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">2013</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">PRIMARY SCHOOL</h3>
                  <p className="description">SDN RAJAWETAN - KUNINGAN</p>
                  <br />
                  <p className="description">(2013 - 2016)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container mt-5 text-white">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3>MY EXPERIENCE</h3>
          </div>
          <div className="col-md-12">
            <div className="main-timeline2">
              <div className="timeline">
                <span className="icon fa fa-mobile" />

                <a href="#" className="timeline-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <span className="icon fa fa-rocket" />
                <a href="#" className="timeline-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <span className="icon fa fa-briefcase" />
                <a href="#" className="timeline-content">
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <span className="icon fa fa-globe" />
                <a href="#" className="timeline-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    I Started Learning HTML, CSS AND BASIC JAVASCRIPT, AT
                    2019-2020
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
