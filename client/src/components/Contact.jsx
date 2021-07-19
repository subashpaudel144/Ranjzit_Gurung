import React, { Component } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import './css/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationArrow,
    faPhone,
    faMailBulk
       
    } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";


export class Contact extends Component {
    render() {

        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_tm8aory', 'template_0794k4q', e.target, 'user_1vQ2mT7CceG0OykJPnFo1')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          }
         

        return (
            
            <div className='contact'>
                <div className='ban'>
                <Banner />
                </div>
                <div className='cdetails'>
                    <h1>CONTACT ME</h1>
                    <p className='para'>
                        If you want to contact me.. please feel free to contact me in my phone number below, address below,
                        email below,<br/> or you can also contact me through facebook, instagram etc from the above icons.
                    </p>
                </div> 
                <div className='pdetails'>
                    <div className='box1'>
                        <FontAwesomeIcon className='location' size="2x" icon={faLocationArrow}/>
                        <h1>Address</h1>
                        <p className= 'ad'>
                            Pokhara-1, Bagar<br/>
                            Tudikhel marga
                        </p>
                    </div>
                    <div className='box2'>
                        <FontAwesomeIcon className='location' size="2x" icon={faPhone}/>
                        <h1>Phone</h1>
                        <p className= 'ad'>
                            +9779856012929
                        </p>
                    </div>
                    <div className='box3'>
                        <FontAwesomeIcon className='location' size="2x" icon={faMailBulk}/>
                        <h1>Email</h1>
                        <p className= 'ad'>
                            gurungranjit39@gmail.com
                        </p>
                    </div>
                    <div className='box4'>
                        <FontAwesomeIcon className='location' size="2x" icon={faGoogle}/>
                        <h1>Website</h1>
                        <p className= 'ad'>
                            www.ranjzitgrg.com.np
                        </p>
                    </div>
                        
                </div>
                <form onSubmit={sendEmail}>
                <div className='message'>
                    <input type="text" name="name" placeholder="Your full name" /><br/>
                    <input type="text" name="email" placeholder="Your Email" /><br/>
                    <input type="text" name="subject" placeholder="Subject" /><br/>
                    <textarea name="message" id="textbox" cols="30" rows="10">Message: </textarea><br/>
                    <button type="submit">Send message</button>

                </div>
                </form>
                <Footer />
                </div>
                
        );
    }
}

export default Contact;
