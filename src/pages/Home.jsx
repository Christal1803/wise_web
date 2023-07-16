import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'

export default function Home() {
  return (
    <div className='px-lg-4'>
        <Nav/>
        <Banner/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
    </div>
  )
}
