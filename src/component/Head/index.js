import React, { useEffect } from "react";
import { cry, happy, sad } from "../../assets";
import $ from "jquery";

const Head = ({ color, title, amount, img }) => {
  useEffect(() => {
    const url = "https://coronavirus-19-api.herokuapp.com/all";
    async function getCovidAll() {
      const response = await fetch(url);
      const data = await response.json();
      let { cases, deaths, recovered } = data;

      $("#cases").text(cases);
      $("#deaths").text(deaths);
      $("#recovered").text(recovered);
    }
    getCovidAll();
    setInterval(getCovidAll, 60000);
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 pt-5">
          <div className="alert bg-primary text-center" role="alert">
            <h3 className="alert-heading mb-3">COVID-19 INFO!</h3>
            <p>
              Monitor the spread of the COVID-19 virus in the world in REAL TIME
              DATA
            </p>
            <hr />
            <p className="mb-0">LET'S KEEP OURSELVES HEALTH.</p>
          </div>
        </div>
        <div className="col-lg-4 p-5">
          <div className="card text-white bg-danger mb-3">
            <div className="row">
              <div className="col-md-8 text-left">
                <div className="card-body d-block">
                  <h5 className="card-title" id="title">
                    Cases
                  </h5>
                  <h3 className="card-text" id="cases">
                    <div className="spinner-grow text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </h3>
                  <p className="card-text" id="text">
                    People
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <img
                  src={sad}
                  height="70"
                  className="mt-4"
                  style={{ marginLeft: -10 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 p-5">
          <div className="card text-white bg-info mb-3">
            <div className="row">
              <div className="col-md-8 text-left">
                <div className="card-body d-block">
                  <h5 className="card-title" id="title">
                    Deaths
                  </h5>
                  <h3 className="card-text" id="deaths">
                    <div className="spinner-grow text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </h3>
                  <p className="card-text" id="text">
                    People
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <img
                  src={cry}
                  height="70"
                  className="mt-4"
                  style={{ marginLeft: -10 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 p-5">
          <div className="card text-white bg-success mb-3">
            <div className="row">
              <div className="col-md-8 text-left">
                <div className="card-body d-block">
                  <h5 className="card-title" id="title">
                    Recovered
                  </h5>
                  <h3 className="card-text" id="recovered">
                    <div className="spinner-grow text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </h3>
                  <p className="card-text" id="text">
                    People
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 text-center">
                <img
                  src={happy}
                  height="70"
                  className="mt-4"
                  style={{ marginLeft: -10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
