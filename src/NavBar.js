import React from 'react';
import { Link } from 'react-scroll';
import pan from './Images/Symbol-Pan.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <img src={pan} className="App-logo" alt="logo" />
      <Link to="about-me" smooth={true} duration={500}>About me</Link>
      <div className="dropdown">
        <button className="dropbtn">Academic Profile
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="education" smooth={true} duration={500}>Education Details</Link>
          <Link to="research" smooth={true} duration={500}>Research</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Extracurricular Activities
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
        <Link to="work-experience" smooth={true} duration={500}>Work Experience</Link>
        <Link to="project" smooth={true} duration={500}>Project Portfolio</Link>
          <Link to="achievement" smooth={true} duration={500}>Achievements</Link>  
          {/* <Link to="ideaken" smooth={true} duration={500}>Idea-ken Club Member</Link>
          <Link to="advertising-member" smooth={true} duration={500}>OU Advertising Member</Link> */}
          {/* <Link to="volunteer" smooth={true} duration={500}>Volunteer Engagements</Link> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;