import React from "react";
import spm from "../assets/spm.png";
import spmbanner from "../assets/spmbanner.png";

export default function Section1() {
  return (
    <div className="container-fluid mt-5 mt-sm-3">
      <div className="row">
        <div className="section1 text-center">
          <img
            src={spm}
            className="img-fluid"
            alt="Section 1"
          />
          <p className="section1-head">Simple - Powerful - Magical</p>
          <p className="section1-text">Marketing within everyone’s reach</p>
        </div>

        <div className="section1-img text-center mt-2">
          <img
            src={spmbanner}
            className="img-fluid"
            alt="Section 1"
          />
        </div>
      </div>
    </div>
  );
}
