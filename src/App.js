import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './components/About';
import Store from './components/Store';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
        <NavBar />
        <Route exact path='/' component={Home} />
          <Switch>
        <Route exact path='/about' component={About} />
        <Route path='/store' component={Store} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} /> 
      </Switch>
    </div>
  </BrowserRouter>
    );
  }
}

export default App;

