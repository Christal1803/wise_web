import React from "react";
import arrow from "../assets/arrow.png"
import banner from '../assets/banner.png'

export default function Banner() {
  return (
    <div className="container-fluid my-5" style={{ paddingTop: "5rem" }}>
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-auto mb-auto or2">
          <h1 className="banner1 py-2">Marketing Simplified</h1>
          <p className="banner2 py-2">
            Ideate, Execute, Promote, Analyze - All made possible by
            <br /> One Powerful AI
          </p>
          <button className="bannerbtn btn">Join Beta
          <img src={arrow} className="img-fluid btn-arrow ms-1"/></button>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center or1">
          <img
            src={banner}
            className="img-fluid banner-img"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}
