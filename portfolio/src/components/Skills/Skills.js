import { softSkills, QASkills } from '../../skillList'
import './Skills.css'

const Skills = () => {
  if (!softSkills.length) return null
  if (!QASkills.length) return null

  return (
    <div>

      <section className='section-skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <h3 class="expertise-titles">Quality Assurance</h3>
      <ul className='skills__list'>
        {QASkills.map((skill, index) => (
          <li key={index} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>

      <section className='section-skills' id='skills'>
      <h3 class="expertise-titles">Developer Skillset</h3>
        <ul className='skills__list'>
          {softSkills.map((skill, index) => (
            <li key={index} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )

}

export default Skills
