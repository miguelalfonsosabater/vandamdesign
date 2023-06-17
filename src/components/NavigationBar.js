import React, { useState } from 'react';
import './NavigationBar.css'

import resume from "../assets/SABATERMIGUELALFONSO0623.pdf"

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="logo"> <a href="#LottieSection">MIGUEL SABATER </a>   </div>
            <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#LottieSection" onClick={toggleMobileMenu}>HOME</a></li>
                    <li><a href="#AboutSection" onClick={toggleMobileMenu}>ABOUT</a></li>
                    <li><a href='#FirstSectionContainer' onClick={toggleMobileMenu}>SAMPLES</a></li>
                    <li><a href="#contact" onClick={toggleMobileMenu}>CONTACT</a></li>
                    <li> <a href={resume} download='SABATERMIGUELALFONSO0623' > <button id='resumeButton' onClick={toggleMobileMenu} >RESUME</button>  </a> </li>  
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
};

export default NavigationBar;
