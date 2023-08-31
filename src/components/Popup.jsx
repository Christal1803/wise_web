import React, { useState } from "react";
import banner from "../assets/banner.png";
import postItem from "../services/ApiAccess";
import privacyPolicyDoc from "../assets/Privacy_Policy.pdf";
import { ToastContainer } from "react-toastify";

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
    <>
      <div className="container-fluid">
        <div className="px-lg-5 px-md-3 mx-4 sm-joinbeta home contain-center">
          <div
            className="container-fluid main-banner"
            style={{ paddingTop: "0rem" }}
          >
            <div className="row">
              <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 mt-auto mb-auto or2">
                <h1 className="banner1 py-2 sm-text-center">
                  Join the<span className="spl">Wise</span> Beta
                </h1>
                <p className="banner2 py-2">
                  Discover smarter marketing. Experience effortless campaigns.{" "}
                  <br />
                  <span className="semi-bold">
                    Be the first to try theWiseAI
                  </span>
                </p>

                <div className="beta d-flex d-sm-block d-lg-flex">
                  <input
                    type="email"
                    class="form-control w-sm-100 w-lg-50 w-50"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => {
                      formOnChange(e);
                    }}
                  />
                  <button
                    className="bannerbtn btn ms-2"
                    onClick={(e) => {
                      subscribeToProgram(e);
                    }}
                  >
                    Submit
                  </button>
                </div>
                <p className="disclaimer-join py-2">
                  We promise relevant updates, zero spam. Your insight shapes
                  our evolution. <br />
                  By signing up, you agree to our{" "}
                  <a href={privacyPolicyDoc} target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center or1">
                <img
                  src={banner}
                  className="img-fluid banner-img dd-sm-none "
                  alt="Banner"
                />
              </div>
            </div>
            {/* popup */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
