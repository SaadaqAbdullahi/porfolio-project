import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const active = ({isActive}) => {
    return {color: isActive ? 'white': 'black'}
  };
  return (
    <ul className='Nav'>
      <li><NavLink to="/" style={active}>About Me</NavLink></li>
      <li><NavLink to="/portfolio" style={active}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" style={active}>Contact</NavLink></li>
      <li><NavLink to="/resume" style={active}>Resume</NavLink></li>
    </ul>
  )
}

export default Navigation