import './contact.css'
const Contact = () =>{
    return(
        <>
        <div className="mycontact" id="contact">
            <div className='c-left'>
            <h1 className='c-title'>Contact Me</h1>
                <div className='c-body'>
                    <div class="form-group mt-2">
                        <label for="name" className='lablelitem'>Name</label>
                        <input type="text" class="form-control"  id="email"/>
                    </div>
                    <div class="form-group mt-2">
                        <label for="email" className='lablelitem'>Email address</label>
                        <input type="email" class="form-control"  id="email"/>
                    </div>
                    <div class="form-group mt-2">
                        <label for="msg" className='lablelitem'>Message</label>
                    <textarea rows={5} class="form-control"/>
                    </div>
                    <div class="form-group">
                        <button className='c-button'>
                            <i class="fa fa-paper-plane m-1" aria-hidden="true"></i>
                            Send Message
                        </button>  
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <div className='c-icons'>
                    <ul className='contact_icons'>
                        <li className='icon_item'>
                            <span className='myicon'>
                            <i class="fa fa-map-marker myicon m-2" aria-hidden="true"></i>
                            </span>
                            <span className='icon-info'>Bangalore, Karnataka  </span>
                        </li>
                        <li className='icon_item'>
                            <span className='myicon'>
                            <i class="fa fa-envelope myicon m-2" aria-hidden="true"></i>
                            </span>
                            <span className='icon-info'>saranyaop98@gmail.com </span>
                        </li>
                        <li className='icon_item'>
                            <span className='myicon'>
                            <i class="fa fa-github myicon m-2" aria-hidden="true"></i>
                            </span>
                            <span className='icon-info'>https://github.com/SaranyaOP</span>
                        </li>
                        <li className='icon_item'>
                            <span className='myicon'>
                           <i class="fa fa-linkedin-square m-2" aria-hidden="true" ></i>
                            </span>
                            <span className='icon-info'>https://www.linkedin.com/in/saranyaop</span> 
                        </li>
                    </ul>
                </div>
               
            </div>
            
          
           
           
        </div>
        </>
    )
}
export default Contact;