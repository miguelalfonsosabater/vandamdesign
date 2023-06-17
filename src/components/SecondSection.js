
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
                        A passionate and experienced graphic designer and web developer with a strong background in marketing management. With seven years of expertise in graphic design and three years in web development, I have honed my skills to create visually appealing and functional designs.
                        <br></br>
                        <br></br>
                        I hold a degree in Business with a major in Marketing Management, which has provided me with a solid foundation in understanding consumer behavior and crafting effective marketing strategies. Alongside my design and development skills, I also possess extensive experience in brand management, events management, and social media management.
                        <br></br>
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