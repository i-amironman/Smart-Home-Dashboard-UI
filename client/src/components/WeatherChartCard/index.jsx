import { useState, useEffect } from "react";
import UI from "./ui";
import { format_weather_data } from "../../helps";

function WeatherChartCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const now = new Date();
    const hourly = {
      time: Array.from({ length: 48 }, (_, i) => new Date(now.getTime() - (47 - i) * 3600000).toISOString()),
      temperature_2m: Array.from({ length: 48 }, () => Math.round(15 + Math.random() * 12)),
      relativehumidity_2m: Array.from({ length: 48 }, () => Math.round(40 + Math.random() * 40)),
      windspeed_10m: Array.from({ length: 48 }, () => Math.round(2 + Math.random() * 10)),
      rain: Array.from({ length: 48 }, () => Math.round(Math.random() * 5)),
      cloudcover: Array.from({ length: 48 }, () => Math.round(Math.random() * 100)),
    };
    setData(format_weather_data({ hourly }));
  }, []);

  return (
    <UI
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart about weather",
            size: "30px",
          },
        },
      }}
      data={data}
      onUpdate={() => {
        const now = new Date();
        const hourly = {
          time: Array.from({ length: 48 }, (_, i) => new Date(now.getTime() - (47 - i) * 3600000).toISOString()),
          temperature_2m: Array.from({ length: 48 }, () => Math.round(15 + Math.random() * 12)),
          relativehumidity_2m: Array.from({ length: 48 }, () => Math.round(40 + Math.random() * 40)),
          windspeed_10m: Array.from({ length: 48 }, () => Math.round(2 + Math.random() * 10)),
          rain: Array.from({ length: 48 }, () => Math.round(Math.random() * 5)),
          cloudcover: Array.from({ length: 48 }, () => Math.round(Math.random() * 100)),
        };
        setData(format_weather_data({ hourly }));
      }}
    />
  );
}

export default WeatherChartCard;
