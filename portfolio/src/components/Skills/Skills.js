import { skills } from '../../skillList'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section-skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill, index) => (
          <li key={index} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <div id='links-div'>
        <a id='links' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salam-abdusalamov05/" class="fa fa-linkedin-square"></a>
        <a  id="resume-link" target="_blank" rel="noopener noreferrer"  href="https://docs.google.com/document/d/18J387r9X9s5Wh9QXe5aYxk6RaRDARTvFGfqLFC_E0jk/edit?usp=sharing" class="fa">&#xf15c;</a>
        <a id='links' target="_blank" rel="noopener noreferrer" href="https://github.com/Salam3377" class="fa fa-github-square"></a>
      </div>
    </section>
  )
}

export default Skills
