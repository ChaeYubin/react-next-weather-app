import { WeatherListElement } from "@/models/weatherRequest";
import React from "react";

interface DayWeatherInfoProps {
  weatherInfo: WeatherListElement[];
}

const DayWeatherInfo = ({ weatherInfo }: DayWeatherInfoProps) => {
  return (
    <ul
      className={`grid 
        grid-cols-2
        justify-items-center
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-2
        lg:gap-6
        w-full
        `}
    >
      {weatherInfo.map((timeInfo) => {
        return (
          <div
            key={timeInfo.dt}
            className={`w-fit 
              h-fit
              px-4
              py-2
              md:px-8
              md:py-4
              flex
              flex-col
              bg-white
              rounded-[15px]
              outline
              outline-1
              `}
          >
            <span className="font-bold">
              Time: {timeInfo.dt_txt.split(" ")[1]}
            </span>
            <span className="font-bold">Temperature:</span>
            {timeInfo.main.temp}
            <span className="font-bold">Feels like:</span>
            {timeInfo.main.feels_like}
            <span className="font-bold">{timeInfo.weather[0].main}</span>
            {timeInfo.weather[0].description}
          </div>
        );
      })}
    </ul>
  );
};

export default DayWeatherInfo;
