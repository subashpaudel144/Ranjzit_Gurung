import React, { Component } from 'react';
import './css/Gallery.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Marriage from './Marriage';
import Nature from './Nature';

export class Gallery extends Component {
    render() {
        return (
            <div className='gallery'>
                <Router>
                <div className='top'>
                    <h1>HELLO WELCOME TO RANJZIT PHOTO GALLERY<br/> WITH CREATIVE AND UNIQUE STYLE</h1>
                    <a href="/gallery/marriage">Marriage</a>
                    <a href="/gallery/nature">Nature</a>
                </div>
                <Switch>
                    <Route path='/gallery/marriage' exact component={ Marriage }/>
                    <Route path='/gallery/nature' exact component={ Nature }/>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default Gallery;
