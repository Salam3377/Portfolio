import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import './Navbar.css'
import { ThemeContext } from '../../theme'


const Navbar = () => {

  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <div id='nav-div'>

      <ul
        className='nav__list'>
        <li className='nav__list-item'><a  className='link link--nav' href='#projects'>Projects</a></li>
        <li className='nav__list-item'><a  className='link link--nav' href='#skills'>Skills</a></li>
        <li className='nav__list-item'><a  className='link link--nav' href='#contact-me'>Contact</a></li>
      </ul>

      <button
          type='button'
          onClick={toggleTheme}
          className='mode-btn'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

    </div>
      
  )
}

export default Navbar
