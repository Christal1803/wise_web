import React, { useState } from "react";
import arrow from "../assets/arrow.png"
import banner from '../assets/banner.png'
import Popup from "./Popup";
import postItem from "../services/ApiAccess";


export default function Banner() {

  const [email, setEmail] = useState("");

  const subscribeToProgram = async (e) => {
    e.preventDefault();
    const requestBody = {
      email: email,
    };

    const response = await postItem("subscribe/email", requestBody);
    if (response) {
      setEmail("");
    }
  };

  const formOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container-fluid main-banner my-5" style={{ paddingTop: "5rem" }}>
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 mt-auto mb-auto or2">
          <h1 className="banner1 py-2">Marketing Simplified</h1>
          <p className="banner2 py-2">
            Ideate, Execute, Promote, Analyze - All made possible by
            <br /> <span className="semi-bold">One Powerful AI</span>
          </p>

          <div className="beta">
          <button className="bannerbtn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Join Beta
          <img src={arrow} className="img-fluid btn-arrow ms-1"/></button>
          </div>
  
        </div>
        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center or1">
          <img
            src={banner}
            className="img-fluid banner-img"
            alt="Banner"
          />
        </div>
      </div>
      {/* popup */}



<div class="modal fade modal-md" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">

    <div class="modal-content">
       <div className="close-btn">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div> 
     
      <div class="modal-body p-0">
      <div className="container">
      <div className="row">
        <div className="col-12 text-end">
          {/* <div className="close-btn">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div> */}
        </div>

        <div className="col-12 popup-banner">
          <div className="row">
            <div className="col-7 px-4 my-auto">
              <h5 className="banner1-popup py-2 m-0 p-0">
                Marketing Simplified
              </h5>
              <p className="banner2-popup py-2 m-0">
                Ideate, Execute, Promote, Analyze - All made possible by
                <br /> One Powerful AI
              </p>
              <button
                className="bannerbtn-popup btn mt-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Join Beta
                <img src={arrow} className="img-fluid btn-arrow-popup ms-2" alt="Popup arrow"/>
              </button>
            </div>
            <div className="col-5 my-3 text-center">
              <img
                src={banner}
                className="img-fluid banner-img-popup"
                alt="Banner"
              />
            </div>
          </div>
        </div>

        <div className="col-12 px-4 mt-4">
          <h5 className="popup-heading">Get Ahead with theWise.ai Beta</h5>

          <form>
            <div class="mb-3 mt-3">
              <label for="exampleInputEmail1" class="form-label">
                Email<sup>*</sup>
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {formOnChange(e)}}
              />
            </div>
          </form>
        </div>

        <div className="col-12 px-4  ">
          <div className="btn sub-btn mt-2" onClick={(e)=>{subscribeToProgram(e)}}>Subscribe</div>

          <p className="disclaimer text-center mt-3 mb-4">
            Join for exclusive Beta access. We promise relevent updates, zero
            spam. Your insight shapes our evolution{" "}
          </p>
        </div>
      </div>
    </div>
      </div>
     
    </div>
  </div>
</div>

      
    </div>






  );
}
