import React from "react";
import { Link } from "react-router-dom";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/fb.png";
import insta from "../assets/insta.png";
import yt from "../assets/youtube.svg";
import mail from "../assets/gmail.svg";
import logo from "../assets/logo.png";
import threads from "../assets/threads.svg";

export default function Nav() {
  const redirectToNoLink = () => {
    return "javascript:void(0)";
  };
  const wizardLink = process.env.WIZARD_LINK;

  return (
    <nav class="navbar navbar-expand-lg" style={{ marginTop: "2rem" }}>
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img
                      src={logo}
            className="img-fluid brand-logo"
            alt="Logo"
          />
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
            {/* <li class="nav-item">
              <a class="nav-link" href={redirectToNoLink}>
                Doc
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={redirectToNoLink}>
                Invest
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={redirectToNoLink}>
                Blog
              </a>
            </li> */}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href={redirectToNoLink}
                id="navbarDropdownProducts"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                <li>
                  <a
                    class="dropdown-item"
                    href="https://wizard.thewise.ai/campaign"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Campaign Wizard
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://wizard.thewise.ai/social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Content Generator
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href={redirectToNoLink}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Socials
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    href="https://twitter.com/theWise_AI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={twitter}
                      className="img-fluid me-2 twitter"
                      alt="Twitter"
                    />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.linkedin.com/company/thewise-ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedin}
                      className="img-fluid me-2"
                      alt="LinkedIn"
                    />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.facebook.com/people/TheWise_AI/100094932307566/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={facebook}
                      className="img-fluid me-2"
                      alt="Facebook"
                    />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.threads.net/@thewise_ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={threads}
                      className="img-fluid me-2 f-icon"
                      alt="Threads"
                    />
                    Threads
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.youtube.com/@theWise_AI/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={yt}
                      className="img-fluid me-2 f-icon"
                      alt="YouTube"
                    />
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.instagram.com/thewise_ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={insta} className="img-fluid me-2" alt="Insta" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="mailto:contact@thewise.ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={mail}
                      className="img-fluid me-2 f-icon"
                      alt="Email"
                    />
                    Email
                  </a>
                </li>
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
