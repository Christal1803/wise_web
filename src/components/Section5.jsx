import React from "react";

export default function Section5() {
  return (
    <div className="containter-fluid">
      <div className="row m-3 footermain">
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <p className="main-text2">
            Join our private beta program for exclusive access
          </p>

          {/* <div class="buttonIn">
            <input type="text" id="enter" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div> */}
          <div class="search">
        <input placeholder="Enter Email Address" type="text"/>
        <button type="submit">Subscribe</button>
      </div>

        </div>
      </div>

      <div className="row m-3">
     
    <div className="col-12 ">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-2">
    <span class="col-md-4 col-sm-12 "><img src='https://imgur.com/U61yxOl.png' className='img-fluid'/></span>

    

<span className="col-md-4 col-sm-12">
<ul class="nav  justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Doc</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Invest</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Blog</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Privacy Policy</a></li>
    </ul>
</span>



    <span class="col-md-4 col-sm-12">
    <ul class="nav col-md-4 float-end justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">
        <img src="https://imgur.com/qgkrMm0.png" className="img-fluid"/></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">
      <img src="https://imgur.com/ZoyfRGU.png" className="img-fluid"/>
      </a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">
      <img src="https://imgur.com/WxdOxac.png" className="img-fluid"/>
      </a></li>
    </ul>
    </span>
  </footer>
    </div>


    <div className="col-12 copy-right text-center">
        <p>Copyright © 2023 MetaWise</p>
    </div>

      </div>
    </div>
  );
}
