import React from "react";
import market from '../assets/market.png'

export default function Section3() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          <div className="section1 text-center">
            <img
              src={market}
              className="img-fluid market"
              alt="Section 3 Logo"
            />
            <p className="section1-head mtext">Our path to market leadership</p>
            <p className="section1-text">Marketing within everyone’s reach</p>
          </div>
        </div>
      </div>
    </div>
  );
}
