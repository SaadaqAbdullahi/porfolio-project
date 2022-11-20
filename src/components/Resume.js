import React from 'react'
import download from '../img/download.jpeg';
import resume from '../documents/Fake-Resume.pdf';

const Resume = () => {
  return (
    <div className='Resume'>
    <div className='FieldSet'>
      <h2><span>Front-End Proficiencies</span></h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>React.js</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
      </ul>
      </div>
      <br/>
      <div className='FieldSet'>
      <h2><span>Back-End Proficiencies</span></h2>
      <ul>
        <li>REST</li>
        <li>APIs</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB & Mongoose</li>
        <li>GraphSQL</li>
      </ul>
      </div><br/>
      <p>Click below to download my resume!</p>
      <a href={resume} download>
        <img className='Download' src={download} alt='download icon' />
      </a>
    </div>
  )
}

export default Resume