import React from "react";
import banner from '../assets/contactbanner.png'

export default function Contacts() {

  const openCalendly = () => {
    window.open('https://calendly.com/thewise_ai/30min');
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img
            src={banner}
            className="conatctimg img-fluid"
            alt="Contact"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
          <h3>Get in touch</h3>

          <div className="col-md-12">
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                />
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="NameEmail"
                />
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputEmail" className="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="NameEmail"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Subject
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-primary w-100" onClick={openCalendly}>Schedule a call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
