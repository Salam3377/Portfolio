import React from 'react'
import './About.css'
import { iconImage } from '../projectList'

function About() {
  return (


    <div id='main-div'>
        <h1 id="name">Salam Abdusalamov</h1>
        <img id='iconImage' src={iconImage} alt=''></img>
        <div id='div-about'>
            <h1 id="about-me">About Me </h1>
            <p id="about-me-text">&nbsp;&nbsp;
                I am trained as a full stack developer, 
                and provide great value with my interpersonal skills, big-picture thinking, 
                efficient solutions and positive attitude.
            </p>
        </div>
    </div>
  )
}

export default About
