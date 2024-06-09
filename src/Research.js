import './Research.css';
import './Overall.css';
import 'react-vertical-timeline-component/style.min.css';
function Research() {
  return (
    <div className='Overall'>
      <div className="Overall-title">
      Research
      </div>
      <div className="Research-content">
        <div className="Research-title">
      Bi-ACT: Bilateral Control-Based Imitation Learning Via Action Chunking With Transformer
      </div>
        <div className="Research-video">
          <iframe
            src="https://www.youtube.com/embed/byhMJ60FL8Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="Research-abstract">
          <h3>Abstract</h3>
          <p>
          Autonomous manipulation in robot arms is a complex and evolving field of study in robotics. This paper proposes work stands at the intersection of two innovative approaches in the field of robotics and machine learning. Inspired by the Action Chunking with Transformer (ACT) model, which employs joint location and image data to predict future movements, our work integrates principles of Bilateral Control-Based Imitation Learning to enhance robotic control. Our objective is to synergize these techniques, thereby creating a more robust and efficient control mechanism. In our approach, the data collected from the environment are images from the gripper and overhead cameras, along with the joint angles, angular velocities, and forces of the follower robot using bilateral control. The model is designed to predict the subsequent steps for the joint angles, angular velocities, and forces of the leader robot. This predictive capability is crucial for implementing effective bilateral control in the follower robot, allowing for more nuanced and responsive maneuvering.
          </p>
        </div>
        <div className="button-container">
        <a href="/Files/ResearchPaper_Bi-ACT.pdf" download className="research-button">Download Paper</a>
          <a href="https://mertcookimg.github.io/bi-act/" className="research-button">Read More &#10095;</a>
        </div>
        <div className="Research-proceedings">
            <h3>Conference Proceedings</h3>
            <p>
              (1.) <span class="highlight">T. Buamanee</span>, M. Kobayashi, Y. Uranishi, and H. Takemura, in 2024 IEEE ICRA Workshop, A Future Roadmap for Sensorimotor Skill Learning for Robot Manipulation <a href="https://icra-manipulation-skill.github.io/" target="_blank" rel="noopener noreferrer">https://icra-manipulation-skill.github.io/</a>.
              <br/>(2.) <span class="highlight">T. Buamanee</span>, M. Kobayashi, Y. Uranishi, and H. Takemura, “Bi-ACT: Bilateral Control-Based Imitation Learning via Action Chunking with Transformer,” in IEEE/ASME International Conference on Advanced Intelligent Mechatronics, (Jul. 15–19, 2024), Boston, USA.
              <br/>(3.) M. Kobayashi, <span class="highlight">T. Buamanee</span>, Y. Uranishi, and H. Takemura, “Research on Method for Generating Robot Arm Movements in Imitation Learning Based on Bilateral Control,” in the Papers of Technical Meeting on Industrial Instrumentation and Control, IEE Japan, vol. IIC-23033, pp. 35–38, (In Japanese)
            </p>
        </div>
      </div>
    </div>
  );
}
export default Research;
