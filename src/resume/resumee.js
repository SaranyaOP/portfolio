import './resumee.css';
const Resumee = () =>{
    const takePrint = () =>{
        window.print()
    }
    return(
        <>
        <div className="myresume" id="resume">
      <div class="vertical-tabs">
        <div className='r-left'>
        <h1 className="r-title ">Resume</h1>
        <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#pag1" role="tab" aria-controls="home">
           SKILLS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#pag2" role="tab" aria-controls="profile">
            EXPERIENCE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#pag3" role="tab" aria-controls="messages">
           PROJECTS</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#pag4" role="tab" aria-controls="settings">
           EDUCATION</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#pag5" role="tab" aria-controls="settings">
           LANGUAGES</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link download" data-toggle="tab" href="#pag5" role="tab" aria-controls="settings">
          <i class="fa fa-download m-1" aria-hidden="true"></i> Download  Resume</a>
        </li>
      </ul>
      {/* <div className='downlod_button '>
            <button className='btn btn-primary float-end'>
          
            Download</button>
          </div> */}
        </div>
        <div className='r-right'>
        <div class="tab-content ">
        <div class="tab-pane active" id="pag1" role="tabpanel">
          <div class="sv-tab-panel">
            <h3>SKILLS</h3>
            <div className='row'>
              <div className='col-lg-4 '>
               <div className='skillitem p-2 m-1 shadow'>
               <h4>HTML</h4>
                   <div class="progress">
                      <div class="progress-bar  htmlbar"></div>
                  </div>
                  <ul className='skill_desc pt-3'>
                    <li>HTML Tags</li>
                    <li>HTML Forms</li>
                    <li>HTML Graphics</li>
                    <li>HTML Media</li>
                  </ul>
               </div>
              </div>
              <div className='col-lg-4 '>
              <div className='skillitem p-2 m-1 shadow'>
              <h4>CSS</h4>
              <div class="progress">
                      <div class="progress-bar cssbar"></div>
                  </div>
                  <ul className='skill_desc pt-3'>
                    <li>CSS Basic</li>
                    <li>CSS Grid</li>
                    <li>CSS Responsive</li>
                   
                  </ul>
              </div>
              </div>
              <div className='col-lg-4'>
              <div className='skillitem p-2 m-1 shadow'>
              <h4>JavaScript</h4>
                   <div class="progress">
                      <div class="progress-bar  jsbar"></div>
                  </div>
                  <ul className='skill_desc pt-3'>
                    <li>fundamentals of js, arrays, objects, and functions</li>
                    <li>Advance topics like Callbacks, promises, async-await</li>
                    <li>Oops</li>
                  </ul>
              </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-4 '>
               <div className='skillitem p-2 m-1 shadow'>
               <h4>Bootstrap</h4>
                   <div class="progress">
                      <div class="progress-bar bootstrapbar"></div>
                  </div>
                  <ul className='skill_desc pt-3'>
                    <li>Bootstrap 4</li>
                   
                  </ul>
               </div>
              </div>
              <div className='col-lg-4 '>
              <div className='skillitem p-2 m-1 shadow'>
              <h4>React Js</h4>
              <div class="progress">
                      <div class="progress-bar reactbar"></div>
                  </div>
                  <ul className='skill_desc pt-3'>
                    <li>fundamentals of react js,Routing</li>
                    <li>Hooks, API calls</li>
                    <li>Redux</li>
                  </ul>
              </div>
              </div>
              <div className='col-lg-4 '>
             <div className='skillitem p-2 m-1 shadow'>
             <h4>Git</h4>
              <div class="progress">
                      <div class="progress-bar  gitbar"></div>
                  </div>
             </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="pag2" role="tabpanel">
          <div class="sv-tab-panel">
            <h3>EXPERIENCE</h3>
            <div className='exp_colum'>

            </div>
          </div>
        </div>
        <div class="tab-pane" id="pag3" role="tabpanel">
          <div class="sv-tab-panel">
            <h3>PROJECTS</h3>
            <div className='row'>
            <div className='col-lg-4'>
                <ul>
                  <li>E-commerce app</li>
                  <li>Calculator</li>
                </ul>
            </div>
            <div className='col-lg-8'>

            </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="pag4" role="tabpanel">
          <div class="sv-tab-panel">
           <h3>TAB 4</h3>
            <p>CONTEUDO 4</p>
          </div>
        </div>

        <div class="tab-pane" id="pag5" role="tabpanel">
          <div class="sv-tab-panel">
            <h3>TAB 5</h3>
            <p>CONTEUDO 5</p>
          </div>
        </div>

        <div class="tab-pane" id="pag6" role="tabpanel">
          <div class="sv-tab-panel">
            <h3>TAB 6</h3>
            <p>CONTEUDO 6</p>
          </div>
        </div>

        <div class="tab-pane" id="pag7" role="tabpanel">
          <div class="sv-tab-panel">
            <h3>TAB 7</h3>
            <p>CONTEUDO 7</p>
          </div>
        </div>
          
      </div>
        </div>
    </div>
  

            {/* <div className="r-left">
            <h1 className="r-title">Resume</h1>
                <ul className='resume_ul'>
                    <li className='nav-item'><a href='#' className='nav-link active'>
                        <button className='resume_button shadow' onClick={takePrint}>SKILLS</button>
                    </a></li>
                    <li><button className='resume_button shadow'>EXPERIENCE</button></li>
                    <li><button className='resume_button shadow'>PROJECTS</button></li>
                    <li><button className='resume_button shadow'>EDUCATION</button></li>
                </ul>

            </div>
           
            <div className="r-right">
                <div className='resume_body' >
                    <div className='skills' id="skills">
                        <h3>HTML</h3>
                    </div>
                </div>
            </div> */}
        </div>
        </>
    )
}
export default Resumee;