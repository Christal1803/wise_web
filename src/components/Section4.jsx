import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import masters from '../assets/masters.png'
import Dhivya from '../assets/Dhivya.png'
import Livingston from '../assets/Livingston.png'
import SamPrabhu from '../assets/SamPrabhu.png'
import Shreyan from '../assets/Shreyan.png'
import Mithilesh from '../assets/Mithilesh.png'

export default function Section4() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div className="section1 text-center">
            <img
              src={masters}
              className="img-fluid"
              alt="Section 4 Logo"
            />
            <p className="section1-head">Meet the Masters Behind the Magic</p>
            <p className="section1-text">
              A Team of Visionaries Driving Innovation at thewise.ai
            </p>
          </div>
        </div>

        <div className="col-12 mt-5">
          {/* slider */}
          <OwlCarousel
            className="owl-theme"
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
              992: {
                items: 3, // Number of items to display on screens equal to or larger than 992px
              },
              1200: {
                items: 3, // Number of items to display on screens equal to or larger than 1200px
              },
            }}
          >
            <div class="row my-3">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                <p className="user-name">Dhivya Daniel (DD)</p>
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
                    className="img-fluid"
                    alt="CEO"
                  />
                </div>
              </div>
            </div>

            <div class="row my-3">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                <p className="user-name">Livingston Cruz</p>
                <p className="user-role">COO</p>
                <p className="user-bio">
                  Led Enterprise level Digital Transformations12 years in SaaS
                  development & international rolloutsPGDM - Marketing, LIBAGood
                  Storyteller, People-Handler Location: Munich, Germany
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                <div className="owl-img">
                  <img
                    src={Livingston}
                    className="img-fluid"
                    alt="COO"
                  />
                </div>
              </div>
            </div>

            <div class="row my-3">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                <p className="user-name">Sam Prabhu</p>
                <p className="user-role">CPO</p>
                <p className="user-bio">
                  7-year SimScale StalwartM.Sc., RWTH Aachen UniversityStartup
                  Ecosystem Expertise & Client Success/Growth StrategistAI
                  Enthusiast, Chess Aficionado Location: Munich, Germany
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                <div className="owl-img">
                  <img
                    src={SamPrabhu}
                    className="img-fluid"
                    alt="CPO"
                  />
                </div>
              </div>
            </div>

            <div class="row my-3">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                <p className="user-name">Shreyan Mehta</p>
                <p className="user-role">CTO</p>
                <p className="user-bio">
                  10+ years of domain experience4+ years AI & GPT6+ years MERN
                  stack5+ years as a Scrum MasterLaunched “SitesGPT” &
                  “loveGPT" Location: Ahmedabad, India
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
                <div className="owl-img">
                  <img
                    src={Shreyan}
                    className="img-fluid"
                    alt="CTO"
                  />
                </div>
              </div>
            </div>

            <div class="row my-3">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto my-content">
                <p className="user-name">Mithilesh Nanj</p>
                <p className="user-role">Data Scientist</p>
                <p className="user-bio">
                  7-year of Data Science exp, M.S.Data Science, Indiana University
                  Bloomingtonex- Yahoo Location: Illinois, USA
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
          ;
        </div>
      </div>
    </div>
  );
}
