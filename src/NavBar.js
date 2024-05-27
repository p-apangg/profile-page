import pan from './Images/Symbol-Pan.png';
import './NavBar.css';

function NavBar() {
  return (
<div class="navbar">
  <img src={pan} className="App-logo" alt="logo" />
  <a href="#about-me">About me</a>
  <div class="dropdown">
    <button class="dropbtn">Academic Profile
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#education">Education Details</a>
      <a href="#research">Research</a>
      <a href="#project">Project Portfolio</a>
      <a href="#collaborative-project">Collaborative projects</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Extracurricular Activities
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#ideaken">Idea-ken Club Member</a>
      <a href="#advertising-member">OU Advertising Member</a>
      <a href="#volunteer">Volunteer Engagements</a>
    </div>
  </div>
</div>
  );
}

export default NavBar;