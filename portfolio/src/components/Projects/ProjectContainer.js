import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'
import './projectContainer.css'


const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <a  target="_blank" rel="noopener noreferrer" href={project.live ? project.live : isDisabled}><img className='project-image' src={project.image} alt=''></img></a>
    <p className='project__description'>{project.description}</p>
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
      
      <strong style={{fontSize: '17px'}}><a
        href={project.live}
        aria-label='live preview'
        className='link link--icon'
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a></strong>
      : <p></p>
    }
  </div>
)

export default ProjectContainer