import "./home.css"
import me from "../images/me.png";
import me2 from "../images/me22.png";
const  Home  = () =>{
    return(
        <>
        <div className="myhome" id="home">
        <div className="i">  
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h3 className="intro1">Hello, My name is</h3>
                    <h1 className="name">Saranya</h1>
                    
  <div class="line">
    <h2 className="im">I am  a </h2>
    <h2 className='lineUp'> Front-end Developer 
    <span className="i-code"><i class="fa fa-code" aria-hidden="true"></i></span>
    </h2>
  </div>
                   
                    {/* <h2 className="i-intro">Hello, My name is </h2>
                    <h1 className="i-name">Saranya</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper ">
                            <div className="i-title-item text-center">Front-End Developer</div>
                            <div className="i-title-item text-center">FullStack Developer</div> 
                        </div> */}
                    {/* </div> */}
                    <div className="i-desc">
                   <b> "Code is my brush; the web is my canvas—let's create something beautiful!" </b>
                        <p>A passionate developer transforming ideas into stunning user experiences</p>
                    </div>
                    {/* <div>
                        <button className='resume-btn'>Download Resume</button>
                    </div> */}
                </div>
            </div>
           <div className="i-right">
                <div className="i-bg">
                    
                </div>
                
                <img src={me} alt="" className="i-img animate fadeInRight four"/>
                {/* <img src={me2} alt="" className="i-img2"/> */}

                
            </div> 

        </div>
        </div>
        </>
    )
}
export default Home;