import './Education.css';
import './Overall.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkBicon} from './Images/svg/workbrown.svg';
import {ReactComponent as WorkWicon} from './Images/svg/workwhite.svg';
function WorkExperience() {
  return (
    <div className='Overall'>
      <div className="Overall-title">
      Work Experience
      </div>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#aa8b83', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #aa8b83' }}
    date="April 2024 - present"
    iconStyle={{ background: '#aa8b83', color: '#fff' }}
    icon = {<WorkWicon />}
  >
    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Osaka University, Japan.</h4>
    <p>
      - Assisted professor in teaching "Practical Introduction to Intelligent Robot Systems" course to first-year students
      <br/>- Prepared practical session robots by disassembling cleaning robots and
 integrating Jetson devices to create programmable robots
      <br/>- Provided Q&A support during and after class
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#aa8b83', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #aa8b83' }}
    date="February 2023 - present"
    iconStyle={{ background: '#aa8b83', color: '#fff' }}
    icon = {<WorkWicon />}
  >
    <h3 className="vertical-timeline-element-title">Part-time Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"> C Channel Corporation. Tokyo, Japan.</h4>
    <p>
    - Developed functionalities and user interfaces (UI) for the internal tool’s
 website
 <br/>- Brainstormed innovative ideas to enhance website usability
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2022 - September 2022"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<WorkBicon />}
  >
    <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Siam Commercial Bank. Bangkok ,Thailand.</h4>
    <p>
    - Developed document retrieval and Answer extraction model for mutual
 funds QA system
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2021 - July 2022"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<WorkBicon />}
  > 
    <h3 className="vertical-timeline-element-title"> Part-time Japanese-Thai Translator</h3>
    <h4 className="vertical-timeline-element-subtitle">Mori Kosan Co., Ltd. Osaka, Japan.</h4>
    <p>
    - Translated articles and publications from Japanese to Thai
    <br/>- Managed events for international students in Japan
    <br/>- Wrote content about Japan and studying abroad
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May 2020 - March 2022"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<WorkBicon />}
  >
    <h3 className="vertical-timeline-element-title"> Part-time Content Creator</h3>
    <h4 className="vertical-timeline-element-subtitle"> Kantana Japan Co., Ltd. Tokyo, Japan.</h4>
    <p>
    - Developed content about life in Osaka, covering topics such as food,
 travel destinations, and lifestyle
 <br/>- Composed reports in three languages: Thai, Japanese, and English, and
 published them on the company’s social media platforms
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  );
}

export default WorkExperience;
