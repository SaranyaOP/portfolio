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
          
            
                <div class="mycard">
                    <div class="box">
                        <img class="pic-1" src={youtube}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <ul class="icon">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mycard">
                    <div class="box">
                        <img class="pic-1" src={calculator}/>
                        <div class="box-content">
                            <h3 class="title">Kristiana</h3>
                            <ul class="icon">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mycard">
                    <div class="box">
                        <img class="pic-1" src={crud}/>
                        <div class="box-content">
                            <h3 class="title">Kristiana</h3>
                            <ul class="icon">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mycard">
                    <div class="box">
                        <img class="pic-1" src={crud}/>
                        <div class="box-content">
                            <h3 class="title">Kristiana</h3>
                            <ul class="icon">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        </>
    )
}
export default Project;