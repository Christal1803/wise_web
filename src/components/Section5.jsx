import React, { useState } from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import privacyPolicyDoc from "../assets/Privacy_Policy.pdf";
import postItem from "../services/ApiAccess";

export default function Section5() {
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
    <div className="containter-fluid mt-5">
         <div className="row m-3 footermain">
        <div className="col-sm-12 col-md-6 col-lg-6 sub">
          <p className="main-text2">
            Join our private beta program for <br></br>exclusive access
          </p>

          {/* <div class="buttonIn">
            <input type="text" id="enter" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div> */}
          <div class="search">
            <input
              placeholder="Enter Email Address"
              type="text"
              onChange={(e) => formOnChange(e)}
              value={email}
            />
            <button type="submit" onClick={(e) => subscribeToProgram(e)}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mobileblock">
   

      <div className="row m-3">

      <div className="col-sm-12 col-md-3 col-lg-3 mt-3 footer-pad0">
          <ul className="nav footer-social">
            <li class="nav-item footer-social-item">
              <a
                href="https://twitter.com/theWise_AI"
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                <img src={twitter} className="img-fluid" alt="Twitter" />
              </a>
            </li>
            <li class="nav-item footer-social-item">
              <a
                href="https://www.facebook.com/profile.php?id=100094932307566"
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                <img src={facebook} className="img-fluid" alt="Facebook" />
              </a>
            </li>
            <li class="nav-item footer-social-item">
              <a
                href="https://www.instagram.com/thewise_ai/"
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                <img src={insta} className="img-fluid" alt="Insta" />
              </a>
            </li>

            
          </ul>
        </div>
      

        <div className="col-sm-12 col-md-6 col-lg-6 mt-3 footer-links">
          <ul className="nav">
            {/* <li class="nav-item footer-nav">
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
            </li> */}
            <li class="nav-item footer-nav">
              <Link to="/contact" class="nav-link px-2 text-muted">
                Contact
              </Link>
            </li>
            <li class="nav-item footer-nav">
              <a
                href={privacyPolicyDoc}
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

     

       

        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 footer-pad0 smnone1">
          <Link to="/">
            <img
              src="https://imgur.com/U61yxOl.png"
              className="img-fluid"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="col-12 copy-right text-center mt-4">
          <p>Copyright © 2023 MetaWise</p>
        </div>
      </div>

      </div>
      <div className="mobilenone">

      <div className="row m-3">
        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 footer-pad0 smnone1">
          <Link to="/">
            <img
              src="https://imgur.com/U61yxOl.png"
              className="img-fluid"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 mt-3 footer-links">
          <ul className="nav">
            {/* <li class="nav-item footer-nav">
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
            </li> */}
            <li class="nav-item footer-nav">
              <Link to="/contact" class="nav-link px-2 text-muted">
                Contact
              </Link>
            </li>
            <li class="nav-item footer-nav">
              <a
                href={privacyPolicyDoc}
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 mt-3 footer-pad0">
          <ul className="nav footer-social">
            <li class="nav-item footer-social-item">
              <a
                href="https://twitter.com/theWise_AI"
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                <img src={twitter} className="img-fluid" alt="Twitter" />
              </a>
            </li>
            <li class="nav-item footer-social-item">
              <a
                href="https://www.facebook.com/profile.php?id=100094932307566"
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                <img src={facebook} className="img-fluid" alt="Facebook" />
              </a>
            </li>
            <li class="nav-item footer-social-item">
              <a
                href="https://www.instagram.com/thewise_ai/"
                target="_blank"
                rel="noreferrer"
                class="nav-link px-2 text-muted"
              >
                <img src={insta} className="img-fluid" alt="Insta" />
              </a>
            </li>

            
          </ul>
        </div>

        <div className="col-12 mt-3  text-center footer-pad0 smblock">
          <Link to="/">
            <img
              src="https://imgur.com/U61yxOl.png"
              className="img-fluid"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="col-12 copy-right text-center mt-4">
          <p>Copyright © 2023 MetaWise</p>
        </div>
      </div>
        
      </div>
     
    </div>

    
  );
}
