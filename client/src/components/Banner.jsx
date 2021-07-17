import React from 'react';
import './css/Banner.css';
import image from './images/ranjzitgrg.jpg';
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
                    <img src={image} alt="ranjit" />
                    <h2>I'm Ranjzit Gurung</h2><br/>
                    <a  className='photographer' href='#Services'>Photographer | Traveller</a><br/><br/>
                    <p>
                        "Photography is a way of feeling, of touching, of loving, what you have caught on film is captured 
                        forever...<br/> It remember little things, long after you have forgotten everything."
                    </p><br/><br/><br/>
                </div>
                <div className="icons">                
                    <a href="www.facebook.com" ><FontAwesomeIcon className='facebook' size="2x" icon={faFacebook}/></a>
                    <a href="wwww.twitter.com" ><FontAwesomeIcon className='twitter' size="2x" icon={faTwitter}/></a>
                    <a href="www.instagram.com" ><FontAwesomeIcon className='instagram' size="2x" icon={faInstagram}/></a>
                    <a href="www.youtube.com" ><FontAwesomeIcon className='youtube' size="2x" icon={faYoutube}/></a>
                </div>

                
              
            </div>
        
        </div>
    );
}

export default Banner;