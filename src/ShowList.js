import React from 'react';

export default function ShowList(props) {
  const shows = props.shows;
  const showItems = shows.map((show) =>
    <li key={show.show_id}>
      <ul>
        <li className={'show-' + show.show_id}>{show.artist_name}</li>
        <li>Venue: {show.venue_name}</li>
        <li>Address: {show.venue_address}</li>
        <li>Latitude: {show.coordinates.latitude}</li>
        <li>Longitude: {show.coordinates.longitude}</li>
        <li>Is saved: {show.is_saved ? 'Yes' : 'No'}</li>
      </ul>
    </li>
  );
  return (
    <ul>{showItems}</ul>
  );
}