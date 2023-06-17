import React from "react";
import './App.css';
import NavigationBar from './components/NavigationBar';
import LottieSection from './components/LottieSection';
import FirstSection from './components/FirstSection';
import SecondSection from "./components/SecondSection";
import ContactSection from "./components/ContactSection";

function App() {



  return (
    <div className="App">
    <NavigationBar />
    <LottieSection />
    <SecondSection/>
    <FirstSection />
    <ContactSection />

    </div>
  );
}

export default App;
