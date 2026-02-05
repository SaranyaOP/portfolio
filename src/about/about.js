import "./about.css";
import metwo from "../images/metwo.png";
import bg from "../images/a-bg.png";
import Saranya_resume from "../images/Saranya.OP-Resume-2026.pdf";
const About = () => {
  function handleDownload() {
    window.open(Saranya_resume);
  }

  return (
    <>
      <div className="myabout" id="about">
        <div className="left ">
          <div className="myimage">
            <div className="animateMe" data-animation="fadeInUpBig">
              <img src={metwo} alt="" className="a-img" />
            </div>
          </div>
        </div>
        <div className="right ">
          <h1 className="a-tittle animateMe" data-animation="fadeInUpBig">
            Who I'm?
          </h1>
          <div className="a-content">
            <div className="myparagraph">
              <p className="animateMe" data-animation="fadeInUpBig">
                I am a Frontend Engineer with a solid foundation of 2.5 years in
                the React ecosystem, where I have dedicated myself to crafting
                high-quality, performant, and scalable web experiences. My
                career is built on a 'clean code' philosophy and a deep
                enthusiasm for staying at the cutting edge of technical
                innovation.
              </p>
              <h5 className=" about-subtittle animateMe" data-animation="fadeInUpBig">
                The Technical Foundation
              </h5>
              <p className="animateMe" data-animation="fadeInUpBig">
                My core expertise lies in React.js and TypeScript, focusing on
                building seamless user interfaces that prioritize both speed and
                accessibility. I am currently expanding this foundation into
                Next.js and Fullstack Development, bridging the gap between
                front-end aesthetics and robust back-end architecture.
              </p>
              <h5 className=" about-subtittle animateMe" data-animation="fadeInUpBig">
                The Vision & Passion
              </h5>
              <p className="animateMe" data-animation="fadeInUpBig">
                I am driven by the belief that the future of software lies in
                Intelligence. My passion is exploring how Generative AI and LLM
                integration can move beyond simple chat interfaces to become a
                core part of the application logic. I am fascinated by the
                potential of AI Agents to automate complex workflows and
                redefine user interaction.
              </p>
              <h5 className=" about-subtittle animateMe" data-animation="fadeInUpBig">
                The Future Goal
              </h5>
              <p className="animateMe" data-animation="fadeInUpBig">
                My roadmap is clear: to evolve into an AI-First Fullstack
                Engineer. I am committed to mastering the MERN stack and modern
                AI deployment to build the next generation of autonomous web
                applications—software that doesn't just respond to users, but
                understands and anticipates their needs.
              </p>

              <div className="buttondiv">
                <div className="animateMe" data-animation="fadeInUpBig">
                  <button className="resume-btn" onClick={handleDownload}>
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
