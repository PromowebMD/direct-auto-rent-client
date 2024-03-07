import React from "react";
import { ReservationOptionsComponent } from "./ReservationOptionsComponent.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import { IRentPrice } from "../models/car.ts";

type ReservationPreviewCardProps = {
  carRentPrice: IRentPrice;
  onReservation: () => void;
};

export const ReservationPreviewCard: React.FC<ReservationPreviewCardProps> = ({
  carRentPrice,
  onReservation,
}) => {
  const priceList = [
    { label: "1-2 zile", value: `${carRentPrice.days1To2}€` },
    { label: "3-5 zile", value: `${carRentPrice.days3To5}€` },
    { label: "6-8 zile", value: `${carRentPrice.days6To8}€` },
    { label: "9-14 zile", value: `${carRentPrice.days9To14}€` },
    { label: "20+ zile", value: `${carRentPrice.days20Plus}€` },
    { label: "30+ zile", value: `${carRentPrice.days30Plus}€` },
  ];
  const totalDays = useSelector((state: RootState) => state.totalDays);
  const reservationOptions = useSelector(
    (state: RootState) => state.reservationOptions,
  );
  const rentPrice = useSelector((state: RootState) => state.rentPrice);
  const optionsPrice = useSelector((state: RootState) => state.optionsPrice);

  return (
    <div className="flex flex-col gap-2 rounded border border-gray-200 font-oswald w-full">
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">PREȚUL AUTOMOBILULUI</h2>
          <div className="grid grid-cols-2 gap-3 place-self-center lg:place-self-start">
            {priceList.map((item) => {
              return (
                <p key={item.label} className="font-normal">
                  {item.label} {item.value}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">SERVICII SUPLIMENTARE</h2>
          <ReservationOptionsComponent />
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-neutral-100 p-5 rounded-t">
        <h2 className="text-xl font-medium">Detalii factură</h2>
        <div className="flex justify-between font-light">
          <span>Taxă închiriere auto:</span>
          <span className="font-medium">{rentPrice}€</span>
        </div>
        {reservationOptions.map((option) => {
          return (
            option.isChecked && (
              <div className="flex justify-between font-light" key={option.id}>
                <span>{option.title}</span>
                <span className="font-medium">
                  {option.price * (totalDays === 0 ? 1 : totalDays)}€
                </span>
              </div>
            )
          );
        })}
        <div className="flex justify-between text-2xl">
          <span>Total</span>
          <span className="text-primary">{rentPrice + optionsPrice}€</span>
        </div>
        <button
          type="button"
          className="w-full place-self-center rounded-lg text-lg font-bold text-white py-2.5 bg-accent font-noToSans"
          onClick={onReservation}
        >
          PLASEAZĂ COMANDA
        </button>
      </div>
    </div>
  );
};
