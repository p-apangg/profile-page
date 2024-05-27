import background from './Images/Symbol/background.png';
import contact from './Images/Symbol/contact.png';
import interest from './Images/Symbol/interest.png';
import skill from './Images/Symbol/skill.png';

import './AboutMe.css';

function AboutMe() {
  return (
    <div className="Aboutme">
      <div className="Aboutme-title">
        About me!!
      </div>

      <div className="Aboutme-detail">

        <button className="Aboutme-content">
        <img src={background} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
          <p>BACKGROUND</p>
          <div>Basic details about me</div>
        </div>
        </button>

        <button className="Aboutme-content">
        <img src={interest} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
        <p>PERSONAL INTEREST</p>
        <div >What I like!!</div>  
        </div>
        </button>

        <button className="Aboutme-content">
        <img src={skill} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
        <p>SKILLS & EXPERTISE</p>
        <div >Language, Programming skills, etc.</div>  
        </div>
        </button>

        <button className="Aboutme-content">
        <img src={contact} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
        <p>CONTACT INFORMATION</p>
        <div >Let's get in touch</div>  
        </div>
        </button>
      </div>

      <div className="speech-bubble"> 
      </div>
    </div>
  );
}

export default AboutMe;
