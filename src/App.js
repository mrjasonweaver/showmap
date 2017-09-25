import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Showmap</h2>
        </div>
        <p className="App-intro">
          A live music map app using the Spotify and Ticketmaster APIs
        </p>
      </div>
    );
  }
}

export default App;
