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
    <div className="px-lg-5 px-md-3 mx-4 home">
  <div className="container-fluid main-banner my-5" style={{ paddingTop: "0rem" }}>
    <div className="row">
      <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 mt-auto mb-auto or2">
        <h1 className="banner1 py-2">Marketing Simplified</h1>
        <p className="banner2 py-2">
          Ideate, Execute, Promote, Analyze - All made possible by
          <br /> <span className="semi-bold">One Powerful AI</span>
        </p>

        <div className="beta">
        <button className="bannerbtn btn" >Join Beta
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

      <div className="subcription-order">

      <div className="col-lg-12 col-sm-12 px-4 mt-4 text-center">
          <h5 className="popup-heading">Get Ahead with theWise.ai Beta</h5>

          <form>
            <div class="mb-3 mt-3">
              <label for="exampleInputEmail1" class="form-label">
                Email<sup>*</sup>
              </label>
              <input
                type="email"
                class="form-control w-sm-100 w-lg-50 mx-auto"
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
    {/* popup */}





    
  </div>
    </div>
  
  );
}
