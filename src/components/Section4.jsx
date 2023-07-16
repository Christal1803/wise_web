import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Section4() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
            <div className='section1 text-center'>
                <img src='https://imgur.com/TDLc2LC.png' className='img-fluid'/>
                <p className='section1-head'>Meet the Masters Behind the Magic</p>
                <p className='section1-text'>A Team of Visionaries Driving Innovation at thewise.ai</p>
            </div>
            </div>

            <div className='col-12 mt-5'>
                {/* slider */}
                <OwlCarousel className='owl-theme' items={3} autoplay={true} center={true} dots={true} loop={true} nav>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>;
            </div>
            

            
        </div>
    </div>
  )
}
