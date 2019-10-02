import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";


class Home extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  render() {
    return (
      <div>
        <h1>home</h1>
      </div>
    );
  }
}

export default Home;