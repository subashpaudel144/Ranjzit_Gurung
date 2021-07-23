import React, { Component } from 'react';
import './css/Insta.css';
import { Image } from 'react-bootstrap';

export class Insta extends Component {
    render() {
        return (
            <div className='insta'>
                <h1>Follow on Instagram</h1>
                <p>@ranjzit_gurung</p>
                <img src="/images/gumba.JPG" alt="gumba" />
                <img src="/images/bhari.JPG" alt="bhari" />
                <img src="/images/bike.JPG" alt="bike" />
                <img src="/images/airport.JPG" alt="airport" />



            </div>
        )
    }
}

export default Insta;
