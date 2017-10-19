import React from 'react';
import { formattedDateTime } from './helpers';

const ShowList = (props) => {
  const shows = props.shows;
  const showItems = shows.map((show) =>
    <li key={show.show_id} className={`show-${show.show_id} saved-${show.is_saved ? 'yes' : 'no'}`}>
      <ul className="show-info">
        <li>{show.artist_name} at {show.venue_name}</li>
        <li>When: {formattedDateTime(show.date)}</li>
        <li>Address: {show.venue_address}</li>
        <li>Latitude: {show.coordinates.latitude}</li>
        <li>Longitude: {show.coordinates.longitude}</li>
        <li>      
          <audio controls="controls">
            <source src={show.latest_hit} type="audio/mp3"></source>
          </audio>
      </li>
      </ul>
    </li>
  );
  return (
    <ul className="showlist">{showItems}</ul>
  );
}

export default ShowList;