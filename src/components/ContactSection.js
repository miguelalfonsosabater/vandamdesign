
import Lottie from "lottie-react"
import emailLottie from "../assets/emailLottie.json"

import './ContactSection.css'



const ContactSection = () => {

    return(

        <div className="contactSectionContainer" id='contact'>
            <div className='emailLottieContainer'>
            <Lottie animationData={emailLottie} loop={true} speed={0.2} className="emailLottie" />
            </div>
            <div className='ContactDetailsContainer'>
                <h3 className="h3contact">Let's create something awesome!</h3> 
                <h4> email : sabatermiguelalfonso@gmail.com </h4>
                <h4> skype : live:sabatermiguel11 </h4>
                
            </div>

        </div>
    )
}




export default ContactSection