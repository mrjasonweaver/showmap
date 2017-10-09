import React, { Component } from 'react';
import './App.css';
import ShowList from './ShowList';
import shows from './shows';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <div className="app-header">
        </div>
        <ShowList shows={shows} />
      </div>
    );
  }
}

export default App;
