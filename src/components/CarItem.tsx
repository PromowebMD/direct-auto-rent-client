import React from "react";
import { ICar } from "../models/car.ts";
import seatsImg from "../assets/cars/seats.svg";
import transmissionImg from "../assets/cars/transmission.svg";
import baggageBig from "../assets/cars/baggage_big.svg";
import baggageSmall from "../assets/cars/baggage_small.svg";
import distanceLimit from "../assets/cars/distance_limit.svg";
import {
  capitalizeFirstLetter,
  translateDistanceLimit,
} from "../utils/textFormat.ts";

type CarItemProps = {
  carItem: ICar;
  className?: string;
};

export const CarItem: React.FC<CarItemProps> = ({ carItem, className }) => {
  const carDescriptionList = [
    { label: `${carItem.seats} locuri`, icon: seatsImg },
    { label: `${carItem.bigBaggage} bagaj mare`, icon: baggageBig },
    {
      label: `kilometraj ${translateDistanceLimit(carItem.distanceLimit)}`,
      icon: distanceLimit,
    },
    {
      label: capitalizeFirstLetter(carItem.transmission.toLowerCase()),
      icon: transmissionImg,
    },
    { label: `${carItem.smallBaggage} bagaj mic`, icon: baggageSmall },
  ];

  return (
    <div
      className={`flex w-full items-start gap-2 font-oswald lg:w-fit lg:items-center lg:gap-6 ${className}`}
    >
      <h2 className="text-2xl lg:hidden">
        {`${carItem.title} ${carItem.year}`.toUpperCase()}
      </h2>
      <span className="max-w-[220px] lg:max-w-[370px]">
        <img src={carItem.primaryImage} alt="" />
      </span>
      <div className="flex w-full flex-col gap-2 lg:w-fit">
        <h2 className="hidden text-xl lg:block">
          {`${carItem.title} ${carItem.year}`.toUpperCase()}
        </h2>
        <div className="flex grid-cols-2 flex-wrap gap-2 font-normal lg:grid">
          {carDescriptionList.map((item) => {
            return (
              <div
                key={item.label}
                className="flex items-center gap-1 lg:w-fit"
              >
                <span>
                  <img src={item.icon} alt="" className="w-[18px] h-[30px]" />
                </span>
                <p
                  className={`text-sm lg:text-base ${item.icon === distanceLimit && "text-primary mr-8 lg:mr-0"}`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
