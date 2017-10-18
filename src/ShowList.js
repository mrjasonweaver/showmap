import React from 'react';

export default function ShowList(props) {

  function formattedDateTime(dateStr) {
    const dateTime = new Date(dateStr);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const day = dateTime.getDay();
    const date = dateTime.getDate();
    const month = dateTime.getMonth();
    const year = dateTime.getFullYear();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours > 12 ? hours - 12 : hours;
    const formattedMinutes = minutes > 9 ? "" + minutes : "0" + minutes;

    function formattedDate(dayNumber, monthNumber, dateNumber) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dates = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st'];
      const day = days[dayNumber];
      const month = months[monthNumber];
      const date = dates[dateNumber];
      return `${day} ${month} ${date}`;
    }

    return `${formattedDate(day, month, date)} ${year} at ${formattedHours}:${formattedMinutes}${ampm}`;
  }
  const shows = props.shows;
  const showItems = shows.map((show) =>
    <li key={show.show_id} className={'saved-' + show.is_saved ? 'yes' : 'no'}>
      <audio controls="controls">
        <source src={show.latest_hit} type="audio/mp3"></source>
      </audio>
      <ul>
        <li className={'show-' + show.show_id}>{show.artist_name}</li>
        <li>Venue: {show.venue_name}</li>
        <li>When: {formattedDateTime(show.date)}</li>
        <li>Address: {show.venue_address}</li>
        <li>Latitude: {show.coordinates.latitude}</li>
        <li>Longitude: {show.coordinates.longitude}</li>
      </ul>
    </li>
  );
  return (
    <ul>{showItems}</ul>
  );
}