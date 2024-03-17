import React from 'react'
import './AboutMe.css'

import { pic } from '../projectList'


function AboutMe() {

  return (
    

    <div id='main-div'>
        <h1 id="name">Salam Abdusalamov</h1>
        <img id='iconImage' src={pic} alt=''></img>
        <div id='div-about'>
            <h1 id="about-me">About Me </h1>
            <p id="about-me-text">
              I am trained as a full stack developer, 
              and provide great value with my interpersonal skills, big-picture thinking, 
              efficient solutions and positive attitude.
            </p>
        </div>

        <div id='links-div'>
        <a id='links' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salam-abdusalamov05/" className="fa fa-linkedin-square"> </a>
        <a  id="resume-link" target="_blank" rel="noopener noreferrer"  href="https://drive.google.com/file/d/1psdY34W9kxkJB3H_f7ph6PwQJ-TLOp--/view?usp=sharing" className="fa">&#xf15c;</a>
        <a id='links' target="_blank" rel="noopener noreferrer" href="https://github.com/Salam3377" className="fa fa-github-square"> </a>
      </div>
    </div>
  )
}

export default AboutMe
