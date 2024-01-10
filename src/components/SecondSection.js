
import "./SecondSection.css"




const SecondSection = () => {


    return (

        <div className="SecondSectionContainer" id="AboutSection">
            <h2 className='H2Container'>ABOUT ME</h2>

            <div className="AboutSectionContainer">
                <div className="AboutSectionLeft">
                    <img className="miguelImageContainer" alt="miguelImage" src="https://res.cloudinary.com/dsn8zvh4a/image/upload/v1686875515/miguelS_arkcmw.png">

                    </img>
                </div>

                <div className="AboutSectionRight" >
                    <h2 className="nameContainer"> MIGUEL ALFONSO SABATER</h2>
                    <h3 className="titleContainer"> Graphic Designer | Web Developer </h3>
                    <p className="aboutContentContainer">
                    I am a skilled graphic designer and web developer with seven years in design and three years in web development. Holding a degree in Business with a major in Marketing Management, I excel in understanding consumer behavior and crafting effective marketing strategies. My expertise extends to brand management, events coordination, and social media management. For my Hobbies, I enjoy :
                        <br></br>
                        <br></br>
                        <div className="hobbyButtonContainer">
                            <a href="https://miguelsabater.tech/concept-art/"
                                target="_blank"
                                rel="noreferrer">
                                <button>
                                    Concept Art
                                </button>
                            </a>
                            <a href="https://miguelsabater.tech/chibi-characters/"
                                target="_blank"
                                rel="noreferrer">
                                <button>
                                    Chibi Art
                                </button>
                            </a>
                            <a href="https://miguelsabater.tech/digital-painting/"
                                target="_blank"
                                rel="noreferrer">
                                <button>
                                    Digital Painting
                                </button>
                            </a>

                        </div>
                        <br></br>
                        Curious to see my creative journey in action? Delve into my portfolio below, where you'll discover a showcase of sample brands I've created. From crafting memorable logos and building cohesive branding to designing captivating posters and engaging websites, each project tells a unique story. Let these examples inspire your imagination and spark new ideas for our collaboration together.
                    </p>
                    <div className="blinkArrowContainer">

                    <a href='#FirstSectionContainer'>
                        <div className="blink-arrow3"
                        ></div>
                    </a>
                        </div>

                </div>

            </div>

        </div>
    )


}

export default SecondSection