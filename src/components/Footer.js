import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='Footer'>
    <p>Copyright&copy;2022&ensp;&ensp;</p>
      <a href="https://google.com"><FaGithub size={25} /></a>&ensp;
      <a href="https://google.com"><FaLinkedin size={25} /></a>
    </div>
  )
}

export default Footer