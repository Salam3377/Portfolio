import { Row, Col } from 'react-bootstrap'
import { projectList } from '../../projectList'
import ProjectContainer from './ProjectContainer'
import './projects.css'
import backgoundImg from '../../cosmic-background.jpg'

const Projects = () => {
  // if (!projectsList.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projectList.map((project, index) => (
          <ProjectContainer key={index} project={project} />
          
        ))}
      </div>
    </section>
    
  )
}

export default Projects