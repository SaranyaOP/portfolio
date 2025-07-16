import './about.css'
import metwo from "../images/metwo.png";
import bg from "../images/a-bg.png";
import Saranya_resume from "../images/Saranya.pdf";
const About = () =>{
    function handleDownload() {
        window.open(Saranya_resume);
       
      }
      
    return(
        <>
        <div className="myabout" id="about">
            
                <div className="left ">
                    <div className='myimage'>
                       <div className='animateMe' data-animation="fadeInUpBig">
                       <img src={metwo} alt="" className="a-img"/>
                       </div>
                    </div>
                </div>
                <div className="right ">
                    <h1 className='a-tittle animateMe' data-animation="fadeInUpBig">Who I'm?</h1>
                    <div className='a-content'>
                       <div className='myparagraph'>
                       <p className='animateMe' data-animation="fadeInUpBig">
                       I am a dedicated Front-End Developer with 2 years of experience, currently contributing my skills at LG Soft.
                        My journey in web development has fueled my passion for creating dynamic, user-friendly applications that enhance the online experience.
                        </p>
                        <p className='animateMe' data-animation="fadeInUpBig">
                        I specialize in HTML, CSS, and JavaScript, leveraging frameworks like React  to build responsive and visually appealing interfaces.
                         My strong problem-solving skills enable me to tackle challenges head-on, whether it’s optimizing performance, debugging issues, or collaborating with cross-functional teams to bring innovative ideas to life.
                           
                        </p>
                        <p className='animateMe' data-animation="fadeInUpBig">
                        As I look to the future, I am eager to expand my skill set and transition into a Full-Stack Developer role.
                         I am particularly interested in mastering back-end technologies such as Node.js and database management. 
                         My goal is to develop comprehensive web solutions that seamlessly integrate front-end and back-end functionality.
                        </p>
                        <p className='animateMe' data-animation="fadeInUpBig">
                        I thrive in dynamic environments where collaboration and creativity are valued, and I am excited about the opportunities ahead to make a meaningful impact in the tech industry.
 
                        </p>
                
                        <div className='buttondiv'>
                        <div className='animateMe' data-animation="fadeInUpBig">
                        <button className='resume-btn' onClick={handleDownload}>Download Resume</button>
                       
                    </div>
                        </div>
                     
                       </div>
                    </div>

                    
                    

                </div>
        </div>
        </>
    )
}
export default About;