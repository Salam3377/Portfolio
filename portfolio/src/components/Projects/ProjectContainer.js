import React from 'react'
import './projectContainer.css'


const ProjectContainer = ({ project }) => (
  <div class='project'>
    <h3>{project.name}</h3>
    <img className='project-image' src={project.image} alt=''></img>
    <p class='project__description'>{project.description}</p>
    <p className='project__stack'>{project.stack}</p>
    
  
    {project.git && (
      <a
        href={project.git}
        aria-label='source code'
        className='link link--icon'
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    )}

    {project.live ? 
      
      <a
        href={project.live}
        aria-label='live preview'
        className='link link--icon'
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a>
      : <p></p>
    }
  </div>
)

export default ProjectContainer