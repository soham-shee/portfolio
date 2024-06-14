import React from 'react'
import Navbar from '../components/Navbar.js'
import Hero from '../components/Hero.js'
import Education from '../components/Education.js'
import Projects from '../components/Projects.js'
import Footer from '../components/Footer.js'

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Education />
    <Projects />
    <Footer />
    </>
  )
}

export default Home