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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <GreetingPage/>
    <AboutMe/>
    <Education/>
    <WorkExperience/>
    <Research/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
