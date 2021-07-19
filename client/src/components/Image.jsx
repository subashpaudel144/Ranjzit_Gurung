import React, { Component } from 'react';
import './css/Image.css';

export class image extends Component {
    render() {
        return (
            <div className='image'>
                <h1>Visit Gallery</h1>
                <a href="/gallery">Gallery</a><br/><br/>
                <img src="https://images.pexels.com/photos/4338312/pexels-photo-4338312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bride" />
                <img src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="computer programmer" />
                <img src="https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="covid" />
                
            </div>
        )
    }
}

export default image;
