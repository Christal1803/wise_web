import React from "react";
import spm from "../assets/spm1.png";
import spmbanner1 from "../assets/spmbanner1.png";

export default function Section1() {
  return (
    <div className="container-fluid mt-5 pt-lg-5 mt-sm-3 spm">
      <div className="row">
        <div className="section1 text-center spm">
          <img
            src={spm}
            className="img-fluid mb-4 mt-5"
            alt="Section 1"
          />
          <p className="section1-head">Simple - Powerful - Magical</p>
          <p className="section1-text">Marketing within everyone’s reach</p>
        </div>

        <div className="section1-img text-center mt-2">
          <img
            src={spmbanner1}
            className="img-fluid"
            alt="Section 1"
          />
        </div>
      </div>
    </div>
  );
}
