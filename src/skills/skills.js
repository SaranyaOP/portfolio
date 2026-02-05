import './skills.css';
//import './Suitcase.css';
import skillimg from "../images/icons/skill.png";
//import SuitCase from './SuitCase';





const Skills = () => {
    return (
        <>

            <div className="myskills" id="skills">



                <div className='skill-left'>
                    <h1 className='s-tittle'>My Suite of Skills</h1>
                   <div className='skillCard-container'>
                        <div className='skillCard animateMe green' data-animation="fadeInUpBig">
                            <h4 className='skillCard-title '>Core Web Technologies</h4>
                            <ul className='skill-list'>
                                <li className='skill-item'>HTML</li>
                                <li className='skill-item'>CSS</li>
                                <li className='skill-item'>JavaScript</li>
                                <li className='skill-item'>REST API</li>
                                <li className='skill-item'>TypeScript</li>
                                <li className='skill-item'>Cross-browser Compatibility</li>

                            </ul>
                        </div>
                     <div className='skillCard animateMe orange' data-animation="fadeInUpBig">
                            <h4 className='skillCard-title '>Frontend Frameworks & Libraries</h4>
                            <ul className='skill-list'>
                                <li className='skill-item'>React.js</li>
                                <li className='skill-item'>Next.js</li>
                                <li className='skill-item'>Redux</li>
                                <li className='skill-item'>Recoil.js</li>
                                <li className='skill-item'>Bootstrap</li>
                                <li className='skill-item'>Tailwind CSS</li>
                                <li className='skill-item'>Material UI</li>

                            </ul>
                        </div>
                         <div className='skillCard animateMe blue' data-animation="fadeInUpBig">
                            <h4 className='skillCard-title'> Developer Tools & Environment</h4>
                            <ul className='skill-list'>
                                <li className='skill-item'>Git & GitHub</li>
                                <li className='skill-item'>Chrome Developer Tools & Debugging</li>
                                <li className='skill-item'>NPM </li>
                                <li className='skill-item'>Webpack</li>
                                <li className='skill-item'>Node.js</li>
                                <li className='skill-item'>Cross-browser Compatibility</li>

                            </ul>
                        </div>
                         <div className='skillCard animateMe yellow' data-animation="fadeInUpBig">
                            <h4 className='skillCard-title'>Testing & CI/CD</h4>
                            <ul className='skill-list'>
                                <li className='skill-item'>Jest</li>
                                <li className='skill-item'>Unit Testing</li>
                                <li className='skill-item'>Test-Driven Development (TDD)</li>
                                <li className='skill-item'>CI/CD Pipeline</li>
                  

                            </ul>
                        </div>
                         <div className='skillCard animateMe red' data-animation="fadeInUpBig">
                            <h4 className='skillCard-title'>Cloud & DevOps</h4>
                            <ul className='skill-list'>
                                <li className='skill-item'>Google Cloud Platform (GCP)</li>


                            </ul>
                        </div>
                         <div className='skillCard animateMe lightblue' data-animation="fadeInUpBig">
                            <h4 className='skillCard-title'> AI & Emerging Tools</h4>
                            <ul className='skill-list'>
                                <li className='skill-item'>ChatGPT</li>
                                <li className='skill-item'>Prompt Engineering</li>


                            </ul>
                        </div>

                        {/* Add more skill cards as needed */}
                   </div>



                </div>

                <div className='skill-right'>
                    <div className='skill-Image'>
                          <div className='animateMe' data-animation="fadeInUpBig">
                        <img src={skillimg} alt="settings" className='skill-img' />
                        </div>
                    </div>


                   

                </div>
            </div>





        </>
    )
}
export default Skills;



