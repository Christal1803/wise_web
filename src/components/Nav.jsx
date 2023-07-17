import React from "react";
import { useNavigate } from "react-router";

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
          <img src="https://imgur.com/U61yxOl.png" className="img-fluid" alt="Logo" />
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

            <li class="nav-item">
              <a class="nav-link" href="#noLink">Socials</a>
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
