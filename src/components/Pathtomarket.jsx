import React, { useRef, useState, useLayoutEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePreventBodyScroll from './UsePreventBodyScroll';
export default function Pathtomarket() {
    const sliderRef2 = useRef(null);
    const [scrollProgress2, setScrollProgress2] = useState(10);
    const [slideToShow, setSlideToShow] = useState(3);
    const { disableScroll, enableScroll } = usePreventBodyScroll();



    const handleScroll2 = (e) => {
        const slider = sliderRef2.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };
    const setting2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress2(100 / (8 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        },
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const setting3 = {
        dots: false,
        infinite: false,
        speed: 500,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
    };
    return (
        <div className='container-fluid'>
            <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}
            >
            </div>
            <div className='scroll-container'>
                <div onWheel={handleScroll2} >
                    <div className='slider-line'
                    ></div>
                    <Slider ref={sliderRef2} {...setting2}>
                        <div key={1}>
                            <div className='card-container'>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div class="card slidercard">
                                        <div className="carosel-card p-3">
                                            <div className="carosel-card-head">
                                                <span className=""><b>Q1 2024</b></span>
                                                <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                            </div>

                                            <div className="carosel-card-coontent">

                                                <ul className="card-content-list">
                                                    <li>Completion of POC - Campaign wizard</li>
                                                    <li>Definition of Ideal customer profiles</li>
                                                    <li>Creation of knowledge graph</li>
                                                    <li>Influencer discovery & filter feature</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div key={2}>
                            <div className='card-container'>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div class="card slidercard">
                                        <div className="carosel-card p-3">
                                            <div className="carosel-card-head">
                                                <span className=""><b>Q2 2024</b></span>
                                                <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                                <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                            </div>

                                            <div className="carosel-card-coontent">

                                                <ul className="card-content-list">
                                                    <li>Campaign tracking and optimization</li>
                                                    <li>Develop Wordsmith - Content creation and optimization</li>
                                                    <li>Influencer Analysis & reach options</li>
                                                    <li>Develop Press Pulse - PR management & media buying</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div key={3}>
                            <div className='card-container'>
                                <div className="col-sm-12 col-md-12 col-lg-12">

                                    <div class="card slidercard">
                                        <div className="carosel-card p-3">
                                            <div className="carosel-card-head">
                                                <span className=""><b>Q3 2024</b></span>
                                                <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                                <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                            </div>

                                            <div className="carosel-card-coontent">

                                                <ul className="card-content-list">
                                                    <li>Campaign Analytics & Completion of Campaign Wizard module</li>
                                                    <li>Wordsmith - Plagiarism check and Grammar check </li>
                                                    <li>Completion of Influencer hub module with payment gateway</li>
                                                    <li>Press Pulse - Scheduling & Tracking</li>
                                                    <li>Develop Ad Launcher</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div key={4}>
                            <div className='card-container'>
                                <div class="card slidercard">
                                    <div className="carosel-card p-3">
                                        <div className="carosel-card-head">
                                            <span className=""><b>Q4 2024</b></span>
                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                        </div>

                                        <div className="carosel-card-coontent">

                                            <ul className="card-content-list">
                                                <li>(Paid Pilot - Beta Launch)</li>
                                                <li>Implement AI models in Campaign Wizard</li>
                                                <li>Enable Knowledge graph & AI mapping in Influencers Hub</li>
                                                <li>Completion of Press Pulse</li>
                                                <li>Integration of partner platforms</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div key={5}>
                            <div className='card-container'>
                                <div class="card slidercard">
                                    <div className="carosel-card p-3">
                                        <div className="carosel-card-head">
                                            <span className=""><b>Q1 2025</b></span>
                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                           <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                        </div>

                                        <div className="carosel-card-coontent">

                                            <ul className="card-content-list">
                                                <li>Ad tracking & Optimization</li>
                                                <li>Development of Insights - Analytics Dashboard & Report generation</li>
                                                <li>Develop Insights & Trend Analysis</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div key={6}>
                            <div className='card-container'>
                                <div class="card slidercard">
                                    <div className="carosel-card p-3">
                                        <div className="carosel-card-head">
                                            <span className=""><b>Q2 2025</b></span>
                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                        </div>

                                        <div className="carosel-card-coontent">

                                            <ul className="card-content-list">
                                                <li>Full commercial launch</li>
                                                <li>Enhancements & fulfillment of feedback from customers</li>
                                                <li>Update of Enterprise version with additional features</li>
                                                <li>More AI models to consult, plan, track & report</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div key={7}>
                            <div className='card-container'>
                                <div class="card slidercard">
                                    <div className="carosel-card p-3">
                                        <div className="carosel-card-head">
                                            <span className=""><b>Q3 2025</b></span>
                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid point-dot" />
                                        </div>

                                        <div className="carosel-card-coontent">

                                            <ul className="card-content-list">
                                                <li>Social media schedulers</li>
                                                <li>Email marketing integration </li>
                                                <li>SEO Optimization checker</li>
                                                <li>A/B testing</li>
                                                <li>CRM integration</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div key={8}>
                            <div className='card-container'>
                                <div class="card slidercard">
                                    <div className="carosel-card p-3">
                                        <div className="carosel-card-head">
                                            <span className=""><b>Q4 2025</b></span>
                                            <img src="https://imgur.com/Umt6QrS.png" className="img-fluid dot-1" />

                                        </div>

                                        <div className="carosel-card-coontent">

                                            <ul className="card-content-list">
                                                <li>Iterate-based user feedback</li>
                                                <li>Expand platform functionality - e.g. Automation of workflows </li>
                                                <li>Customized Templates</li>
                                                <li>Scale Infrastructure</li>
                                                <li>Enhance AI and ML capabilities</li>
                                                <li>Expand Market Reach</li>
                                                <li>Foster a thriving community</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


            <div className='scroll-container'>
                <div className='scroll-container'>
                    <div className='scroll-box scroll_mt '>

                        <div className='scroll-box-1'>
                            <div className='scroll-rl'>
                            </div>
                            <div>
                                <div className='progressbar'>
                                    <div className='progressindicator' style={{ width: `${scrollProgress2}%` }}></div>
                                </div>
                            </div>
                        </div>

                    </div></div>
            </div>

        </div>

    )
}
