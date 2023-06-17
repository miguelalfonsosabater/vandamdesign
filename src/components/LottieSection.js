import React from "react";
import Lottie from "lottie-react"
import VandamLottie from "../assets/VandamLottie.json"
import "./LottieSection.css"


const LottieSection = () => {


    return (

        <div className="LottieContainer" id="LottieSection">

            <Lottie animationData={VandamLottie} loop={true} speed={0.2} className="lottieItself" />
            <p className="LottieText">Let's create something awesome!</p>

            <a href='#FirstSectionContainer'>
            <div className="blink-arrow" 
            ></div>
            </a>
            <a href='#FirstSectionContainer'>
            <div className="blink-arrow blink-arrow2" 
            ></div>
            </a>

        </div>
    )


}


export default LottieSection