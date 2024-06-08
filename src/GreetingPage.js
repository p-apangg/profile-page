import logo from './Images/GreetingPage.jpg';
import './GreetingPage.css';

function GreetingPage() {
  return (
    <div className="Greeting">
      <header className="Greeting-header">
        <img src={logo} className="circle-photo" alt="logo" />
        <div className="Greeting-wording">
        <p>
        Thanpimon Buamanee (Papang)
        </p>
        <div>
        Hello, I am Papang! I'm a first-year master's student pursuing Computer Science at Osaka University in Japan. 
        Originally from Thailand, I have a keen interest in machine learning and application development. 
        I'm passionate about developing innovative AI solutions and enhancing their usability through thoughtful design.
        </div>
        <a href="mailto:thanpimon.bua@gmail.com" class="email-button">Contact Me!</a>
        </div>
      </header>
    </div>
  );
}

export default GreetingPage;
