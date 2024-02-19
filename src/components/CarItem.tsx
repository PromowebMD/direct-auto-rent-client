import React from "react";
import { ICar } from "../models/car.ts";
import seatsImg from "../assets/cars/seats.svg";
import transmissionImg from "../assets/cars/transmission.svg";
import baggageBig from "../assets/cars/baggage_big.svg";
import baggageSmall from "../assets/cars/baggage_small.svg";
import distanceLimit from "../assets/cars/distance_limit.svg";

type CarItemProps = {
  carItem: ICar;
  className?: string;
};

export const CarItem: React.FC<CarItemProps> = ({ carItem, className }) => {
  const carDescriptionList = [
    { label: `${carItem.seats} locuri`, icon: seatsImg },
    { label: carItem.transmission, icon: transmissionImg },
    { label: `${carItem.bigBaggage} bagaj mare`, icon: baggageBig },
    { label: `${carItem.smallBaggage} bagaj mic`, icon: baggageSmall },
    {
      label: `kilometraj ${carItem.distanceLimit.toLowerCase()}`,
      icon: distanceLimit,
    },
  ];

  return (
    <div
      className={`w-full lg:w-fit flex items-center gap-6 font-oswald ${className}`}
    >
      <span className="max-w-[370px]">
        <img src={carItem.primaryImage} alt="" />
      </span>
      <div className="flex w-full flex-col gap-2 lg:w-fit">
        <h2 className="text-xl">{`${carItem.title} ${carItem.year}`}</h2>
        <div className="grid grid-cols-2 gap-2 font-light">
          {carDescriptionList.map((item) => {
            return (
              <div key={item.label} className="flex items-center gap-1">
                <span>
                  <img src={item.icon} alt="" />
                </span>
                <p className="text-sm md:text-base">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
