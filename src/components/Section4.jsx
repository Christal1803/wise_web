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
                <OwlCarousel className='owl-theme' items={3} autoplay={false} center={true} dots={true} loop={true} nav>
   
   




    <div class='item row '>


<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    <p className='user-name'>Dhivya Daniel (DD)</p>
    <p className='user-role'>CEO</p>
    <p className='user-bio'>Steered MetaWise Marketing as CEO10+ years of industry experiencePGDM - Marketing (LIBA)Keynote SpeakerData-driven decision-makerLocation: Munich, Germany</p>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
<div className='owl-img'>
    <img src='https://imgur.com/FCuEGoA.png' className='img-fluid'/>
</div></div>

</div>



<div class='item row '>


<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    <p className='user-name'>Livingston Cruz</p>
    <p className='user-role'>COO</p>
    <p className='user-bio'>Led Enterprise level Digital Transformations12 years in SaaS development & international rolloutsPGDM - Marketing, LIBAGood Storyteller, People-HandlerLocation: Munich, Germany</p>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
<div className='owl-img'>
    <img src='https://imgur.com/Up8aDy6.png' className='img-fluid'/>
</div>
</div>

</div>



<div class='item row '>


<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    <p className='user-name'>Sam Prabhu</p>
    <p className='user-role'>CPO</p>
    <p className='user-bio'>7-year SimScale StalwartM.Sc., RWTH Aachen UniversityStartup Ecosystem Expertise & Client Success/Growth StrategistAI Enthusiast, Chess AficionadoLocation: Munich, Germany</p>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
<div className='owl-img'>
    <img src='https://imgur.com/3VvcAC3.png' className='img-fluid'/>
</div></div>

</div>



<div class='item row '>


<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    <p className='user-name'>Shreyan Mehta</p>
    <p className='user-role'>CTO</p>
    <p className='user-bio'>10+ years of domain experience4+ years AI & GPT6+ years MERN stack5+ years as a Scrum MasterLaunched “SitesGPT” & “loveGPT"Location: Ahmedabad, India</p>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
<div className='owl-img'>

    <img src='https://imgur.com/wYaaEe9.png' className='img-fluid'/>
</div></div>

</div>



<div class='item row '>


<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    <p className='user-name'>Mithilesh Nanj</p>
    <p className='user-role'>Data Scientist</p>
    <p className='user-bio'>7-year of Data Science expM.S.Data Science, Indiana University Bloomingtonex- YahooLocation: Illinois, USA</p>
</div>
<div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
    <div className='owl-img'>
    <img src='https://imgur.com/bH8TD4B.png' className='img-fluid'/>
    </div>
    
</div>

</div>

</OwlCarousel>;
            </div>
            

            
        </div>
    </div>
  )
}
