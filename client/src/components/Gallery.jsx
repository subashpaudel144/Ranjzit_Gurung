import React, { Component } from 'react';
import './css/Gallery.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Marriage from './Marriage';
import Nature from './Nature';
import Footer from './Footer';
import detailview from './detailview';

export class Gallery extends Component {
    render() {
        return (
            <div className='gallery'>
                <Router>
                <div className='top'>
                    <h1>HELLO WELCOME TO RANJZIT PHOTO GALLERY<br/> WITH CREATIVE AND UNIQUE STYLE</h1>
                    <a href="/gallery">Landscape</a>
                    <a href="/gallery/weeding">Weeding</a>                    
                    <a href="/gallery/dailylife">Daily Life</a>
                    <a href="/gallery/culture">Culture</a>
                    <a href="/gallery/street">Street</a>
                    <a href="/gallery/videos">Videos</a>
                    <a href="/gallery/others">Others</a>
                </div>
                <Switch>
                    <Route path='/gallery' exact component={ Nature }/>
                    <Route path='/gallery/weeding' component={ Marriage }/>
                    <Route path = '/gallery/imagedetail' component={detailview}/>
                    
                </Switch>
                <Footer />
                </Router>
            </div>
        )
    }
}

export default Gallery;
