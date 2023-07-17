import React from "react";
import { useNavigate } from "react-router";
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/fb.png'
import insta from '../assets/insta.png'
import yt from '../assets/youtube.svg'
import mail from '../assets/gmail.svg'
import threads from '../assets/threads.svg'

export default function Nav() {

  let navigate = useNavigate();

  const navigateToContact = () => {
    let path = `/contact`;
    navigate(path);
  };

  const navigateToHome = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <nav class="navbar navbar-expand-lg" style={{ marginTop: "2rem" }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#noLink" onClick={navigateToHome}>
          <img src={logo} className="img-fluid" alt="Logo" />
        </a>
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
              <a class="nav-link" href="#noLink">Doc</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#noLink">Invest</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#noLink">Blog</a>
            </li>

            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Socials
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://twitter.com/theWise_AI"><img src={twitter} className="img-fluid me-2"/>Twitter</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/company/thewise-ai/"><img src={linkedin} className="img-fluid me-2"/>LinkedIn</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/company/thewise-ai/"><img src={facebook} className="img-fluid me-2"/>Facebook</a></li>
            <li><a class="dropdown-item" href="https://www.threads.net/@thewise_ai"><img src={threads} className="img-fluid me-2 f-icon"/>Threads</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/@theWise_AI/"><img src={yt} className="img-fluid me-2 f-icon"/>Youtube</a></li>
            <li><a class="dropdown-item" href="https://www.instagram.com/thewise_ai/"><img src={insta} className="img-fluid me-2"/>Instagram</a></li>
            <li><a class="dropdown-item" href="mailto:contact@thewise.ai"><img src={mail} className="img-fluid me-2 f-icon"/>Email</a></li>
          </ul>
        </li>

            <li class="nav-item">
              <a class="nav-link" href="#noLink" onClick={navigateToContact}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
