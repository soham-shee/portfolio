import React from 'react'
import './style.css'

function Navbar() {
  return (
    <>
    <div className='box'>
    <div className="nav">
      <div className="logo">
        <h2><a href='/'>SS.</a></h2>
      </div>
      <ul>
        <li><a href='https://www.github.com/soham-shee'>Projects</a></li>
        <li><a href='https://drive.google.com/file/d/11kxNOwFoR6VctNAx250HYbH_zKLBhRK_/view?usp=share_link'>Resume</a></li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar