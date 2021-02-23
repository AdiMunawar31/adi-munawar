import React, { useEffect } from "react";
import { Clock, Head, Navbar } from "../../component";
import $ from "jquery";
import { indonesia } from "../../assets";

const Covid = () => {
  useEffect(() => {
    // let catResult = "";
    // let cat;
    // let categories = [];
    // console.log(cat);
    // $("#select").on("change", function () {
    //   cat = $(this).val();
    // });

    $.ajax({
      url: "https://coronavirus-19-api.herokuapp.com/countries",
      // ype: "json",
      success: function (items) {
        $.each(items, function (key, item) {
          let data = items[key];
          let name = data.country;
          // console.log(name);

          // if ($.inArray(name, categories) == -1) {
          //   console.log(name);
          //   categories.push(name);
          //   catResult += `<option value="${name}">${name}</option>`;
          // }

          if (name == "Indonesia") {
            const cases = `Cases : ${data.cases}`;
            const active = `Active : ${data.active}`;
            const deaths = `Deaths : ${data.deaths}`;
            const recovered = `Recovered : ${data.recovered}`;

            $("#country").text(data.country);
            $("#cas").html(cases);
            $("#death").html(deaths);
            $("#active").html(active);
            $("#recovere").html(recovered);
          }

          // $("#select").html(
          //   "<option value='all' selected><-- All Countries Data --></option>" +
          //     catResult
          // );
        });
      },
    });
  });
  return (
    <div>
      <Navbar />
      <Clock />

      <Head />
      <div className="container pb-5 ml-5">
        <div className="row">
          <div className="col-lg-6 p-5">
            {/* <select className="form-control mb-5 bg-dark" id="select">
              <option>-- Select Your Countries --</option>
            </select> */}
            <div className="card text-white bg-info mb-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 text-left">
                    <div className="card-body d-block">
                      <h3 id="country">-</h3>
                      <h3 className="card-text" id="cas">
                        <div className="spinner-grow text-light" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </h3>
                      <h4 className="card-title" id="active">
                        <div className="spinner-grow text-light" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </h4>
                      <h4 className="card-title" id="death">
                        <div className="spinner-grow text-light" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </h4>
                      <h4 className="card-title" id="recovere">
                        <div className="spinner-grow text-light" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src={indonesia}
                      height="140"
                      className="mt-4 mr-5"
                      style={{ marginLeft: -10 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
