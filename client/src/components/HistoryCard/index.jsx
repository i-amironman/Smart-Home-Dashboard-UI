import { useState, useEffect } from "react";
import UI from "./ui";
import { format_measured_data } from "../../helps";
import { useSelector } from "react-redux";

function HistoryCard() {
  const selectedRoom = useSelector((state) => state.roomsDetails.selectedRoom);
  const rooms = useSelector((state) => Object.keys(state.roomsDetails.roomsFeaturesDetails));
  const [historyMeasure, setHistoryMeasure] = useState({
    collections_format_1: null,
    collections_format_2: null,
  });

  useEffect(() => {
    const now = new Date();
    const data = [];
    for (let d = 0; d < 24; d++) {
      rooms.forEach((room) => {
        data.push({
          room,
          temperature: Math.round(18 + Math.random() * 10),
          humidity: Math.round(40 + Math.random() * 30),
          date: new Date(now.getTime() - d * 3600000).toLocaleString(),
        });
      });
    }
    setHistoryMeasure(format_measured_data(data));
  }, [rooms]);

  const columns = [
    {
      name: "Temperature",
      selector: (row) => row.temperature,
      sortable: true,
    },
    {
      name: "Humidity",
      selector: (row) => row.humidity,
      sortable: true,
    },
  ];

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
            text: "",
            size: "30px",
          },
        },
      }}
      data_format_1={historyMeasure.collections_format_1?.[selectedRoom]}
      data_format_2={historyMeasure.collections_format_2?.[selectedRoom]}
      columns={columns}
      onUpdate={() => {
        const now = new Date();
        const data = [];
        for (let d = 0; d < 24; d++) {
          rooms.forEach((room) => {
            data.push({
              room,
              temperature: Math.round(18 + Math.random() * 10),
              humidity: Math.round(40 + Math.random() * 30),
              date: new Date(now.getTime() - d * 3600000).toLocaleString(),
            });
          });
        }
        setHistoryMeasure(format_measured_data(data));
      }}
    />
  );
}

export default HistoryCard;
