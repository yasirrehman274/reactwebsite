import React from "react";
import web from "../src/Images/HomeImg.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-content-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row">
                <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Blog Website</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented develorper making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-6 pt-5 pt-lg-0 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Home Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
