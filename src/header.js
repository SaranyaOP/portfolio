
// import { Row, Col } from "reactstrap";
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Saranya_resume from "./images/SaranyaOP.pdf";
const Header = () =>{
  const windowRefresh = () =>{
    window.location.reload();
  }
   return(
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#home" onClick={windowRefresh}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about" >About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills">Skills</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#project">Projects</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact Me</a>
      </li> */}
   
      {/* <li class="nav-item">
      <a
                  //this will save the file as "your_cv.pdf"
                  download="Saranya OP resume"
                  //put the path of your pdf file
                  href="resume.pdf"
                  //reactstrap classes. add green button
                  className="btn btn-info"
                >Download Resume</a>
      </li> */}
      {/* <li class="nav-item">
        
        <a class="nav-link" href={myresume}><button className='btn btn-primary'>Download Resume</button></a>
      </li> */}
     
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
    <div className='tt'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item info-icon'><a href="https://www.linkedin.com/in/saranyaop" className='c-link'>
          <i className="fa fa-linkedin-square " aria-hidden="true"></i></a></li>
          <li className='nav-item info-icon'><a href="https://github.com/SaranyaOP" className='c-link'>
          <i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li className='nav-item info-icon'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=saranyaop98@gmail.com" target="_blank" className='c-link'><i class="fa fa-envelope" aria-hidden="true"></i>
          </a></li>


         
        </ul>
    </div>
  </div>
</nav>
    
   )
}
export default Header;