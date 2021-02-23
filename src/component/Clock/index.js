import React, { useEffect } from "react";
import "./clock.css";
import $ from "jquery";

const Clock = () => {
  useEffect(() => {
    function clock() {
      let h = new Date().getHours();
      let m = new Date().getUTCMinutes();
      let s = new Date().getSeconds();
      $("#hour").html(h);
      $("#minutes").html(m);
      $("#second").html(s);
    }
    let interval = setInterval(clock, 1000);
  });
  return (
    <div className="jumbotron">
      <div id="clock" style={{ marginTop: -150 }}>
        <h2>THE TIME IS NOW</h2>
        <div id="time">
          <div>
            <div id="hour">00</div>
            <div>Hours</div>
          </div>
          <div>
            <div id="minutes">00</div>
            <div>Minutes</div>
          </div>
          <div>
            <div id="second">00</div>
            <div>Second</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
