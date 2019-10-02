import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
class App extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  render() {
    return (
      <div className="App">
    <nav>
    <div className="nav-wrapper grey">
      <a href="/" className="brand-logo">Safer Stops</a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/store">Store</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/gallery">Gallery</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/store">Store</a></li>
    <li><a href="/contact">Contact Us</a></li>
    <li><a href="/gallery">Gallery</a></li>
  </ul>
    </div>
    );
  }
}

export default App;
