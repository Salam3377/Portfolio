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
              QA Engineer with full stack expertise, experience in black and gray box testing of web, mobile, and software applications. 
              Strong understanding of SDLC, STLC, and Agile methodologies. Skilled in bug tracking, troubleshooting, and delivering efficient, user-focused solutions. 
              Known for big-picture thinking, adaptability, and a proactive, team-oriented mindset.
            </p>
        </div>

        <div id='links-div'>
        <a id='links' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salam-abdusalamov05/" className="fa fa-linkedin-square"> </a>
        <a  id="resume-link" target="_blank" rel="noopener noreferrer"  href="https://docs.google.com/document/d/1JmeHKjA_WXPTQKiPP0t6Gz8k3kbXfr7hZnLSZzlq-Jg/edit?tab=t.0" className="fa">&#xf15c;</a>
        <a id='links' target="_blank" rel="noopener noreferrer" href="https://github.com/Salam3377" className="fa fa-github-square"> </a>
      </div>
    </div>
  )
}

export default AboutMe
