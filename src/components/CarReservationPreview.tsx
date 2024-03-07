import React from "react";
import { ICar } from "../models/car.ts";
import {
  capitalizeFirstLetter,
  translateDistanceLimit,
} from "../utils/textFormat.ts";
import seatsImg from "../assets/cars/seats.svg";
import distanceLimit from "../assets/cars/distance_limit.svg";
import transmissionImg from "../assets/cars/transmission.svg";
import baggageSmall from "../assets/cars/baggage_small.svg";
import baggageBig from "../assets/cars/baggage_big.svg";

type CarReservationPreviewProps = {
  carItem: ICar;
};

export const CarReservationPreview: React.FC<CarReservationPreviewProps> = ({
  carItem,
}) => {
  const carDescriptionList = [
    { label: `${carItem.seats} locuri`, icon: seatsImg },
    { label: `${carItem.bigBaggage} bagaj mare`, icon: baggageBig },
    {
      label: capitalizeFirstLetter(carItem.transmission.toLowerCase()),
      icon: transmissionImg,
    },
    { label: `${carItem.smallBaggage} bagaj mic`, icon: baggageSmall },
    {
      label: `kilometraj ${translateDistanceLimit(carItem.distanceLimit)}`,
      icon: distanceLimit,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-6 font-oswald lg:flex-col-reverse">
      <span className="h-full w-full self-center max-w-[600px] max-h-[300px] lg:self-start">
        <img
          src={carItem.primaryImage}
          alt=""
          className="mx-auto h-full w-full"
        />
      </span>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl lg:text-3xl">
          {`${carItem.title} ${carItem.year}`.toUpperCase()}
        </h2>
        <div className="grid grid-cols-2 lg:flex lg:gap-4">
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
                  className={`text-base ${item.icon === distanceLimit && "text-primary"}`}
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
