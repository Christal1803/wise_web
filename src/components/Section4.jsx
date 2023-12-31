import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import masters from "../assets/masters.png";
import Dhivya from "../assets/Dhivya.png";
import Livingston from "../assets/Livingston.png";
import SamPrabhu from "../assets/SamPrabhu.png";
import Shreyan from "../assets/Shreyan.png";
import Mithilesh from "../assets/Mithilesh.png";
import cardlink from "../assets/cardlink.png";

export default function Section4() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div className="section1 text-center">
            <img src={masters} className="img-fluid" alt="Section 4 Logo" />
            <p className="section1-head">Meet the Masters Behind the Magic</p>
            <p className="section1-text">
              A Team of Visionaries Driving Innovation at thewise.ai
            </p>
          </div>
        </div>

        <div className="col-12 mt-5">
          {/* slider */}
          <div className="smnone">
            <OwlCarousel
              className="owl-theme first-carousel"
              items={3}
              autoplay={true}
              center={true}
              dots={true}
              loop={true}
              // navText={["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]}
              responsive={{
                0: {
                  items: 1, // Number of items to display on screens smaller than 576px
                },
                576: {
                  items: 2, // Number of items to display on screens equal to or larger than 576px
                },
                768: {
                  items: 1, // Number of items to display on screens equal to or larger than 768px
                },
                912: {
                  items: 1, // Number of items to display on screens equal to or larger than 768px
                },
                992: {
                  items: 5, // Number of items to display on screens equal to or larger than 992px
                },
                1200: {
                  items: 5, // Number of items to display on screens equal to or larger than 1200px
                },
              }}
            >
              <div class="row my-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                  <p className="user-name">
                    Dhivya Daniel (DD){" "}
                    <a
                      href="https://www.linkedin.com/in/dhivyadaniel/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="ms-1 card-linked img-fluid"
                        alt="CEO"
                      />
                    </a>
                  </p>
                  <p className="user-role">CEO</p>
                  <p className="user-bio">
                    <div>Steered MetaWise Marketing as CEO</div>
                    <div>10+ years of industry experience</div>
                    <div>PGDM - Marketing (LIBA)</div>
                    <div>Keynote Speaker</div>
                    <div>Data-driven decision-maker</div>
                    <div>Location: Munich, Germany</div>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="owl-img">
                    <img
                      src={Dhivya}
                      className="img-fluid d-inline"
                      alt="CEO"
                    />
                  </div>
                </div>
              </div>

              <div class="row my-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                  <p className="user-name">
                    Livingston Cruz{" "}
                    <a
                      href="https://www.linkedin.com/in/cruz-livingston/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="ms-1 card-linked img-fluid"
                        alt="CPO"
                      />
                    </a>
                  </p>
                  <p className="user-role">CPO</p>
                  <p className="user-bio">
                    <div>Led Enterprise level Digital Transformations</div>
                    <div>
                      12 years in SaaS product development & international
                      rollouts
                    </div>
                    <div>PGDM - Marketing, LIBA</div>
                    <div>Good Storyteller, People-Handler</div>
                    <div>Location: Munich, Germany</div>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="owl-img">
                    <img src={Livingston} className="img-fluid" alt="COO" />
                  </div>
                </div>
              </div>

              <div class="row my-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                  <p className="user-name">
                    Sam Prabhu{" "}
                    <a
                      href="https://www.linkedin.com/in/samprabhuj/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="ms-1 card-linked img-fluid"
                        alt="Machine Learning Expert"
                      />
                    </a>
                  </p>
                  <p className="user-role">Machine Learning Expert</p>
                  <p className="user-bio">
                    <div>7-year SimScale Stalwart</div>
                    <div>M.Sc., RWTH Aachen University</div>
                    <div>
                      Startup Ecosystem Expertise & Client Success/Growth
                      Strategist
                    </div>
                    <div>Chess Aficionado</div>
                    <div>Location: Munich, Germany</div>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="owl-img">
                    <img src={SamPrabhu} className="img-fluid" alt="Machine Learning Expert" />
                  </div>
                </div>
              </div>

              <div class="row my-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                  <p className="user-name">
                    Shreyan Mehta{" "}
                    <a
                      href="https://www.linkedin.com/in/devsm/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="ms-1 card-linked img-fluid"
                        alt="CTO"
                      />
                    </a>
                  </p>
                  <p className="user-role">CTO</p>
                  <p className="user-bio">
                    <div>10+ years of domain experience</div>
                    <div>4+ years AI & GPT</div>
                    <div>6+ years MERN stack</div>
                    <div>5+ years as a Scrum Master</div>
                    <div>Launched “SitesGPT” & “loveGPT"</div>
                    <div>Location: Ahmedabad, India</div>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="owl-img">
                    <img src={Shreyan} className="img-fluid" alt="CTO" />
                  </div>
                </div>
              </div>

              <div class="row my-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                  <p className="user-name">
                    Mithilesh Nanj
                    <a
                      href="https://www.linkedin.com/in/mithileshnanj/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="ms-1 card-linked img-fluid"
                        alt="Data"
                      />
                    </a>
                  </p>
                  <p className="user-role">Data Scientist</p>
                  <p className="user-bio">
                    <div>7-year of Data Science exp</div>
                    <div>M.S.Data Science</div>
                    <div>Indiana University Bloomington</div>
                    <div>Ex- Yahoo</div>
                    <div>Location: Illinois, USA</div>
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="owl-img">
                    <img
                      src={Mithilesh}
                      className="img-fluid"
                      alt="Data Scientist"
                    />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>

          <div class="smblock">
            <OwlCarousel
              className="owl-theme second-carousel"
              items={3}
              autoplay={false}
              center={true}
              dots={true}
              loop={true}
              responsive={{
                0: {
                  items: 1, // Number of items to display on screens smaller than 576px
                },
                576: {
                  items: 1, // Number of items to display on screens equal to or larger than 576px
                },
                768: {
                  items: 1, // Number of items to display on screens equal to or larger than 768px
                },
                992: {
                  items: 4, // Number of items to display on screens equal to or larger than 992px
                },
                1200: {
                  items: 3, // Number of items to display on screens equal to or larger than 1200px
                },
              }}
            >
              <div class="item row ">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="owl-img sm">
                    <img
                      src="https://imgur.com/FCuEGoA.png"
                      className="img-fluid"
                      alt="Dhivya"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <p className="user-name">
                    Dhivya Daniel (DD){" "}
                    
                  </p>

                  <p className="user-role">CEO</p>
                  <a
                      href="https://www.linkedin.com/in/dhivyadaniel/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="mb card-linked img-fluid"
                        alt="CEO"
                      />
                    </a>
                  <p className="user-bio">
                    <div>Steered MetaWise Marketing as CEO</div>
                    <div>10+ years of industry experience</div>
                    <div>PGDM - Marketing (LIBA)</div>
                    <div>Keynote Speaker</div>
                    <div>Data-driven decision-maker</div>
                    <div>Location: Munich, Germany</div>
                  </p>
                </div>
              </div>

              <div class="item row ">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="owl-img sm">
                    <img
                      src="https://imgur.com/Up8aDy6.png"
                      className="img-fluid"
                      alt="Cruz"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <p className="user-name">
                    Livingston Cruz{" "}
                    
                  </p>
                  <p className="user-role">CPO</p>

                  <a
                      href="https://www.linkedin.com/in/cruz-livingston/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="mb card-linked img-fluid"
                        alt="CPO"
                      />
                    </a>

                  <p className="user-bio">
                    <div>Led Enterprise level Digital Transformations</div>
                    <div>
                      12 years in SaaS product development & international
                      rollouts
                    </div>
                    <div>PGDM - Marketing, LIBA</div>
                    <div>Good Storyteller, People-Handler</div>
                    <div>Location: Munich, Germany</div>
                  </p>
                </div>
              </div>

              <div class="item row ">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="owl-img sm">
                    <img
                      src="https://imgur.com/3VvcAC3.png"
                      className="img-fluid"
                      alt="Sam"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <p className="user-name">
                    Sam Prabhu{" "}
                    
                  </p>
                  <p className="user-role">Machine Learning Expert</p>
                  <a
                      href="https://www.linkedin.com/in/samprabhuj/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="mb card-linked img-fluid"
                        alt="Machine Learning Expert"
                      />
                    </a>
                  <p className="user-bio">
                    <div>7-year SimScale Stalwart</div>
                    <div>M.Sc., RWTH Aachen University</div>
                    <div>
                      Startup Ecosystem Expertise & Client Success/Growth
                      Strategist
                    </div>
                    <div>Chess Aficionado</div>
                    <div>Location: Munich, Germany</div>
                  </p>
                </div>
              </div>

              <div class="item row ">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="owl-img sm">
                    <img
                      src="https://imgur.com/wYaaEe9.png"
                      className="img-fluid"
                      alt="Shreyan"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <p className="user-name">
                    Shreyan Mehta{" "}
                   
                  </p>
                  <p className="user-role">CTO</p>
                  <a
                      href="https://www.linkedin.com/in/devsm/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="mb card-linked img-fluid"
                        alt="CTO"
                      />
                    </a>
                  <p className="user-bio">
                    <div>10+ years of domain experience</div>
                    <div>4+ years AI & GPT</div>
                    <div>6+ years MERN stack</div>
                    <div>5+ years as a Scrum Master</div>
                    <div>Launched “SitesGPT” & “loveGPT"</div>
                    <div>Location: Ahmedabad, India</div>
                  </p>
                </div>
              </div>

              <div class="item row ">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="owl-img sm">
                    <img
                      src="https://imgur.com/bH8TD4B.png"
                      className="img-fluid"
                      alt="Mithilesh"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <p className="user-name">
                    Mithilesh Nanj
                    
                  </p>
                  <p className="user-role">Data Scientist</p>

                  <a
                      href="https://www.linkedin.com/in/mithileshnanj/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={cardlink}
                        className="mb card-linked img-fluid"
                        alt="Data"
                      />
                    </a>
                  <p className="user-bio">
                    <div>7-year of Data Science exp</div>
                    <div>M.S.Data Science</div>
                    <div>Indiana University Bloomington</div>
                    <div>Ex- Yahoo</div>
                    <div>Location: Illinois, USA</div>
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
