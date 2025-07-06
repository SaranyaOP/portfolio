import './project.css'
import youtube from '../images/youtube.png'
import crud from '../images/crud.png'
import calculator from '../images/calculator.png'
const Project = () =>{
    return(
        <>
         <div className="myproject" id="project">
         <h1 className='p-tittle'>Projects</h1>
         <div class="wrapper">
            <div className='p-card'>
                <div className='mybox'>
                    <img src={youtube} className="p-img"/>
                    <div className='info'>
                        <h4 className='title'>Youtube clone application</h4>
                        <h6 className='sub-title'>Technical stack</h6>
                       <ul className='p-content'>
                        <li>React js</li>
                        <li>Material UI</li>
                       <li>Rapid api</li>
                       </ul>
                        <button className='p-button'>< a href="https://srmedia.netlify.app/" className='p-link'>View project</a> 
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-card'>
                <div className='mybox'>
                    <img src={calculator} className="p-img"/>
                    <div className='info'>
                        <h4 className='title'>Calculator</h4>
                        <h6 className='sub-title'>Technical stack</h6>
                       <ul className='p-content'>
                        <li>React js</li>
                        <li>Html</li>
                       <li>Bootstrap</li>
                       </ul>
                        <button className='p-button'>View projecct 
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-card'>
                <div className='mybox'>
                    <img src={crud} className="p-img"/>
                    <div className='info'>
                        <h4 className='title'>CRUD operations</h4>
                        <h6 className='sub-title'>Technical stack</h6>
                       <ul className='p-content'>
                        <li>React js</li>
                        <li>Bootstrap</li>
                       <li>CSS</li>
                       <li>Html</li>
                       </ul>
                        <button className='p-button'>View projecct 
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
     
        </>
    )
}
export default Project;