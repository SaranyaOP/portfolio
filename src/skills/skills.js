import './skills.css';
import bootstrap from "../images/skills/bootstrap.svg";
import chrome from "../images/skills/chrome.svg";
import css3 from "../images/skills/css3.svg";
import git from "../images/skills/git.svg";
import github from "../images/skills/github.svg";
import html from "../images/skills/html.svg";
import js from "../images/skills/js.svg";
import react from "../images/skills/react.svg";
import redux from "../images/skills/redux.svg";




const Skills = () =>{
    return(
        <>
       
    <div className="myskills" id="skills">  
        <h1 className='s-tittle'>My Suite of Skills</h1>
       
        <div className="skill-container">
        <div class="tech-stack">
        <div class="tech-item animateMe" data-tooltip="HTML: Structure of the web"  data-animation="fadeInUpBig">
            <img src={html} alt="HTML5" />
            <span>HTML5</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="CSS: Styling the web"  data-animation="fadeInUpBig">
            <img src={css3} alt="CSS3" />
            <span>CSS3</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="JavaScript: Dynamic content"  data-animation="fadeInUpBig">
            <img src={js} alt="JavaScript" />
            <span>JavaScript</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="React: Building UI components"  data-animation="fadeInUpBig">
            <img src={react} alt="React" />
            <span>React</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="Redux: State management library"  data-animation="fadeInUpBig">
            <img src={redux} alt="Redux" />
            <span>Redux</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="Bootstrap: Responsive design framework"  data-animation="fadeInUpBig">
            <img src={bootstrap} alt="Bootstrap" />
            <span>Bootstrap</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="Git: Version control system"  data-animation="fadeInUpBig">
            <img src={git} alt="Git" />
            <span>Git</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="GitHub: Code hosting platform"  data-animation="fadeInUpBig">
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
        </div>
        <div class="tech-item animateMe" data-tooltip="Chrome DevTools: Debugging and profiling tools"  data-animation="fadeInUpBig">
            <img src={chrome} alt="Chrome DevTools" />

            <span>Chrome DevTools</span>
        </div>
    </div>
        </div>
        
        </div>
        
        
        </>
    )
}
export default Skills;



