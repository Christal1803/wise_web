import React from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/twitter.png";
import facebook from "../assets/fb.png";
import insta from "../assets/insta.png";

export default function Section5() {

  const redirectToNoLink = () => {
    return "javascript:void(0)";
  }

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
        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 footer-pad0">
          <img
            src="https://imgur.com/U61yxOl.png"
            className="img-fluid"
            alt="Logo"
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 mt-3 footer-links">
          <ul className="nav">
            <li class="nav-item footer-nav">
              <a href={redirectToNoLink} class="nav-link px-2 text-muted">
                Doc
              </a>
            </li>
            <li class="nav-item footer-nav">
              <a href={redirectToNoLink} class="nav-link px-2 text-muted">
                Invest
              </a>
            </li>
            <li class="nav-item footer-nav">
              <a href={redirectToNoLink} class="nav-link px-2 text-muted">
                Blog
              </a>
            </li>
            <li class="nav-item footer-nav">
              <Link to="/contact" class="nav-link px-2 text-muted">
                Contact
              </Link>
            </li>
            <li class="nav-item footer-nav">
              <a href={redirectToNoLink} class="nav-link px-2 text-muted">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 footer-pad0">
          <ul className="nav footer-social">
            <li class="nav-item footer-social-item">
              <a href="https://twitter.com/theWise_AI" target="_blank" rel="noreferrer" class="nav-link px-2 text-muted">
                <img
                  src={twitter}
                  className="img-fluid"
                  alt="Twitter"
                />
              </a>
            </li>
            <li class="nav-item footer-social-item">
              <a href="https://www.facebook.com/profile.php?id=100094932307566" target="_blank" rel="noreferrer" class="nav-link px-2 text-muted">
                <img
                  src={facebook}
                  className="img-fluid"
                  alt="Facebook"
                />
              </a>
            </li>
            <li class="nav-item footer-social-item">
              <a href="https://www.instagram.com/thewise_ai/" target="_blank" rel="noreferrer" class="nav-link px-2 text-muted">
                <img
                  src={insta}
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
