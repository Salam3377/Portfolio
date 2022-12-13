import React, { useState, useRef } from "react";
import '../components/home.css'
import pongMain from '../images/pong-main-pic.PNG'
import coffeeShop from '../images/coffee-shop.PNG'
import backgroundPic from '../images/backgroundPic.jpg'
import luxHouse from '../images/lux-house-pic.PNG'
import emailjs from '@emailjs/browser';


const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9vv00dm', 'template_xh8bbrf', form.current, 'PMOhg-FNFQLZkVJC4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    const [showProject1, setShowProject1] = useState(false)
    const [showProject2, setShowProject2] = useState(false) 
    const [showProject3, setShowProject3] = useState(false)
     
    const transition1 = showProject1 ? {width: '870px', opacity: "1", zIndex: '2'} : {border: 'none', height: '0',width: '0', opacity: '0'} ;
    const transition2 = showProject2 ? {width: '870px',  opacity: "1", zIndex: '2'} : {border: 'none', height: '0',width: '0', opacity: '0'} ;
    const transition3 = showProject3 ? {width: '870px', opacity: "1",  zIndex: '2'} : {border: 'none', height: '0',width: '0', opacity: '0'} ;

    const choiceColor1 = showProject1 ? {color: 'blueviolet'} : {}
    const choiceColor2 = showProject2 ? {color: 'blueviolet'} : {}
    const choiceColor3 = showProject3 ? {color: 'blueviolet'} : {}
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
                        <h1 id="name">Salam Abdusalamov</h1>
                        <div id="border-left-div"></div>
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

            <div id="center-links-div">
                <div id="side-div">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salam-abdusalamov05/" id="linkedin" class="fa fa-linkedin-square"><k></k></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Salam3377" id="github" class="fa fa-github-square" ><k></k></a>
                </div>
                <div id="skills">
                    <div class="icons-div"> 
                        <i class="devicon-javascript-plain"></i>
                        <p id="js-db" class="p-skills">JavaScript</p>
                    </div>
                    <div  class="icons-div"> 
                        <i class="devicon-react-original"></i>
                        <p class="p-skills">React</p>
                    </div>
                    <div  class="icons-div"> 
                        <i class="devicon-mongodb-plain-wordmark"></i>
                        <p id="js-db" class="p-skills">MongoDB</p>
                    </div>
                    <div  class="icons-div"> 
                        <i class="devicon-python-plain"></i>
                        <p class="p-skills">Python</p>
                    </div>
                    <div  class="icons-div"> 
                        <i class="devicon-django-plain"></i>
                        <p class="p-skills">DJango</p>
                    </div>
                </div>
            </div>
            {/* style={{backgroundImage: `url(${backgroundPic})`}} */}
            <div id="middle-body-div">
                <img id="background" src={backgroundPic} alt="" />
                <div id="project-div">
                    <div id="left-div-projects">
                        <h1 id="my-projects-h1">My Projects</h1>
                        <div id="project-buttons-list-div">
                            <button style={choiceColor1} onClick={() => show1()} class="project-buttons">Pong-Game</button>
                            <button style={choiceColor2} onClick={() => show2()} class="project-buttons">Coffee-Shop</button>
                            <button style={choiceColor3}  onClick={() => show3()} class="project-buttons">Lux-House</button>
                        </div>
                    </div>
                    {/* <div style={transition1} id="test">
                        <img style={transition1} id="project1-description-img" alt="" src={pongMain}/>
                    </div> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://salam3377.github.io/project_01-Pong/"><img style={transition1} id="project1-description-img" alt="" src={pongMain}/></a>

                    <a target="_blank" rel="noopener noreferrer" href="https://coffeeshop.fly.dev/"><img style={transition2} id="project2-description-img" alt="" src={coffeeShop} /></a>

                    <img style={transition3} id="project3-description-img" alt="" src={luxHouse} />
                </div>
                
                <div id="contact-me">
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <h1 id="contact-me-h1">Contact Me</h1>
                        {/* <label class="label">Name</label> */}
                        <input required placeholder="Your name" class="input" type="text" name="user_name" />
                        {/* <label  class="label">Email</label> */}
                        <input required placeholder="Your email" class="input" type="email" name="user_email" />
                        {/* <label  class="label">Message</label> */}
                        <textarea required placeholder="Your Message..." id="text-area" name="message" />
                        <input id="button-send" type="submit" value="Send" />
                    </form>
                </div>
            </div>
            

        </>
    )
}

export default Home;