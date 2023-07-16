import React from 'react'

export default function Banner() {
  return (
    <div className='container-fluid mt-5'>
    <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-8 col-xl-8 mt-auto mb-auto'>
            <h1 className='banner1'>Marketing Simplified</h1>
            <p className='banner2'>Ideate, Execute, Promote, Analyze - All made possible by<br/> One Powerful AI</p>
            <button className='bannerbtn btn'>Join Beta</button>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center'>
            <img src='https://imgur.com/6lOLZ7m.png' className='img-fluid banner-img'/>
        </div>
    </div>
</div>
  )
}
