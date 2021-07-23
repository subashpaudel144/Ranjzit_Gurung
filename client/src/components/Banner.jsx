import React from 'react';
import './css/Banner.css';
import { Image } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
    
    } from "@fortawesome/free-brands-svg-icons";


const Banner = () => {
    return(
        <div className = 'Banner'>
            <div className='Banner-info'>
                <div className='details'>
                    <img src="/images/ranjzitgrg.jpg" alt="ranjit" />
                    <h2>I'm Ranjit Gurung</h2><br/>
                    <a  className='photographer' href='#Services'>Photographer | Videoshooter | Visual Editor</a><br/><br/>
                    <p>
                        "Photography is a way of feeling, of touching, of loving, what you have caught on film is captured 
                        forever...<br/> It remember little things, long after you have forgotten everything."
                    </p><br/><br/><br/>
                </div>
                <div className="icons">                
                    <a href="https://www.facebook.com/Ranjzit.gurung.73" ><FontAwesomeIcon className='facebook' size="3x" icon={faFacebook}/></a>
                    <a href="https://twitter.com/RanjitGurung13" ><FontAwesomeIcon className='twitter' size="3x" icon={faTwitter}/></a>
                    <a href="https://www.instagram.com/ranjzit_gurung/" ><FontAwesomeIcon className='instagram' size="3x" icon={faInstagram}/></a>
                    <a href="https://www.youtube.com/channel/UCR4C8Gf9E4fREG9IiUtM3cg" ><FontAwesomeIcon className='youtube' size="3x" icon={faYoutube}/></a>
                </div>

                
              
            </div>
        
        </div>
    );
}

export default Banner;