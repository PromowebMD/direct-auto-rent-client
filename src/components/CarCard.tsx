import React from "react";
import { CarItem } from "./CarItem.tsx";
import { Link } from "react-router-dom";
import { ICar } from "../models/car.ts";
import { useSelector } from "react-redux";
import { RootState } from "../state/store.ts";

type CarCardProps = {
  carItem: ICar;
};

export const CarCard: React.FC<CarCardProps> = ({ carItem }) => {
  const pickUpDate = useSelector((state: RootState) => state.pickUpDate);
  const returnDate = useSelector((state: RootState) => state.returnDate);
  const totalDays = useSelector((state: RootState) => state.totalDays);

  return (
    <div className="flex w-full flex-col items-center justify-between lg:flex-row">
      <CarItem className="flex-row-reverse lg:flex-row" carItem={carItem} />
      <div className="flex w-full flex-row-reverse justify-evenly lg:w-fit lg:flex-col">
        <div>
          <h3 className="text-right text-sm font-oswald">
            {pickUpDate !== null && returnDate !== null
              ? `Prețul pentru ${totalDays} zile`
              : "Prețul pentru 30+ zile"}
          </h3>
          <h3 className="text-right text-2xl font-oswald">
            {carItem.currentPrice} EUR
          </h3>
        </div>
        <Link
          to={`/cars/${carItem.id}`}
          className="flex h-fit items-center rounded px-2 py-1 font-bold text-white bg-accent"
        >
          VEDEȚI OFERTA
        </Link>
      </div>
    </div>
  );
};
