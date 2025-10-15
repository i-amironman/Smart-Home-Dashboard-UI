import React from "react";
import UI from "./ui";
import * as assets from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { roomsDetailsSlice } from "../../store";


function MeasuringCard() {
  const dispatcher = useDispatch();
  const room = useSelector((state) => {
    return state.roomsDetails.roomsFeaturesDetails[
      state.roomsDetails.selectedRoom
    ];
  });

  return (
    <UI
      isActive={room["isTemperatureActive"] || room["isAir ConditionerActive"]}
      value={room["Device Temperature"]}
      unit="Celsius"
      icon={
        room["isTemperatureActive"] === true
          ? assets.Temperature3Icon
          : assets.AirConditionerIcon
      }
      title={
        room["isTemperatureActive"] === true
          ? `${room.Room} Temperature`
          : `${room.Room} Air Conditioner`
      }
      shortUnit="°C"
      onChangeValue={(value) => {
        if (
          (value > 0 && room["Device Temperature"] + value < 100) ||
          (value < 0 && room["Device Temperature"] + value > 1)
        ) {
          dispatcher(
            roomsDetailsSlice.actions.changeRoomDeviceTemperature(value)
          );
        }
      }}
    />
  );
}

export default MeasuringCard;
