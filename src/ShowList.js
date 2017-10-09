import React from 'react';

export default function ShowList(props) {
    const shows = props.shows;
    const showItems = shows.map((show) =>
      <li key={show.show_id}>
        <ul>
          <li className={'show-' + show.show_id}>{show.artist_name}</li>
          <li>Venue: {show.venue_name}</li>
          <li>Address: {show.venue_address}</li>
        </ul>
      </li>
    );
    return (
      <ul>{showItems}</ul>
    );
  }

  export const sum = function(a, b) {
    return a + b;
  };
  console.log(sum(1,2));