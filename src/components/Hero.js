import React from 'react'
import './style.css'

function Hero() {
  return (
    <>
    <div className="box">
        <div className="dsc">
            <p>👋 Hey, I'm</p>
            <p className='big'>Soham Shee</p>
            <p className='about'>a third-year engineering student at NIT Warangal, India, with a passion for crafting innovative solutions and mastering the art of software development. Currently, I am honing my skills in the dynamic world of web development, specializing in React Js, Python, and Django.</p>
            <div className='social'>
                <div className="github"></div>
                <div className="linkedin"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero