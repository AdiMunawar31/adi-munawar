import React from "react";
import { mac, p } from "../../assets";
import "./profile.css";

const Profile = () => {
  return (
    <div className="container portfolio">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <img src={mac} height="31%" alt="icon mac os" />
          </div>
        </div>
      </div>
      <div className="bio-info">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="bio-image">
                  <img
                    src={p}
                    height="250"
                    width="250"
                    className="shadow img-thumbnail"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="bio-content">
              <h1>Hi there, I'm Adi Munawar</h1>
              <h6 className="mt-3">
                Born in Kuningan, 31 July 2001, Now live at Mekarjaya village,
                Pancalang sub-district, Kuningan district
              </h6>
              <p className="mt-4 a">
                <i className="fab fa-whatsapp"></i> 081-563-754-507
              </p>
              <p className="mt-1 a">
                <i className="far fa-envelope"></i> munawar.adi31@gmail.com
              </p>
              <p className="mt-1 a">
                <i className="fab fa-instagram"></i> @mhunawar31
              </p>
            </div>
          </div>
          <div className="col-lg-12 mt-5 text-center text-primary">
            <h3>MY BASIC SKILL AND KNOWLEDGE</h3>
            <h1>
              <i className="fas fa-hand-point-down"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
