import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomsDetailsSlice } from "../../store";
import * as assets from "../../assets";

import UI from "./ui";

function FeatureCard({ feature }) {
  const room = useSelector(
    (state) =>
      state.roomsDetails.roomsFeaturesDetails[state.roomsDetails.selectedRoom]
  );
  const dispatcher = useDispatch();

  return (
    <UI
      status={room[`is${feature}Active`]}
      icon={assets[`${feature.replace(" ", "")}Icon`]}
      feature={feature}
      onChangeState={(feature) => {
        dispatcher(roomsDetailsSlice.actions.changeStateFeature(feature));
      }}
    />
  );
}

export default FeatureCard;
