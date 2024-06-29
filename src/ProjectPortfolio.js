import './ProjectPortfolio.css';
import './Overall.css';
import React, { useRef,useState,useEffect } from 'react';
import myHomepage from './Projects/MyHomepage.png';
import wb1 from './Projects/WhiteboardScanner1.png';
import wb2 from './Projects/WhiteboardScanner2.png';
import wb3 from './Projects/WhiteboardScanner3.png';
import wb4 from './Projects/WhiteboardScanner4.png';
const ProjectPortfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [filter, setFilter] = useState('Show all');
  const imageContainerRef = useRef(null);

  const handleChange = (event) => {
    setFilter(event.target.value);
    if(event.target.value === 'Personal Work') setCurrentProjectIndex(0);
    if(event.target.value === 'Group Work') setCurrentProjectIndex(1);
  };

  const handleClick = (index) => {
    setCurrentProjectIndex(index);
  
    if (imageContainerRef.current) {
      const selectedButton = imageContainerRef.current.children[index];
      if (selectedButton) {
        const containerWidth = imageContainerRef.current.offsetWidth;
        const buttonLeftOffset = selectedButton.offsetLeft;
        const buttonWidth = selectedButton.offsetWidth;
        const pos = buttonLeftOffset - (containerWidth / 2) + (buttonWidth / 2);
  
        imageContainerRef.current.scrollTo({ left: pos, behavior: 'smooth' });
      }
    }
  };

  // const scroll = (direction) => {
  //   if (imageContainerRef.current) {
  //     const far = imageContainerRef.current.offsetWidth / 2 * direction;
  //     const pos = imageContainerRef.current.scrollLeft + far;
  //     imageContainerRef.current.scrollTo({ left: pos, behavior: 'smooth' });
  //   }
  // };
  const projectpersonal = [
    { name: 'My Profile', id: 0 },
    { name: 'Robot: Scanbot Explorer', id: 2 },
    { name: 'Arduino game: RunRun', id: 4 },
    { name: 'Pascal Compiler', id: 5 }
  ];

  const projectgroup = [
    { name: 'Smart Splitter', id: 1 },
    { name: 'Whiteboard Scanner', id: 3 }
  ];

  const getFilteredProjects = () => {
    let projects = [];
    if (filter === 'Show all') {
      projects = [...projectpersonal, ...projectgroup];
    } else if (filter === 'Personal Work') {
      projects = projectpersonal;
    } else if (filter === 'Group Work') {
      projects = projectgroup;
    }
    return projects.sort((a, b) => a.id - b.id);
  };

  useEffect(() => {
    if (filter === 'Personal Work') {
      setCurrentProjectIndex(0);
    }
    if (filter === 'Group Work') {
      setCurrentProjectIndex(1);
    }
  }, [filter]);
  const projectlist = getFilteredProjects();
  return (
    <div className='Overall'>
      <div className="Overall-title">
        Project Portfolio
      </div>
      <div className="dropdown-container">
        <select id="project-filter" value={filter} onChange={handleChange}>
          <option value="Show all">Show all</option>
          <option value="Personal Work">Personal Work ONLY</option>
          <option value="Group Work">Group Work ONLY</option>
        </select>
      </div>
      <div className="wrapper">
        {/* <button className="prev" onClick={() => scroll(-1)}>&#10094;</button> */}
        <div className="choice-container" ref={imageContainerRef} style={{ display: 'flex', overflowX: 'scroll' }}>
          {projectlist.map((project) => (
            <button
              key={project.id}
              className="choice"
              onClick={() => handleClick(project.id)}
              style={{ backgroundColor: currentProjectIndex === project.id ? '#d98e97' : '#8f6963', color: 'white' }}
            >
              {project.name}
            </button>
          ))}
        </div>
        {/* <button className="next" onClick={() => scroll(1)}>&#10095;</button> */}
      </div>
      
      {currentProjectIndex === projectpersonal.find(project => project.name === 'My Profile').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2024</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span>"My Profile" page serves as a comprehensive portfolio showcasing my past projects. It was developed to enhance my proficiency in React JS and CSS, offering a user-friendly interface to present my work and skills.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>React JS, CSS</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Sourcecode:</span>
              <span><a href="https://github.com/p-apangg/profile-page" className="link-as-text">My Profile-Page</a></span>
            </div>
          </div>
          <img src={myHomepage} alt="My Homepage" />
        </div>
      )}
            {currentProjectIndex === projectgroup.find(project => project.name === 'Smart Splitter').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2024</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span>We participated in a 2-week hackathon where we developed an application designed to simplify cost-sharing. The application converts receipt photos into data and accurately splits item costs among users.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>React Native</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Contributors:</span>
              <span>西滉平, 吉崎響, 和坂優佑, 丸山結, Iglesius Eduardo, Buamanee Thanpimon</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Primary Duties:</span>
              <span>Designing the application UI and integrating the application with the database</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Sourcecode:</span>
              <span><a href="https://github.com/hiiragi589/hackathon2024April" className="link-as-text">Smart Splitter</a></span>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/KRgqbgKeehI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {currentProjectIndex ===projectgroup.find(project => project.name === 'Whiteboard Scanner').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2023</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span>Using the image processing knowledge, we developed a Whiteboard Scanner that detects lines from images forming a rectangle around a whiteboard, then crops and straightens it to create a perfectly clean whiteboard result.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>Python</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Contributors:</span>
              <span>松岡大聖, 中塚陽也, 中野秀紀, Buamanee Thanpimon</span>
            </div>
          </div>
          <img src={wb2} alt="WhiteboardScanner Result 2" />
          {/* <div className="image-grid">
            <img src={wb1} alt="WhiteboardScanner Result 1" />
            <img src={wb2} alt="WhiteboardScanner Result 2" />
            <img src={wb3} alt="WhiteboardScanner Result 3" />
            <img src={wb4} alt="WhiteboardScanner Result 4" />
          </div> */}
        </div>
      )}
      {currentProjectIndex ===  projectpersonal.find(project => project.name === 'Arduino game: RunRun').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2022</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span> RunRun, a runner game where user controls 2-block character across a side-scrolling landscape. Joystick UP and DOWN is used to control the jumping and crouching motion of the character to avoid obstacle. PUSH button is used to start/pause/resume the game. Using a secret code, user can enter autoplay mode where the character move automatically without hitting the obstacle or invisible mode where character becomes invulnerable to all damage. Player can enter and leave the mode by following the secret code during both gameplay and pause.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>C++</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Hardware:</span>
              <span>Arduino UNO R3 , HT16K33 8x8 Matrix , keyestudio Joystick</span>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/jWdZxvRWna4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {currentProjectIndex === projectpersonal.find(project => project.name === 'Pascal Compiler').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2022</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span> This project is part of a 3rd-year bachelor project where we developed a Pascal compiler. The compiler translates programs written in the Pascal programming language into a low-level language (CASL-II). This project helped enhance our understanding of compiler design and low-level programming concepts.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>Java</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Sourcecode:</span>
              <span><a href="https://github.com/p-apangg/Pascal-Compiler" className="link-as-text">Pascal Compiler</a></span>
            </div>
          </div>
        </div>
      )}
            {currentProjectIndex ===  projectpersonal.find(project => project.name === 'Robot: Scanbot Explorer').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2024</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span>ScanBot Explorer is a project I created as a Teaching Assistant in the 「Practical Introduction to Intelligent Robot Systems」 class. This smart robot, converted from a Roomba, serves as an example for students' final projects, showcasing advanced capabilities like scanning its surroundings, identifying objects, and navigating to targets.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>Python</span>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/7TQ09V9ZAvA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
    
  );
};

export default ProjectPortfolio;