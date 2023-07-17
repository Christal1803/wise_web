import React from "react";

export default function Contacts() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img
            src="https://imgur.com/7u9rLMS.png"
            className="conatctimg img-fluid"
            alt="Contact"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
          <h3>Get in touch</h3>

          <div className="col-md-12">
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                />
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputEmail" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="NameEmail"
                />
              </div>

              <div className="col-lg-6 col-sm-12 col-md-6 pl-0">
                <label for="exampleInputEmail" class="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="NameEmail"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Subject
                  </label>
                  <textarea
                    class="form-control"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
