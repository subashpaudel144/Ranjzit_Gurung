import React, { Component } from 'react';
import './css/Image.css';

export class image extends Component {
    render() {
        return (
            <div className='image'>
                <h1>Visit Gallery</h1>
                <a href="/gallery">Gallery</a><br/><br/>
                <img src="https://images.pexels.com/photos/4338312/pexels-photo-4338312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bride" />
                <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="nature" />
                <img src="https://images.pexels.com/photos/2781104/pexels-photo-2781104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="marriage" />
                <img src="https://images.pexels.com/photos/4997172/pexels-photo-4997172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="couple" />
            </div>
        )
    }
}

export default image;
