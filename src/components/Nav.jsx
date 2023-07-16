import React from 'react'
import { useNavigate } from "react-router";

export default function Nav() {
  let navigate = useNavigate();
  const Movetocontact = () => {
    let path = `/contact`;
    navigate(path);
  };
  const Movetohome = () => {
    let path = `/`;
    navigate(path);
  };
  return (

       <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" onClick={Movetohome}>
        <img src='https://imgur.com/U61yxOl.png' className='img-fluid'/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link" >Doc</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Invests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Blog</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" >Socials</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" onClick={Movetocontact}>Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  )
}
