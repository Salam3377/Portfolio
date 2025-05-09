import { projectList } from '../../projectList'
import ProjectContainer from './ProjectContainer'
import './projects.css'


const Projects = () => {
 
  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Software Projects</h2>

      <div className='projects__grid'>
        {projectList.map((project, index) => (
          <ProjectContainer key={index} project={project} />
          
        ))}
      </div>
    </section>
    
  )
}

export default Projects