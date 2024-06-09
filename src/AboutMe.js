import background from './Images/Symbol/background.png';
import contact from './Images/Symbol/contact.png';
import interest from './Images/Symbol/interest.png';
import skill from './Images/Symbol/skill.png';
import icon_thai from './Images/Symbol/thailand.png';
import icon_linkedin from './Images/Symbol/linkedin.png';
import icon_gmail from './Images/Symbol/gmail.png';
import icon_fb from './Images/Symbol/facebook.png';
import icon_ig from './Images/Symbol/instagram.png';
import './AboutMe.css';
import './Overall.css';

function AboutMe() {
  return (
    <div className="Overall">
      <div className="Overall-title">
        About me!!
      </div>

      <div className="Aboutme-detail">

        <button className="Aboutme-content">
        <img src={background} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
          <p>BACKGROUND</p>
          <div className="info-container" style={{ height: '100px'}}>
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span>Thanpimon Buamanee</span>
            </div>
            <div className="info-row">
              <span className="info-label">Nickname:</span>
              <span>Papang</span>
            </div>
            <div className="info-row">
              <span className="info-label">Nationality:</span>
              <span>Thai <img src={icon_thai} alt="logo" style={{ width: '15px', height: 'auto', verticalAlign: 'top' }} /></span>
            </div>
            <div className="info-row">
              <span className="info-label">Age:</span>
              <span>23</span>
            </div>
          </div>
        </div>
        </button>
        
        <button className="Aboutme-content">
        <img src={interest} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
        <p>PERSONAL INTEREST</p>
        <div className="info-container" style={{ height: '100px'}}>
            <div className="info-row">
              <span className="info-label">Hobby:</span>
              <span>Reading, Drawing, Running</span>
            </div>
            <div className="info-row">
              <span className="info-label">Sport:</span>
              <span>Table Tennis, Tennis</span>
            </div>
            <div className="info-row">
              <span className="info-label">Music:</span>
              <span>J-Pop</span>
            </div>
          </div>
        </div>
        </button>

        <button className="Aboutme-content">
        <img src={skill} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
        <p>SKILLS & EXPERTISE</p>
        <div className="info-container" style={{ height: '100px'}}>
            <div className="info-row">
              <span className="info-label">Language: </span>
              <span>Thai (Native)
              <br/>English (Fluent)
              <br/>Japanese (Business)</span>
            </div>
            <div className="info-row">
              <span className="info-label">Programming: </span>
              <span>Python, C, Java</span>
            </div>
          </div>
        </div>
        </button>

        <button className="Aboutme-content">
        <img src={contact} className="Aboutme-image" alt="logo" />
        <div className="Aboutme-wording">
        <p>CONTACT INFORMATION</p>
        <div className="info-container" style={{ height: '100px'}}>
            <div className="info-row">
              <span className="info-label" style={{ width: '50px'}}><img src={icon_gmail} alt="logo" style={{ width: '15px', height: 'auto', verticalAlign: 'top' }}/></span>
              <span><a href="mailto:thanpimon.bua@gmail.com" className="link-as-text">thanpimon.bua@gmail.com</a></span>
            </div>
            <div className="info-row">
              <span className="info-label" style={{ width: '50px'}}><img src={icon_linkedin} alt="logo" style={{ width: '15px', height: 'auto', verticalAlign: 'top' }}/></span>
              <span><a href="https://www.linkedin.com/in/thanpimon-buamanee-251278231/?original_referer=" className="link-as-text">Thanpimon Buamanee</a></span>
            </div>
            <div className="info-row">
              <span className="info-label" style={{ width: '50px'}}><img src={icon_ig} alt="logo" style={{ width: '15px', height: 'auto', verticalAlign: 'top' }}/></span>
              <span><a href="https://www.instagram.com/p_apangg/" className="link-as-text">p-apangg</a></span>
            </div>
            <div className="info-row">
              <span className="info-label" style={{ width: '50px'}}><img src={icon_fb} alt="logo" style={{ width: '15px', height: 'auto', verticalAlign: 'top' }}/></span>
              <span><a href="https://www.facebook.com/papang.buamanee/" className="link-as-text">Papang Buamanee</a></span>
            </div>
          </div>
        </div>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
