import React from "react";
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

            <li class="nav-item">
              <a class="nav-link" href="#noLink">Socials</a>
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
