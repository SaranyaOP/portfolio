import './project.css'
import youtube from '../images/youtube.png'
import crud from '../images/crud.png'
import calculator from '../images/calculator.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Project = () =>{
    const[projectDetails,setDetails] = useState([])
    const[msg,setMsg] = useState('')
    const[btn_value,setBtn_value] = useState('Show more projects')
    const[status,setStatus] = useState(true)
    const getProjectDetails = () =>{
        axios.get("http://localhost:1234/project")
        .then(response=>{
          setDetails(response.data)
          console.log(response.data)
        })
      }
      useEffect(()=>{
        getProjectDetails()
      },[1])

      const showMoremsg = () =>{
          
            if(status== true){
                setMsg('Coming soon.. I am working on it')
                setStatus(false)
                setBtn_value('View less')
            }
            else if(status ==false){
                setMsg('')
               setStatus(true)
               setBtn_value('Show more projects')
            }
      }
    return(
        <>
         <div className="myproject" id="project">
         <h1 className='p-tittle'>Projects</h1>
            <div className='card-container ' >
                {/* <div className='p-card shadow animateMe' data-animation="fadeInUpBig">
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon" aria-hidden="true"></i>
                   
                    </div>
                    <div className='hover-div'>
                   <p className='hover-p'>View project</p> 
                    
                    <i className="fa fa-external-link hover-icon" aria-hidden="true"></i>
                    <i className="fa fa-github hover-icon" aria-hidden="true"></i>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>Youtube clone application</h5>
                        <p className='card-para'>
                            Youtube application recreate by using react js 
                             material ui and rapid api. It almost similar to youtube appilication,
                            we can play videos, search videos and view channel and video details.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Material ui</span>
                        <span className='stcak-item'>Rapid api</span>
                       </div>
                    </div>
                    </div> */}

                <div className='p-card shadow animateMe' data-animation="fadeInUpBig">
               
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon " aria-hidden="true"></i>
                    </div>
                    <div className='hover-div'>
                   <p className='hover-p'>View project</p> 
                    
                   <a href='https://srmedia.netlify.app' target="_blank"><i className="fa fa-external-link hover-icon" aria-hidden="true">
                        
                    </i></a>
                    <a href='https://github.com/SaranyaOP/youtube_clone_app' target="_blank">
                         <i className="fa fa-github hover-icon" aria-hidden="true"></i>
                    </a>
                    </div>
                    <div className='card-content'>
                        <div className='card-desc'>
                        <h5 className='card-title'>Youtube clone application</h5>
                        <p className='card-para'>
                           Fetching Youtube data from rapid api and display using material ui designed components
                        </p>
                        </div>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Material ui</span>
                        <span className='stcak-item'>Rapid api</span>
                       </div>
                    </div>
                  </div>  
                  <div className='p-card shadow animateMe' data-animation="fadeInUpBig">
               
               <div className='image-section'>
               <i className="fa fa-folder-open p-icon " aria-hidden="true"></i>
               </div>
               <div className='hover-div'>
              <p className='hover-p'>View project</p> 
               
              <a href='' target="_blank">
                <i className="fa fa-external-link hover-icon" aria-hidden="true"></i></a>
                <a href='https://github.com/SaranyaOP/CRUD-Operations' target="_blank">
                    <i className="fa fa-github hover-icon" aria-hidden="true"></i></a>
               </div>
               <div className='card-content'>
                  <div className='card-desc'>
                  <h5 className='card-title'>CRUD Operations</h5>
                   <p className='card-para'>
                       It's a system that  contains CRUD operations such  as login, register, update and delete.
                   </p>
                  </div>
                  <div className='tec-stack'>
                   <span className='stcak-item'>React</span>
                   <span className='stcak-item'>Bootstrap</span>
                   <span className='stcak-item'>JSON server</span>
                  </div>
               </div>
             </div>  
             <div className='p-card shadow animateMe' data-animation="fadeInUpBig">
               
               <div className='image-section'>
               <i className="fa fa-folder-open p-icon " aria-hidden="true"></i>
               </div>
               <div className='hover-div'>
              <p className='hover-p'>View project</p> 
               
              <a href='https://srcalc.netlify.app/' target="_blank">
                 <i className="fa fa-external-link hover-icon" aria-hidden="true"></i></a>
                 <a href='https://github.com/SaranyaOP/Calculator' target="_blank">
                     <i className="fa fa-github hover-icon" aria-hidden="true"></i></a>
               </div>
               <div className='card-content'>
                   <div className='card-desc'>
                   <h5 className='card-title'>Calculator</h5>
                   <p className='card-para'>
                       It's simple calculator for arithmatic opertions  using react functional components and bootstrap
                   </p>
                   </div>
                  <div className='tec-stack'>
                   <span className='stcak-item'>React</span>
                   <span className='stcak-item'>Bootstrap</span>
                  
                  </div>
               </div>
             </div>  
               
             

              

                  
                </div>
                <div className='show-more animateMe' data-animation="fadeInUpBig">
                    <button className='btn-show-more shadow' onClick={showMoremsg}>{btn_value}</button>
                    <p className='showmore-para'>{msg}</p>
                </div>
                {/* <div className='card-container animateMe' data-animation="fadeInUpBig">
                <div className='p-card shadow '>
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon" aria-hidden="true"></i>
                    <button className='view-button'>View project
                    <i className="fa fa-external-link m-1" aria-hidden="true"></i></button>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>Youtube clone application</h5>
                        <p className='card-para'>
                            Youtube application recreate by using react js 
                             material ui and rapid api. It almost similar to youtube appilication,
                            we can play videos, search videos and view channel and video details.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Material ui</span>
                        <span className='stcak-item'>Rapid api</span>
                       </div>
                    </div>
                    </div>
                
              
                <div className='p-card shadow'>
               
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon " aria-hidden="true"></i>
                     <button className='view-button'>View project
                     <i className="fa fa-external-link m-1" aria-hidden="true"></i></button>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>CRUD Operations</h5>
                        <p className='card-para'>
                            It's a system that  contains CRUD operations such  as login, register, update and delete.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Bootstrap</span>
                        <span className='stcak-item'>JSON server</span>
                       </div>
                    </div>
                  </div>  
               
               
                <div className='p-card shadow'>
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon" aria-hidden="true"></i>
                    <button className='view-button'>View project
                     <i className="fa fa-external-link m-1" aria-hidden="true"></i></button>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>Calculator</h5>
                        <p className='card-para'>
                        It is a simple calculator using React js, html, bootstrap and CSS.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Bootstrap</span>
                       
                       </div>
                    </div>
                   </div>
                </div> */}
                 {/* <div className='card-container animateMe' data-animation="fadeInUpBig">
                <div className='p-card shadow '>
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon" aria-hidden="true"></i>
                   
                    </div>
                    <div className='hover-div'>
                   <p className='hover-p'>View project</p> 
                    
                    <i className="fa fa-external-link hover-icon" aria-hidden="true"></i>
                    <i className="fa fa-github hover-icon" aria-hidden="true"></i>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>Youtube clone application</h5>
                        <p className='card-para'>
                            Youtube application recreate by using react js 
                             material ui and rapid api. It almost similar to youtube appilication,
                            we can play videos, search videos and view channel and video details.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Material ui</span>
                        <span className='stcak-item'>Rapid api</span>
                       </div>
                    </div>
                    </div>
                
              
                <div className='p-card shadow'>
               
                    <div className='image-section'>
                    <i className="fa fa-folder-open p-icon " aria-hidden="true"></i>
                    </div>
                    <div className='hover-div'>
                   <p className='hover-p'>View project</p> 
                    
                    <i className="fa fa-external-link hover-icon" aria-hidden="true"></i>
                    <i className="fa fa-github hover-icon" aria-hidden="true"></i>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>CRUD Operations</h5>
                        <p className='card-para'>
                            It's a system that  contains CRUD operations such  as login, register, update and delete.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Bootstrap</span>
                        <span className='stcak-item'>JSON server</span>
                       </div>
                    </div>
                  </div>  
               
               
                <div className='p-card shadow'>
                    <div className='image-section'>
                    <i class="fa fa-folder-open p-icon" aria-hidden="true"></i>
                    </div>
                   
                    <div className='hover-div'>
                   <p className='hover-p'>View project</p> 
                    <i className="fa fa-external-link hover-icon" aria-hidden="true"></i>
                    <i className="fa fa-github hover-icon" aria-hidden="true"></i>
                    </div>
                    <div className='card-content'>
                        <h5 className='card-title'>Calculator</h5>
                        <p className='card-para'>
                        It is a simple calculator using React js, html, bootstrap and CSS.
                        </p>
                       <div className='tec-stack'>
                        <span className='stcak-item'>React</span>
                        <span className='stcak-item'>Bootstrap</span>
                       
                       </div>
                    </div>
                   </div>
                </div>
             */}
        </div>
     
        </>
    )
}
export default Project;