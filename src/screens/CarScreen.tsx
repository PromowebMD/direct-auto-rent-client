import React, { useEffect, useState } from "react";
import { EditTab } from "../components/EditTab.tsx";
import { CarItem } from "../components/CarItem.tsx";
import { ReservationOptionsComponent } from "../components/ReservationOptionsComponent.tsx";
import { ReservationDetails } from "../components/ReservationDetails.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { ICar } from "../models/car.ts";
import { getCarById } from "../api/carsRequest.ts";
import { setCarPrice } from "../state/reservation/reservationSlice.ts";
import { getRentPriceByDays } from "../utils/getRentPriceByDays.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store.ts";
import { useCheckCalendarDataIsValid } from "../hooks/useCheckCalendarDataIsValid.ts";
import toast from "react-hot-toast";
import { LoaderComponent } from "../components/LoaderComponent.tsx";

export const CarScreen: React.FC = () => {
  const totalDays = useSelector((state: RootState) => state.totalDays);
  const reservationOptions = useSelector(
    (state: RootState) => state.reservationOptions,
  );
  const rentPrice = useSelector((state: RootState) => state.rentPrice);
  const optionsPrice = useSelector((state: RootState) => state.optionsPrice);
  const navigation = useNavigate();
  const { carId } = useParams();
  const [carItem, setCarItem] = useState<ICar>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getCarById({ carId: carId ?? "" })
      .then((value) => {
        if (value.code === "success") {
          setCarItem(value.data);
          dispatch(
            setCarPrice(getRentPriceByDays(totalDays, value.data.rentPrice)),
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [carId, dispatch, totalDays]);

  const priceList = [
    { label: "1-2 zile", value: `${carItem?.rentPrice.days1To2}€` },
    { label: "3-5 zile", value: `${carItem?.rentPrice.days3To5}€` },
    { label: "6-8 zile", value: `${carItem?.rentPrice.days6To8}€` },
    { label: "9-14 zile", value: `${carItem?.rentPrice.days9To14}€` },
    { label: "20+ zile", value: `${carItem?.rentPrice.days20Plus}€` },
    { label: "30+ zile", value: `${carItem?.rentPrice.days30Plus}€` },
  ];

  const isCalendarDataValid = useCheckCalendarDataIsValid();
  const handleOnReservation = () => {
    if (isCalendarDataValid) {
      navigation(`/reservations/${carItem?.id}`);
    } else {
      toast.error("Completați datele necesare din calendar");
    }
  };

  return (
    <section className="mb-10 grid place-items-center">
      <div className="w-full lg:mt-2">
        <EditTab />
      </div>
      <div className="px-4">
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-2 lg:grid-flow-col lg:grid-cols-3">
            <div className="col-span-2 grid place-self-center">
              {carItem && (
                <CarItem carItem={carItem} className="grid lg:flex" />
              )}
            </div>
            <div className="col-span-2 hidden gap-1 lg:grid">
              <ReservationDetails />
            </div>
            <div className="row-span-5 flex flex-col gap-4 font-oswald">
              <div className="flex flex-col gap-1">
                <h2 className="place-self-center font-normal lg:place-self-start">
                  Prețul automobilului
                </h2>
                <div className="grid grid-cols-2 gap-1 place-self-center lg:place-self-start">
                  {priceList.map((item) => {
                    return (
                      <p key={item.label} className="font-light">
                        {item.label} {item.value}
                      </p>
                    );
                  })}
                </div>
                <ReservationOptionsComponent />
              </div>
              <div>
                <h2>Detalii factură</h2>
                <p className="font-light">Taxă închiriere auto: {rentPrice}€</p>
                {reservationOptions.map((option) => {
                  return (
                    option.isChecked && (
                      <p className="font-light" key={option.id}>
                        {`${option.title}: ${option.price * (totalDays === 0 ? 1 : totalDays)}€`}
                      </p>
                    )
                  );
                })}
                <p>{`Prețul total:${rentPrice + optionsPrice}€`}</p>
              </div>
              <button
                type="button"
                className="hidden h-fit w-fit place-self-center rounded px-3 py-1 text-lg font-bold text-white bg-accent lg:block"
                onClick={handleOnReservation}
              >
                PLASEAZĂ COMANDA
              </button>
            </div>
            <div className="col-span-2 grid gap-1 lg:hidden">
              <ReservationDetails />
            </div>
            <button
              type="button"
              className="h-fit w-fit place-self-center rounded px-3 py-1 text-lg font-bold text-white bg-accent lg:hidden"
              onClick={handleOnReservation}
            >
              PLASEAZĂ COMANDA
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
