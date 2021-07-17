import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import Photo from "./components/Image";
import Personal from './components/Personal';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/><br/>
        <Photo/>
        <Personal/>
        
      </div>
    )
  }
}

export default App;
