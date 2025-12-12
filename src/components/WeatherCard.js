import React from "react";
import "./WeatherCard.css";

function WeatherCard({ data }) {
  // Check if data and required fields exist
  if (!data || !data.main || !data.weather || !data.wind) {
    return null; // or you can show a loading/error message
  }

  if (!data || !data.main) {
  return <p>Enter a city to see the weather.</p>;
}
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <h1>{Math.round(data.main.temp)}°C</h1>

      <p className="desc">{data.weather[0].description}</p>

      <div className="details">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;

