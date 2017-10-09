import React, { Component } from 'react';
import './App.css';
import shows from './shows';

function ShowList(props) {
  const shows = props.shows;
  const showItems = shows.map((show) =>
  <ul key={show.show_id}>
    <li>{show.artist_name}</li>
    <li>Venue: {show.venue_name}</li>
    <li>Address: {show.venue_address}</li>
  </ul>
);
  return (
    <div>{showItems}</div>
  );
}

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
