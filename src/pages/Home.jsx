import React from 'react'
import Nav from '../components/Nav'
import Pathtomarket from '../components/Pathtomarket'
import Banner from '../components/Banner'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import usePreventBodyScroll from '../components/UsePreventBodyScroll'

export default function Home() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <div className='px-lg-4 '>
      
        <Nav/>
        <Banner/>
        <Section1/>
        <Section2/>
        <Section3/>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <Pathtomarket/>
        </div>
        <Section4/>
        <Section5/>
    </div>
  )
}
