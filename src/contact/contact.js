import './contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Saranya_resume from "../images/SaranyaOP.pdf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () =>{
    function handleDownload() {
        window.open(Saranya_resume);
       
      }
      const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
    console.log( )
    if(form.current.from_name.value && form.current.reply_to.value && form.current.message.value !=""){
      
        emailjs.sendForm('service_jg0qdxm', 'template_lhqka6j', form.current, 'BMvqV6AnbsVoiLffb')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      toast.success('Message sent successfully')
      form.current.reset(); //clearing form data
    }else{
        
        toast.error('Fill details properly')
    }
        
    
  };
    return(
        <>
        <div className="mycontact" id="contact">
            <div className='c-left'>
            <h1 className='c-title animateMe' data-animation="fadeInUpBig">Contact Me</h1>
                <div className='c-body'>
                <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mt-2 animateMe"  data-animation="fadeInUpBig">
                        <label for="name" className='lablelitem'>Name</label>
                        <input type="text" className="form-control"   name="from_name"  />
                    </div>
                    <div className="form-group mt-2 animateMe"  data-animation="fadeInUpBig">
                        <label for="email" className='lablelitem'>Email address</label>
                        <input type="email" className="form-control"   name="reply_to"/>
                    </div>
                    <div className="form-group mt-2 animateMe"  data-animation="fadeInUpBig">
                        <label for="msg" className='lablelitem' >Message</label>
                    <textarea rows={8} className="form-control"  name="message"/>
                    </div>
                    <div className="form-group animateMe"  data-animation="fadeInUpBig">
                    <button className='c-button' type="submit" >
                            <i class="fa fa-paper-plane m-1" aria-hidden="true"></i>
                           Send Message
                        </button> 
                          
                    </div>
                </form>
                </div>
            </div>
            <div className='c-right'>
                <div className='email-div'>
                    <div className='email-container animateMe'  data-animation="fadeInUpBig">
                        <div className='envelop'>
                            <div className='paper'>
                                <p className='paper-p'>Hello, I'm here</p>
                                <span className='p-cdetails'>saranyaop98@gmail.com</span>
                               
                            </div>
                            <div className='inner1'>
                                <div className='inner2'></div>
                            </div>
                            <div className='cover'></div>
                        </div>
                    </div>
                </div>

           <table className='c-icons animateMe' data-animation="fadeInUpBig">
          
            <tr>
                <td className='info-icon'> <a href="https://www.linkedin.com/in/saranyaop" className='c-link'>
                    <i className="fa fa-linkedin-square " aria-hidden="true"></i></a></td>
                    <td className='info-icon'> <a href="https://github.com/SaranyaOP" className='c-link'>
                    <i className="fa fa-github" aria-hidden="true"></i></a></td>
                
            </tr>
        
           </table>
            <div className='menu-div animateMe'  data-animation="fadeInUpBig">
                <ul className='menu-list' type="none">
                    <li className='list-items'><a href="#home"className='list-items' >Home</a></li>
                    <li className='list-items'><a href="#about" className='list-items'>About me</a></li>
                    <li className='list-items'><a href="#project" className='list-items'>Projects</a></li>
                    <li className='list-items'><a href="#contact" className='list-items'>Contact me</a></li>
                    <li className='list-items' onClick={handleDownload}> <a href="#resume" className='list-items'>Resume</a></li> 
                    {/* <li className='list-items'><a href={resume} className='list-items' download="Saranya-resume">Resume</a></li>        */}
                </ul>
            </div>
            </div>
            
          
           
           
        </div>
        <ToastContainer/>
        </>
    )
}
export default Contact;