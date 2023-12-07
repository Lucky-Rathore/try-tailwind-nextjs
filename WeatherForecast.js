import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherForecast = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://lucky-rathore-weabapp.azurewebsites.net/WeatherForecast');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // You can customize this loading message
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
        <ul>
          {data.map((forecast) => (
            <li key={forecast.date} className="mb-4">
              <p className="text-gray-600">
                Date: {new Date(forecast.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F
              </p>
              <p className="text-gray-800">Summary: {forecast.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherForecast;
