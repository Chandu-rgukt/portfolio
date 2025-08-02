import './index.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const About = () => {
  const aboutRef = useScrollAnimation()

  return (
    <div className="about slide-in-right" ref={aboutRef}>
      <div className="about-title fade-in">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src="https://i.postimg.cc/mg6mv3Dh/Whats-App-Image-2024-12-21-at-6-44-26-PM.jpg"
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am full stack web developer, graduated from RGUKT and a fresher
              looking for opprtunities open to work.Learner from Nxtwave
              technologies
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML/CSS </p> <hr style={{width: '50%'}} />
            </div>

            <div className="about-skill">
              <p>PYTHON</p> <hr style={{width: '66%'}} />
            </div>
            <div className="about-skill">
              <p>MySql</p> <hr style={{width: '70%'}} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p> <hr style={{width: '70%'}} />
            </div>
            <div className="about-skill">
              <p>React JS & Node JS</p> <hr style={{width: '72%'}} />
            </div>
            <div className="about-skill">
              <p>DSA with C++</p> <hr style={{width: '40%'}} />
            </div>
          </div>
          <div className="about-archievements">
            <div className="about-archievement">
              <h1>NPTEL</h1>
              <p>CERTIFICATIONS IN OOSD & DL</p>
            </div>
            <hr />
            <div className="about-archievement">
              <h1>1000+</h1>
              <p>coding questions in NXTwave</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
