import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollUp.css'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {
        document.body.scrollTop > 500 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility, true)
    return () => window.removeEventListener('scroll', toggleVisibility, true)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' name='top'>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null
}

export default ScrollUp