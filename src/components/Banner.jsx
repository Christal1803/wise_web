import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import banner from "../assets/banner.png";
import postItem from "../services/ApiAccess";
import privacyPolicyDoc from "../assets/Privacy_Policy.pdf";

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
    <div
      className="container-fluid main-banner my-5"
      style={{ paddingTop: "5rem" }}
    >
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 mt-auto mb-auto or2">
          <h1 className="banner1 py-2">Marketing Simplified</h1>
          <p className="banner2 py-2">
            Ideate, Execute, Promote, Analyze - All made possible by
            <br /> <span className="semi-bold">One Powerful AI</span>
          </p>

          <div className="beta">
            <button
              className="bannerbtn btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Join Beta
              <img
                src={arrow}
                alt="Arrow"
                className="img-fluid btn-arrow ms-1"
              />
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 text-center or1">
          <img src={banner} className="img-fluid banner-img" alt="Banner" />
        </div>
      </div>
      {/* popup */}

      <div
        className="modal fade modal-md"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-btn">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12 popup-banner">
                    <div className="row">
                      <div className="col-7 px-4 my-auto">
                        <h5 className="banner1-popup py-2 m-0 p-0">
                          Join the<span className="spl">Wise</span> Beta
                        </h5>
                        <p className="banner2-popup py-2 m-0">
                          Discover smarter marketing. Experience effortless
                          campaigns.
                          <br />
                          <span className="semi-bold">
                            Be the first to try theWiseAI
                          </span>
                        </p>

                        <div className="d-flex">
                          <input
                            type="email"
                            className="form-control modal-email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            placeholder="Enter your email "
                            onChange={(e) => {
                              formOnChange(e);
                            }}
                          />
                          <button
                            className="bannerbtn-popup btn mt-2"
                            data-bs-toggle="modal"
                            onClick={(e) => {
                              subscribeToProgram(e);
                            }}
                            data-bs-target="#staticBackdrop"
                          >
                            Submit
                          </button>
                        </div>

                        <p className="banner2-popup py-2 m-0">
                          We promise relevant updates, zero spam. Your insight
                          shapes our evolution.
                          <br />
                          By signing up, you agree to our{" "}
                          <a
                            href={privacyPolicyDoc}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy Policy.
                          </a>
                        </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
