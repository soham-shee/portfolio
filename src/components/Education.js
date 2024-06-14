import React from 'react'
import './style.css'

function Education() {
  return (
    <>
    <div className="box">
        <div className="another">
            <div className="lsidebar">Education</div>
            <div className="rsidebar">
              <div className="recent">
                <div className="lside">
                  <p className="title">NIT Warangal</p>
                  <p className="org">B.Tech in EEE | 2026</p>
                  <p className="marks">C.G. (till 4th sem) : 6.7</p>

                </div>
                <div className="rside"> Nov 2021-Present</div>
              </div>

              <div className="recent">
                <div className="lside">
                  <p className="title">Delhi Public School, Vidyut Nagar</p>
                  <p className="org">Class 12 | 2020-21</p>
                  <p className="marks">Percentage : 93%</p>

                </div>
                <div className="rside"> 2020-2021</div>
              </div>

              <div className="recent">
                <div className="lside">
                  <p className="title">Delhi Public School, Vidyut Nagar</p>
                  <p className="org">Class 12 | 2018-19</p>
                  <p className="marks">Percentage : 95%</p>

                </div>
                <div className="rside"> 2018-2019</div>
              </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Education