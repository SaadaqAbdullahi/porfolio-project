import React from "react";
import myPhoto from "../img/default.jpeg";

const About = () => {
  return (
    <div className="About">
      <img className="ProfilePic" src={myPhoto} alt="Abdi Deqane" />
      <h2 className="AboutMeTitle">A little bit about me!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
        ligula vulputate, tincidunt purus sed, egestas nisl. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Aliquam mauris augue, tristique
        et nisl vitae, maximus maximus enim. Praesent eget varius augue.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
        quis urna eu quam posuere egestas id sed metus. Aliquam erat volutpat.<br/><br/>
        Proin id turpis at lectus dignissim pharetra sit amet in quam. Donec
        porttitor tristique ex, quis aliquet dui porttitor non. Etiam congue sem
        pulvinar turpis elementum, vitae fermentum erat rutrum. Donec purus
        orci, interdum pulvinar mollis at, tincidunt vitae sem. Vestibulum
        tempus nisi magna, id mollis quam feugiat in. Phasellus tristique nisl
        eget metus mattis vehicula. Quisque aliquet suscipit scelerisque. Fusce
        interdum sem ut elit hendrerit lacinia. Donec risus diam, fermentum
        vitae nisi eget, fringilla tempus tortor. Quisque sit amet urna
        condimentum, pellentesque dui a, interdum felis. Aenean fringilla tortor
        quam, ut ultricies lorem tempus ac. Proin et turpis at elit fermentum
        placerat. Proin ut elementum felis.
      </p>
    </div>
  );
};

export default About;
