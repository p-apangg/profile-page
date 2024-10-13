import './ProjectPortfolio.css';
import './Overall.css';
import React, { useRef,useState,useEffect } from 'react';
import myHomepage from './Projects/MyHomepage.png';
import wb1 from './Projects/WhiteboardScanner1.png';
import wb2 from './Projects/WhiteboardScanner2.png';
import wb3 from './Projects/WhiteboardScanner3.png';
import wb4 from './Projects/WhiteboardScanner4.png';
import chatbot from './Projects/Chatbot_pipeline.png';
const ProjectPortfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [filterMember, setFilterMember] = useState('All');
  const [filterField, setFilterField] = useState('All');
  const imageContainerRef = useRef(null);

  const handleChangeMember = (event) => {
    setFilterMember(event.target.value);
  };

  const handleChangeField = (event) => {
    setFilterField(event.target.value);
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

  const ImageCarousel = () => {
    const images = [wb1, wb2, wb3, wb4];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handlePrev} className="imageButton left"><strong>&lt;</strong></button>
        <img src={images[currentIndex]} alt={`WhiteboardScanner Result ${currentIndex + 1}`} />
        <button onClick={handleNext} className="imageButton right"><strong>&gt;</strong></button>
      </div>
    );
  };

  const myprojects = [
    { name: 'My Profile', id: 0, member:'Personal',field: ['App'] },
    { name: 'Smart Splitter', id: 1, member:'Group',field:['App','ML'] },
    { name: 'Robot: Scanbot Explorer', id: 2, member:'Personal',field:['ML'] },
    { name: 'Whiteboard Scanner', id: 3, member:'Group',field:['ML'] },
    { name: 'Intern: Bank Chatbot', id: 4, member:'Personal',field:['App','ML'] },
    { name: 'Arduino game: RunRun', id: 5, member:'Personal',field:['App'] },
  ];

  const getFilteredProjects = () => {
    let projects = myprojects;
    projects = projects.filter(project => project.member === filterMember || filterMember === 'All');
    projects = projects.filter(project => project.field.includes(filterField)|| filterField === 'All');
    projects = projects.sort((a, b) => a.id - b.id);
    return projects;
  };
  useEffect(() => {
    console.log('projectlist:', projectlist,'answer:',projectlist[0]?.id);
    setCurrentProjectIndex(projectlist[0]? projectlist[0].id : -1);
    console.log('filterMember:', filterMember, 'filterField:', filterField,currentProjectIndex);
    console.log('projectlist:', projectlist);
  }, [filterMember, filterField]);
  const projectlist = getFilteredProjects();
  return (
    <div className='Overall'>
      <div className="Overall-title">
        Project Portfolio
      </div>
      <div className="dropdown-container">
        <select id="project-filter" value={filterMember} onChange={handleChangeMember}>
          <option value="All">Group/Personal Work</option>
          <option value="Personal">Personal Work</option>
          <option value="Group">Group Work</option>
        </select>
        <select id="project-filter" style={{width:'100px'}} value={filterField} onChange={handleChangeField}>
          <option value="All">All Field</option>
          <option value="ML">ML & Data</option>
          <option value="App">App Dev</option>
        </select>
      </div>
      <div className="wrapper">
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
      </div>
      {currentProjectIndex ===-1 && (
        <div className="project">
          <div style={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          }}>
            data not found :  please select another filter
          </div>
        </div>
      )}
      {currentProjectIndex === myprojects.find(project => project.name === 'My Profile').id && (
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
            {currentProjectIndex === myprojects.find(project => project.name === 'Smart Splitter').id && (
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
              <span>React Native, Python</span>
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
      {currentProjectIndex ===myprojects.find(project => project.name === 'Intern: Bank Chatbot').id && (
        <div className="project">
          <div className="info-containerp">
            <div className="info-row">
              <span className="info-labelp">Year:</span>
              <span>2023/8-9</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Description:</span>
              <span>
              During my internship, I developed a Question-Answering (QA) system that utilizes a document database of 2374 trust funds. This system receives queries from users and selects the Top-N documents from the database. It then employs a BERT model, fine-tuned with corporate data, to highlight the most relevant answers within the selected documents.</span>
            </div>
            <div className="info-rowp">
              <span className="info-labelp">Language:</span>
              <span>Python</span>
            </div>
          </div>
          <img src={chatbot} alt={`Chatbot Pipeline`} />
        </div>
      )}
      {currentProjectIndex ===myprojects.find(project => project.name === 'Whiteboard Scanner').id && (
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
          <ImageCarousel />
        </div>
      )}
      {currentProjectIndex ===  myprojects.find(project => project.name === 'Arduino game: RunRun').id && (
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
            {currentProjectIndex ===  myprojects.find(project => project.name === 'Robot: Scanbot Explorer').id && (
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