import React, { Component } from 'react';
import './App.css';
import shows from './shows';

const showlist = shows.map((show) =>
  <ul>
    <li>{show.artist_name}</li>
    <li>Venue: {show.venue_name}</li>
    <li>Address: {show.venue_address}</li>
  </ul>
);

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <div className="app-header">
          { showlist }
        </div>
      </div>
    );
  }
}

export default App;
