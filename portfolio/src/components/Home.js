import React, { useState } from "react";
import '../components/home.css'


const Home = () => {
    const [showProject1, setShowProject1] = useState(false)
    const [showProject2, setShowProject2] = useState(false) 
    const [showProject3, setShowProject3] = useState(false)
     
    const transition1 = showProject1 ? {width: '23vw', zIndex: '2'} : {width: '0vw'} ;
    const transition2 = showProject2 ? {width: '23vw', zIndex: '2'} : {width: '0vw'} ;
    const transition3 = showProject3 ? {width: '23vw', zIndex: '2'} : {width: '0vw'} ;

    const show1 = () => {
        setShowProject1(!showProject1)
        setShowProject2(false)
        setShowProject3(false)
    }
    const show2 = () => {
        setShowProject1(false)
        setShowProject2(!showProject2)
        setShowProject3(false)
    }
    const show3 = () => {
        setShowProject1(false)
        setShowProject2(false)
        setShowProject3(!showProject3)
    }

    return(
        <>

            <div id="header-main-div">
                <div id="header-LR-divs">
                    <div id="header-left-div">
                        <div id="border-left-div">
                            <h1 id="name">Salam Abdusalamov</h1>
                        </div>
                    </div>
                    <div id="header-right-div">
                        <div id="border-right-div">
                            <h1 id="about-me">About Me</h1>
                            <p id="about-me-text">&nbsp;&nbsp;&nbsp; Here is text about me adding some more text to test it for now!
                            here is text about me adding some more text to test it for now!
                            here is text about me adding some more text to test it for now!
                            here is text about me adding some more text to test it for now!
                            here is text about me adding some more text to test it for now!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="middle-body-div">
                <div id="side-div">

                </div>

                <div id="project-div">
                    <div id="left-div-projects">
                        <h1 id="my-projects-h1">My Projects</h1>
                        <div id="project-buttons-list-div">
                            <button onClick={() => show1()} class="project-buttons">Pong-Game</button>
                            <button onClick={() => show2()} class="project-buttons">Coffee-Shop</button>
                            <button onClick={() => show3()} class="project-buttons">Lux-House</button>
                        </div>
                    </div>
                    <div style={transition1} id="project1-description-div">

                    </div>
                    <div style={transition2} id="project2-description-div">

                    </div>
                    <div style={transition3} id="project3-description-div">

                    </div>
                </div>
                
                <div id="contact-me">

                </div>
            </div>
            

        </>
    )
}

export default Home;