import React from 'react'
import { Card } from 'react-bootstrap'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'
import './projectContainer.css'


const ProjectContainer = ({ project }) => (
  <div class='project'>
    <h3>{project.name}</h3>
    <img className='project-image' src={project.image}></img>
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

    {project.live && (
      <a
        href={project.live}
        aria-label='live preview'
        className='link link--icon'
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </a>
    )}
  </div>
  // <Card className='my-3 p-3 rounded' style={{width: '2rem'}}>
  //   <Card.Img  src={project.image} style={{width: '18rem'}} />
  //   <Card.Body>
  //     <Card.Title as='div'>
  //       <strong>{project.name}</strong>
  //     </Card.Title>
  //   </Card.Body>
  // </Card>
)

export default ProjectContainer