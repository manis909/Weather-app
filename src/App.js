import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = "18ed1034612d9ecad92a686ca8229f80";

  const getWeather = async () => {
    if (!city) return;
    // const API_KEY = "18ed1034612d9ecad92a686ca8229f80"; // your actual key in quotes

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const weatherData = await res.json();

    if (weatherData.cod === "404") {
      setData(null);
      alert("City not found!");
      return;
    }

    setData(weatherData);
  };

  return (
    <div className="container">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {data && <WeatherCard data={data} />}
    </div>
  );
}

export default App;
