import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalDetailsSlice } from "../../store";
import { faker } from "@faker-js/faker";
import { quotes } from "../../data";
import UI from "./ui";
import { useCallback } from "react";

function WelcomingBox() {
  const dispatcher = useDispatch();
  const generalDetails = useSelector((state) => {
    return state.generalDetails;
  });

  const update_weather = useCallback(() => {
    const temp = Math.round(18 + Math.random() * 12);
    dispatcher(generalDetailsSlice.actions.changeWeather(temp));
  }, [dispatcher]);
  useEffect(() => {
    update_weather();
    const ourInterval = setInterval(() => {
      dispatcher(
        generalDetailsSlice.actions.changeQuote(
          quotes[faker.datatype.number({ min: 0, max: quotes.length - 1 })]
        )
      );
    }, 60000);
    return () => {
      clearInterval(ourInterval);
    };
  }, [dispatcher, update_weather]);

  return (
    <UI
      weather={generalDetails.weather}
      user={generalDetails.user}
      quote={generalDetails.quote}
      onUpdate={update_weather}
    />
  );
}

export default WelcomingBox;
