import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Gallery from './components/Gallery';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/contact' component={ Contact }/>
          <Route path = '/gallery' component ={ Gallery } />
          </Switch>
        </Router>        
      </div>
    )
  }
}

export default App;
