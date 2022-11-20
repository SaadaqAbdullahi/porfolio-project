import { React, useState } from 'react';
import photo from '../img/demo.png';


const Portfolio = () => {
  const [isHovering, setIsHovering] = useState([false,false,false,false,false,false]);

  const handleMouseOver = (num) => {
    const flags = [...isHovering];
    flags[num] = true;
    setIsHovering(flags);
  };

  const handleMouseOut = (num) => {
    const flags = [...isHovering];
    flags[num] = false;
    setIsHovering(flags);
  };

  return (
    <div className='Portfolio'>
    <div className='gallery'>
      <figure onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)}>
      <a href="https://google.com"><img src={photo} alt="Sample" /></a>
      {isHovering[0] && (
        <center><figcaption>Project 1 -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)}>
      <a href="https://google.com"><img src={photo} alt="Sample" /></a>
      {isHovering[1] && (
        <center><figcaption>Project 2 -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)}>
      <a href="https://google.com"><img src={photo} alt="Sample" /></a>
      {isHovering[2] && (
        <center><figcaption>Project 3 -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut(3)}>
      <a href="https://google.com"><img src={photo} alt="Sample" /></a>
      {isHovering[3] && (
        <center><figcaption>Project 4 -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(4)} onMouseOut={() => handleMouseOut(4)}>
      <a href="https://google.com"><img src={photo} alt="Sample" /></a>
      {isHovering[4] && (
        <center><figcaption>Project 5 -- Click to view!</figcaption></center>
      )}
      </figure>
      <figure onMouseOver={() => handleMouseOver(5)} onMouseOut={() => handleMouseOut(5)}>
      <a href="https://google.com"><img src={photo} alt="Sample" /></a>
      {isHovering[5] && (
        <center><figcaption>Project 6 -- Click to view!</figcaption></center>
      )}
      </figure>
    </div>
    </div>
  )
}

export default Portfolio