import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import banner from "../assets/banner.png";
import postItem from "../services/ApiAccess";

export default function Popup() {

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-end">
          <div className="close-btn">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
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

        <div className="col-12 px-4  text-center">
          <div className="btn sub-btn mt-2" onClick={(e)=>{subscribeToProgram(e)}}>Subscribe</div>

          <p className="disclaimer text-center mt-3 mb-4">
            Join for exclusive Beta access. We promise relevent updates, zero
            spam. Your insight shapes our evolution{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
