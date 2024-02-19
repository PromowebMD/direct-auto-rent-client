import React from "react";

import {
  SERVICE_AIRPORT_TEXT,
  SERVICE_DRIVER_TEXT,
  SERVICE_DURATION_TEXT,
  SERVICE_RENT_TEXT,
  SERVICE_TAXI_TEXT,
  SERVICE_TOURISM_TEXT,
} from "../utils/appText.ts";
import { ServiceItem } from "../components/ServiceItem.tsx";
import rentImg from "../assets/services/rent.svg";
import driverImg from "../assets/services/driver.svg";
import airportImg from "../assets/services/airport.svg";
import termImg from "../assets/services/longTerm.svg";
import tourismImg from "../assets/services/tourism.svg";

export const ServicesScreen: React.FC = () => {
  const serviceList = [
    { title: "ÎNCHIRIERI AUTO", image: rentImg, content: SERVICE_RENT_TEXT },
    {
      title: "INCHIRIERE AUTO CU ȘOFER",
      image: driverImg,
      content: SERVICE_DRIVER_TEXT,
    },
    {
      title: "ÎNCHIRIAZĂ O MAȘINĂ LA AEROPORT",
      image: airportImg,
      content: SERVICE_AIRPORT_TEXT,
    },
    {
      title: "ÎNCHIRIERE AUTO PE TERMEN LUNG",
      image: termImg,
      content: SERVICE_DURATION_TEXT,
    },
    { title: "VIP TAXI", image: termImg, content: SERVICE_TAXI_TEXT },
    {
      title: "TURISM ȘI EXCURSII",
      image: tourismImg,
      content: SERVICE_TOURISM_TEXT,
    },
  ];

  return (
    <section className="mt-6 grid place-items-center place-self-center w-[80%]">
      <h1 className="font-sans text-3xl font-bold">SERVICII</h1>
      <div className="my-6 grid gap-2 md:my-10 md:gap-10">
        {serviceList.map((item) => {
          return (
            <ServiceItem
              key={item.title}
              title={item.title}
              image={item.image}
              content={item.content}
            />
          );
        })}
      </div>
    </section>
  );
};
