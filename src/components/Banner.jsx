import React from "react";
import arrow from "../assets/arrow.png"
import banner from '../assets/banner.png'
import Popup from "./Popup";

export default function Banner() {
  return (
    <div className="container-fluid my-5" style={{ paddingTop: "5rem" }}>
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-auto mb-auto or2">
          <h1 className="banner1 py-2">Marketing Simplified</h1>
          <p className="banner2 py-2">
            Ideate, Execute, Promote, Analyze - All made possible by
            <br /> <span className="semi-bold">One Powerful AI</span>
          </p>
          <button className="bannerbtn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join Beta
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
      {/* popup */}



<div class="modal fade modal-md" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body p-0">
          <Popup/>
      </div>
     
    </div>
  </div>
</div>

      
    </div>






  );
}
