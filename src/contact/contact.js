import './contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Saranya_resume from "../images/Saranya.OP-Resume-2026.pdf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    function handleDownload() {
        window.open(Saranya_resume);

    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log()
        if (form.current.from_name.value && form.current.reply_to.value && form.current.message.value != "") {

            emailjs.sendForm('service_jg0qdxm', 'template_lhqka6j', form.current, 'BMvqV6AnbsVoiLffb')
                .then((result) => {
                    console.log(result.text);
                    console.log("message sent");
                }, (error) => {
                    console.log(error.text);
                });
            toast.success('Message sent successfully')
            form.current.reset(); //clearing form data
        } else {

            toast.error('Fill details properly')
        }


    };
    const ddd = () => {
        alert("This feature is under development. Please contact me via email at")
    }
    return (
        <>
            <div className="mycontact" id="contact">
                {/* <div className='c-left'>
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
            </div> */}
                <div className='c-right'>
                    <div className='email-div'>
                        <div className='email-container animateMe' data-animation="fadeInUpBig">
                            <div className='envelop'>
                                <div className='paper'>
                                    <p className='paper-p'>Hello, I'm here</p>

                                    <div className='btn-div'>
                                        <button className='c-button' type="submit" onClick={ddd} >
                                            <i class="fa fa-paper-plane m-1" aria-hidden="true"></i>
                                            Send your queries
                                        </button>
                                    </div>

                                </div>
                                <div className='inner1'>
                                    <div className='inner2'></div>
                                </div>
                                <div className='cover'></div>
                            </div>
                        </div>
                    </div>


                </div>




            </div>
            <ToastContainer />
        </>
    )
}
export default Contact;