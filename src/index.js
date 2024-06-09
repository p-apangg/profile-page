import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GreetingPage from './GreetingPage';
import NavBar from './NavBar';
import reportWebVitals from './reportWebVitals';
import AboutMe from './AboutMe';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Research from './Research';
import ProjectPortfolio from './ProjectPortfolio';
import ScrollToTop from "react-scroll-to-top";
import Achievement from './Achievement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <GreetingPage/>
    <div id="about-me"><AboutMe/></div>
    <div id="education"><Education/></div>
    <div id="work-experience"><WorkExperience/></div>
    <div id="research"><Research/></div>
    <div id="project"><ProjectPortfolio/></div>
    <div id="achievement"><Achievement/></div>
    <ScrollToTop smooth/>
  </React.StrictMode>
);

reportWebVitals();
