import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Members from '../components/Members'
import Register from '../components/Register'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import VolunteerCarousel from '../components/Volunteer'
import CommunityMembers from '../components/Community_mem'
import Stats from '../components/Stats'
import About from '../components/About'

const MainSite = () => {
  return (
    < >
      
      <Header />
      <Hero />
      <About />
      <Members /> 
      <CommunityMembers />
      <Stats />
      <Register />
      <VolunteerCarousel />
      <Contact />
      <Footer />
    </>
  )
}

export default MainSite