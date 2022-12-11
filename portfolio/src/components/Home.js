import React, { useState, useRef } from "react";
import '../components/home.css'
import pongMain from '../images/pong-main-pic.PNG'
import coffeeShop from '../images/coffee-shop.PNG'
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
     
    const transition1 = showProject1 ? {width: '27vw', zIndex: '2'} : {width: '0vw'} ;
    const transition2 = showProject2 ? {width: '27vw', zIndex: '2'} : {width: '0vw'} ;
    const transition3 = showProject3 ? {width: '27vw', zIndex: '2'} : {width: '0vw'} ;

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
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salam-abdusalamov05/" id="linkedin" class="fa fa-linkedin-square"><i></i></a>
                   <a target="_blank" rel="noopener noreferrer" href="https://github.com/Salam3377" id="github" class="fa fa-github-square" ><i></i></a>
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

                    <img style={transition1} id="project1-description-img" alt="" src={pongMain}/>

                    <img style={transition2} id="project2-description-img" alt="" src={coffeeShop} />

                    <img style={transition3} id="project3-description-img" alt="" />
                </div>
                
                <div id="contact-me">
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <h1 id="contact-me-h1">Contact Me</h1>
                        <label class="label">Name</label>
                        <input required placeholder="Your name" class="input" type="text" name="user_name" />
                        <label  class="label">Email</label>
                        <input required placeholder="Your email" class="input" type="email" name="user_email" />
                        <label  class="label">Message</label>
                        <textarea required placeholder="Your Message..." id="text-area" name="message" />
                        <input id="button-send" type="submit" value="Send" />
                    </form>
                </div>
            </div>
            

        </>
    )
}

export default Home;