import './ProjectPortfolio.css';
import './Overall.css';
import React, { useRef,useState } from 'react';

const ProjectPortfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const handleClick = (index) => {
    setCurrentImageIndex(index);

    if (imageContainerRef.current) {
      const selectedButton = imageContainerRef.current.children[index];
      const containerWidth = imageContainerRef.current.offsetWidth;
      const buttonLeftOffset = selectedButton.offsetLeft;
      const buttonWidth = selectedButton.offsetWidth;
      const pos = buttonLeftOffset - (containerWidth / 2) + (buttonWidth / 2);

      imageContainerRef.current.scrollTo({ left: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className='Overall'>
      <div className="Overall-title">
        Project Portfolio
      </div>
      <div className="wrapper">
        <div className="image-container" ref={imageContainerRef} style={{ display: 'flex', overflowX: 'scroll' }}>
          {['My Homepage', 'Smart Splitter', 'Whiteboard Scanner', 'Pascal Compiler', 'Arduino game: RunRun'].map((label, index) => (
            <button
              key={index}
              className="image"
              onClick={() => handleClick(index)}
              style={{ backgroundColor: currentImageIndex === index ? '#d98e97' : '#8f6963', color: 'white' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;