import './Education.css';
import './Overall.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as GradBicon} from './Images/svg/gradbrown.svg';
import {ReactComponent as GradWicon} from './Images/svg/gradwhite.svg';
function Education() {
  return (
    <div className='Overall'>
      <div className="Overall-title">
        Education
      </div>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#aa8b83', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #aa8b83' }}
    date="April 2024 - present"
    iconStyle={{ background: '#aa8b83', color: '#fff' }}
    icon = {<GradWicon />}
  >
    <h3 className="vertical-timeline-element-title"> M.S. in Graduate School of Information and Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Osaka University, Japan</h4>
    <p>
      Full Scholarship from Japanese Government (MEXT)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2020 - March 2024"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<GradBicon />}
  >
    <h3 className="vertical-timeline-element-title">B.S. in Department of Information and Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">Osaka University, Japan</h4>
    <p>
      Full Scholarship from Japanese Government (MEXT)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2019 - March 2020"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<GradBicon />}
  > 
    <h3 className="vertical-timeline-element-title">College Preparatory Student</h3>
    <h4 className="vertical-timeline-element-subtitle"> Center for Japanese Language and Culture (Osaka
 University), Japan.</h4>
    <p>
    Completed one year of intensive Japanese language and academic preparatory courses
 designed for foreign undergraduate students in Japan
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2016 - March 2019"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<GradBicon />}
  >
    <h3 className="vertical-timeline-element-title">Highschool</h3>
    <h4 className="vertical-timeline-element-subtitle">Mahidol Wittayanusorn School, Thailand.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2013 - March 2016"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<GradBicon />}
  >
    <h3 className="vertical-timeline-element-title">Middle school</h3>
    <h4 className="vertical-timeline-element-subtitle">Patumwan Demonstration School, Thailand.</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2007 - March 2013"
    contentStyle={{ background: '#fbf0e2', color: '#8f6963' }}
    iconStyle={{ background: '#fbf0e2', color: '#fff' }}
    icon = {<GradBicon />}
  >
      <h3 className="vertical-timeline-element-title">Elementary School</h3>
      <h4 className="vertical-timeline-element-subtitle">Saint Joseph Convent School, Thailand.</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  );
}

export default Education;
