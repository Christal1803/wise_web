import React from "react";
import { useNavigate } from "react-router";

export default function Section5() {
  let navigate = useNavigate();

  const navigateToContact = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <div className="containter-fluid">
      <div className="row m-3 footermain">
        <div className="col-sm-12 col-md-6 col-lg-5">
          <p className="main-text2">
            Join our private beta program for exclusive access
          </p>

          {/* <div class="buttonIn">
            <input type="text" id="enter" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div> */}
          <div class="search">
            <input placeholder="Enter Email Address" type="text" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="row m-3">
        <div className="col-sm-12 col-md-3 col-lg-3 mt-3">
          <img
            src="https://imgur.com/U61yxOl.png"
            className="img-fluid"
            alt="Logo"
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
          <ul className="nav">
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                Doc
              </a>
            </li>
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                Invest
              </a>
            </li>
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="#noLink" onClick={navigateToContact} class="nav-link px-2 text-muted">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 mt-3">
          <ul className="nav">
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                <img
                  src="https://imgur.com/qgkrMm0.png"
                  className="img-fluid"
                  alt="Twitter"
                />
              </a>
            </li>
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                <img
                  src="https://imgur.com/ZoyfRGU.png"
                  className="img-fluid"
                  alt="Facebook"
                />
              </a>
            </li>
            <li class="nav-item">
              <a href="#noLink" class="nav-link px-2 text-muted">
                <img
                  src="https://imgur.com/WxdOxac.png"
                  className="img-fluid"
                  alt="Insta"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 copy-right text-center mt-4">
          <p>Copyright © 2023 MetaWise</p>
        </div>
      </div>
    </div>
  );
}
