import React, { useState } from "react"


function Projects() {
    const [isClick, setClick] = useState(false);
  return (
    <>
    <div className="box">
        <div className="featured">
            <p className='feautured-title'>Featured Projects</p>
            <div className="gridProjects">
                <div><a href="https://www.kaggle.com/sohamshee"><div className="grid-item-1"></div>
                <div className="f-name">Load Forecasting</div>
                <div className="content-f">
                • GRU Model built by training data from Kaggle. • Got an accuracy of around 99 percent.</div></a>
                </div>
                <div><a href="https://www.kaggle.com/sohamshee"><div className="grid-item-2"></div>
                <div className="f-name">Digit Recognizer using MNIST</div>
                <div className="content-f">
                • Model built by training data from Kaggle.<br /> • Got an accuracy of around 99 percent.</div></a>
                </div>
                <div><a href="https://www.kaggle.com/sohamshee"><div className="grid-item-3"></div>
                <div className="f-name">Zomato Share Price Prediction</div>
                <div className="content-f">• Using Supervised learning, made a model to predict the Zomato Share Price.
                <br/>• Did Z-Normalization before training it.</div></a>
                </div>
                <div><a href="https://www.kaggle.com/sohamshee"><div className="grid-item-4"></div>
                <div className="f-name">Google Share Price Prediction</div>
                <div className="content-f">• Using GRU, made a model to predict the Google Share Price.</div></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects