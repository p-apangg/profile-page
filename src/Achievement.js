import jlpt from './Achievements/jlpt.jpg';
import elementz from './Achievements/elementz.jpg';
import toeic from './Achievements/toeic.webp';
import mext from './Achievements/mext.png';
import hackathon from './Achievements/hackathon.png';
import './Achievement.css';
import './Overall.css';

function Achievement() {
  return (
    <div className="Overall">
      <div className="Overall-title">
      Achievement
      </div>

      <div className="Achievement-detail">
      <button className="Achievement-content">
      <div class="Achievement-image-wrapper">
        <img src={hackathon} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement">
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>Hackathon's Outstanding award</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2024</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span>Received the Outstanding Award for the "Smart Splitter" application with the Osaka Hackers team. The competition was hosted by Track Job, where teams were tasked with creating and presenting applications over a 2-week period.</span>
            </div>
          </div>
        </div>
        </button>
        
      <button className="Achievement-content">
      <div class="Achievement-image-wrapper">
        <img src={mext} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement">
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>MEXT Scholarship (Master's Degree)</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2024-2026</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span> Japanese Government (MEXT) Scholarship granted annually to top foreign
 students worldwide, selected based on the recommendation of each country’s
 Japanese Embassy. Full-tuition scholarship with a stipend for master studies.</span>
            </div>
          </div>
        </div>
        </button>

      <button className="Achievement-content">
      <div class="Achievement-image-wrapper">
        <img src={toeic} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement">
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>TOEIC L&R 985</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2023</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span>Received a TOEIC Listening & Reading score of 985/990, demonstrating a high level of proficiency in English.</span>
            </div>
          </div>
        </div>
        </button>
        <button className="Achievement-content">
        <div class="Achievement-image-wrapper">
        <img src={jlpt} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement">
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>JLPT N1 Passed</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2021</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span>Passed the Japanese Language Proficiency Test (JLPT) N1, which is the highest level of Japanese language proficiency certification, with a score of 108/180.</span>
            </div>
          </div>
        </div>
        </button>
        <button className="Achievement-content">
        <div class="Achievement-image-wrapper">
        <img src={jlpt} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement" >
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>JLPT N2 Passed</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2020</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span>Passed the Japanese Language Proficiency Test (JLPT) N2, which is the second highest level of Japanese language proficiency certification, with a score of 161/180.</span>
            </div>
          </div>
        </div>
        </button>
        <button className="Achievement-content">
      <div class="Achievement-image-wrapper">
        <img src={mext} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement">
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>MEXT Scholarship (Bachelor's Degree)</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2020-2024</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span> Japanese Government (MEXT) Scholarship granted annually to top foreign
 students worldwide, selected based on the recommendation of each country’s
 Japanese Embassy. Full-tuition scholarship with a stipend for bachelor studies.</span>
            </div>
          </div>
        </div>
        </button>
        <button className="Achievement-content">
        <div class="Achievement-image-wrapper">
        <img src={elementz} className="Achievement-image" alt="logo" />
        </div>
        <div className="Achievement-wording">
          <div className="info-container-achievement" >
          <div className="info-row-achievement">
              <span className="info-label-achievement">Name:</span>
              <span>Elementz Science Research Conference and Exhibition</span>
            </div>
          <div className="info-row-achievement">
              <span className="info-label-achievement">Year:</span>
              <span>2019</span>
            </div>
            <div className="info-row-achievement">
              <span className="info-label-achievement">Details:</span>
              <span>Won a gold medal awarded to top 10 teams for an outstanding highschool research project.</span>
            </div>
          </div>
        </div>
        </button>
      </div>
    </div>
  );
}

export default Achievement;
