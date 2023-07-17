import React from "react";
import { useNavigate } from "react-router";
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/fb.png'
import insta from '../assets/insta.png'
import { Link } from "react-router-dom";

export default function Nav() {

  const redirectToNoLink = () => {
    return "javascript:void(0)";
  }

  return (
    <nav class="navbar navbar-expand-lg" style={{ marginTop: "2rem" }}>
      <div class="container-fluid">
      <Link class="navbar-brand" to="/">
          <img src="https://imgur.com/U61yxOl.png" className="img-fluid" alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href={redirectToNoLink}>Doc</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={redirectToNoLink}>Invest</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={redirectToNoLink}>Blog</a>
            </li>

            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Socials
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://twitter.com/theWise_AI"><img src={twitter} className="img-fluid me-2"/>Twitter</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/company/thewise-ai/"><img src={linkedin} className="img-fluid me-2"/>LinkedIn</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/company/thewise-ai/"><img src={facebook} className="img-fluid me-2"/>Facrbook</a></li>
            <li><a class="dropdown-item" href="https://www.threads.net/@thewise_ai"><img src={facebook} className="img-fluid me-2"/>Threads</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/@theWise_AI/"><img src={facebook} className="img-fluid me-2"/>Youtube</a></li>
            <li><a class="dropdown-item" href="https://www.instagram.com/thewise_ai/"><img src={insta} className="img-fluid me-2"/>Instagram</a></li>
            <li><a class="dropdown-item" href="mailto:contact@thewise.ai"><img src={facebook} className="img-fluid me-2"/>Email</a></li>
          </ul>
        </li>

            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
